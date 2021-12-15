import { encode } from '@api3/airnode-abi';
import { cliPrint, getDeployedContract, readIntegrationInfo } from '../../src';

const res = 'result';

export const getEncodedParameters = () => {
  return encode([{ name: 'result', type: 'bytes32', value: res }]);
};

export const printResponse = async (requestId: string) => {
  const integrationInfo = readIntegrationInfo();
  const requester = await getDeployedContract(`contracts/${integrationInfo.integration}/Requester.sol`);

  // Divided by 1e6, because the response value is multiplied with 1e6 by Airnode
  cliPrint.info(`${res}  is ${(await requester.fulfilledData(requestId))} `);
};
