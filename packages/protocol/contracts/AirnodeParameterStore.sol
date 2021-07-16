// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./RequesterStore.sol";
import "./interfaces/IAirnodeParameterStore.sol";
import "./authorizers/interfaces/IRrpAuthorizer.sol";

/// @title The contract where the Airnode parameters are stored
contract AirnodeParameterStore is
    Ownable,
    RequesterStore,
    IAirnodeParameterStore
{
    struct AirnodeParameter {
        address admin;
        string xpub;
        address[] authorizers;
    }

    address[] public defaultAuthorizers;
    mapping(bytes32 => AirnodeParameter) internal airnodeParameters;
    mapping(bytes32 => bytes32) private withdrawalRequestIdToParameters;

    function setDefaultAuthorizers(address[] memory _defaultAuthorizers)
        external
        onlyOwner
    {
        defaultAuthorizers = _defaultAuthorizers;
        emit SetDefaultAuthorizers(_defaultAuthorizers);
    }

    /// @notice Allows the master wallet (m) of the Airnode to set its
    /// parameters on this chain
    /// @dev This method can also be used to update `admin`, `xpub` and/or
    /// `authorizers`.
    /// `admin` is not used in the protocol contracts. It is intended to
    /// potentially be referred to in authorizer contracts.
    /// Note that the Airnode can announce an incorrect `xpub`. However, the
    /// mismatch between it and the airnodeId can be detected off-chain.
    /// This needs to be payable to be callable by
    /// setAirnodeParametersAndForwardFunds().
    /// @param xpub Master public key of the Airnode
    /// @param authorizers Authorizer contract addresses of the Airnode
    /// @return airnodeId Airnode ID
    function setAirnodeParameters(
        string calldata xpub,
        address[] calldata authorizers
    ) public payable override returns (bytes32 airnodeId) {
        airnodeId = keccak256(abi.encode(msg.sender));
        airnodeParameters[airnodeId] = AirnodeParameter({
            admin: msg.sender,
            xpub: xpub,
            authorizers: authorizers
        });
        emit AirnodeParametersSet(airnodeId, msg.sender, xpub, authorizers);
    }

    /// @notice Called by the requester admin to create a request for the
    /// Airnode to send the funds kept in their designated wallet to the
    /// destination
    /// @dev We do not need to use the withdrawal request parameters in the
    /// request ID hash to validate them at the node side because all of the
    /// parameters are used during fulfillment and will get validated on-chain
    /// @param airnodeId Airnode ID
    /// @param designatedWallet Designated wallet that the withdrawal is
    /// requested from
    /// @param destination Withdrawal destination
    function requestWithdrawal(
        bytes32 airnodeId,
        address designatedWallet,
        address destination
    ) external override {
        bytes32 withdrawalRequestId = keccak256(
            abi.encodePacked(
                requesterToNextWithdrawalRequestIndex[msg.sender]++,
                block.chainid,
                msg.sender
            )
        );
        bytes32 withdrawalParameters = keccak256(
            abi.encodePacked(
                airnodeId,
                msg.sender,
                designatedWallet,
                destination
            )
        );
        withdrawalRequestIdToParameters[
            withdrawalRequestId
        ] = withdrawalParameters;
        emit WithdrawalRequested(
            airnodeId,
            msg.sender,
            withdrawalRequestId,
            designatedWallet,
            destination
        );
    }

    /// @notice Called by the Airnode using the designated wallet to
    /// fulfill the withdrawal request made by the requester
    /// @dev The Airnode sends the funds through this method to emit an
    /// event that indicates that the withdrawal request has been fulfilled
    /// @param airnodeId Airnode ID
    /// @param requester Requester from RequesterStore
    /// @param destination Withdrawal destination
    function fulfillWithdrawal(
        bytes32 withdrawalRequestId,
        bytes32 airnodeId,
        address requester,
        address destination
    ) external payable override {
        bytes32 withdrawalParameters = keccak256(
            abi.encodePacked(airnodeId, requester, msg.sender, destination)
        );
        require(
            withdrawalRequestIdToParameters[withdrawalRequestId] ==
                withdrawalParameters,
            "No such withdrawal request"
        );
        delete withdrawalRequestIdToParameters[withdrawalRequestId];
        emit WithdrawalFulfilled(
            airnodeId,
            requester,
            withdrawalRequestId,
            msg.sender,
            destination,
            msg.value
        );
        (bool success, ) = destination.call{value: msg.value}(""); // solhint-disable-line
        require(success, "Transfer failed");
    }
    for (uint256 ind = 0; ind < noAuthorizers; ind++) {
      address authorizerAddress = authorizerAddresses[ind];
      if (authorizerAddress == address(0)) {
        return true;
      }
      IRrpAuthorizer authorizer = IRrpAuthorizer(authorizerAddress);
      if (authorizer.isAuthorized(requestId, airnodeId, endpointId, requester, designatedWallet, clientAddress)) {
        return true;
      }
    }

    /// @notice Retrieves the parameters of the Airnode addressed by the ID
    /// @param airnodeId Airnode ID
    /// @return admin Airnode admin
    /// @return xpub Master public key of the Airnode
    /// @return authorizers Authorizer contract addresses of the Airnode
    function getAirnodeParameters(bytes32 airnodeId)
        external
        view
        override
        returns (
            address admin,
            string memory xpub,
            address[] memory authorizers
        )
    {
        AirnodeParameter storage airnodeParameter = airnodeParameters[
            airnodeId
        ];
        admin = airnodeParameter.admin;
        xpub = airnodeParameter.xpub;
        authorizers = airnodeParameter.authorizers;
    }
}
