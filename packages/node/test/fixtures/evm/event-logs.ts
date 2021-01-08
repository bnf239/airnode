import { ethers } from 'ethers';

type Log = ethers.providers.Log;

// =================================================================
// Short requests
// =================================================================
export function buildShortClientRequest(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 15,
    blockHash: '0x23e9bb1fb0beffe069a60008b705ff3de4abdcbf1c134227ad65fed3883822b6',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000009fe46736679d2d9a65f0992f2272de9f3c7fa6e03576f03d33eb6dd0c6305509117a9501a938aab52bb466a21fe536c1e37511b400000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000060316200000000000000000000000000000000000000000000000000000000000066726f6d000000000000000000000000000000000000000000000000000000004554480000000000000000000000000000000000000000000000000000000000',
    topics: [
      '0xfcbcd5adb2d26ecd4ad50e6267e977fd479fcd0a6c82bde8eea85290ab3b46e6',
      '0x9e5a89de5a7e780b9eb5a61425a3a656f0c891ac4c56c07037d257724af490c9',
      '0x9d07a8b0d9087984fc84b04643fb17c42bdfda910d68afe64d958590b2ef4070',
    ],
    transactionHash: '0x09268ef53816b82b447d21f951c351669d97ca4597ebf3aac392fbb7236ea260',
    logIndex: 0,
    ...overrides,
  };
}

export function buildShortClientRequestFulfilled(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 19,
    blockHash: '0x9c46bd9b67693979aadf024542aff7ab95575ca1dddcc7b9ec73a288280cec76',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043',
    topics: [
      '0x1bdbe9e5d42a025a741fc3582eb3cad4ef61ac742d83cc87e545fbd481b926b5',
      '0x9e5a89de5a7e780b9eb5a61425a3a656f0c891ac4c56c07037d257724af490c9',
      '0x9d07a8b0d9087984fc84b04643fb17c42bdfda910d68afe64d958590b2ef4070',
    ],
    transactionHash: '0xd59041ab433c2d47a1c7663db28cb429726a925d6893b5b47f68c8e38f93063c',
    logIndex: 0,
    ...overrides,
  };
}

// =================================================================
// Regular requests
// =================================================================
export function buildClientRequest(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 16,
    blockHash: '0x728e7031a3eb0d156fc6b27ba0d72280d43154f061348ec1f0d051c2f16300d6',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000009fe46736679d2d9a65f0992f2272de9f3c7fa6e03576f03d33eb6dd0c6305509117a9501a938aab52bb466a21fe536c1e37511b400000000000000000000000000000000000000000000000000000000000000020000000000000000000000003580c27edaafdb494973410b794f3f07ffaea5e50000000000000000000000009fe46736679d2d9a65f0992f2272de9f3c7fa6e0d3bd14640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000060316200000000000000000000000000000000000000000000000000000000000066726f6d000000000000000000000000000000000000000000000000000000004554480000000000000000000000000000000000000000000000000000000000',
    topics: [
      '0xaff6f5e5548953a11cbb1cfdd76562512f969b0eba0a2163f2420630d4dda97b',
      '0x9e5a89de5a7e780b9eb5a61425a3a656f0c891ac4c56c07037d257724af490c9',
      '0xffb6345fd2263fa472b106c16f66e863155a67d25127d6ae7bcc2c01500ab618',
    ],
    transactionHash: '0x33187e7e8af331baa11ba964b39d65f3d9127dbcf285a34a4b6f0d5c5d7babd7',
    logIndex: 0,
    ...overrides,
  };
}

export function buildClientRequestFulfilled(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 20,
    blockHash: '0x67a328c33e84692e86b226d32b325461222ae24d52b97632b6f76288b5a9bfea',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043',
    topics: [
      '0x1bdbe9e5d42a025a741fc3582eb3cad4ef61ac742d83cc87e545fbd481b926b5',
      '0x9e5a89de5a7e780b9eb5a61425a3a656f0c891ac4c56c07037d257724af490c9',
      '0xffb6345fd2263fa472b106c16f66e863155a67d25127d6ae7bcc2c01500ab618',
    ],
    transactionHash: '0xb5e91680be948547b6959031040b3995348e33538a547859c12e2371cd7848a4',
    logIndex: 0,
    ...overrides,
  };
}

// =================================================================
// Full requests
// =================================================================
export function buildFullClientRequest(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 17,
    blockHash: '0x2afca383dc696ab46188bb2612c5831802cfe28875e51d0b2fb0993a5277e776',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000000000000000000000000000000000000000000020000000000000000000000009fe46736679d2d9a65f0992f2272de9f3c7fa6e0ac2e948e29db14b568a3cbaeedc66c0f9b5c5312f6b562784889e8cbd6a6dd9e00000000000000000000000000000000000000000000000000000000000000020000000000000000000000003580c27edaafdb494973410b794f3f07ffaea5e50000000000000000000000009fe46736679d2d9a65f0992f2272de9f3c7fa6e0d3bd14640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000160316262626262000000000000000000000000000000000000000000000000000066726f6d000000000000000000000000000000000000000000000000000000004554480000000000000000000000000000000000000000000000000000000000746f00000000000000000000000000000000000000000000000000000000000055534400000000000000000000000000000000000000000000000000000000005f7479706500000000000000000000000000000000000000000000000000000075696e74323536000000000000000000000000000000000000000000000000005f70617468000000000000000000000000000000000000000000000000000000726573756c7400000000000000000000000000000000000000000000000000005f74696d657300000000000000000000000000000000000000000000000000003130303030300000000000000000000000000000000000000000000000000000',
    topics: [
      '0x775e78a8e7375d14ad03d31edd0a27b29a055f732bca987abfe8082c16ed7e44',
      '0x9e5a89de5a7e780b9eb5a61425a3a656f0c891ac4c56c07037d257724af490c9',
      '0x119834e11ffe8806c9ef9f2e5589aa84a4b2d35c14c00846eaaead7f35cdf5fb',
    ],
    transactionHash: '0xed554fbbb2971fb2af7f5c800b586de239d806a31785252eb957ac1a9cf72468',
    logIndex: 0,
    ...overrides,
  };
}

export function buildFullRequestFulfilled(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 21,
    blockHash: '0x822fcb202ae8934716e9b64ab8ba8f5508cec41193a3acbc9049251c7087b400',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043',
    topics: [
      '0x1bdbe9e5d42a025a741fc3582eb3cad4ef61ac742d83cc87e545fbd481b926b5',
      '0x9e5a89de5a7e780b9eb5a61425a3a656f0c891ac4c56c07037d257724af490c9',
      '0x119834e11ffe8806c9ef9f2e5589aa84a4b2d35c14c00846eaaead7f35cdf5fb',
    ],
    transactionHash: '0xf731d66caaaf31565716d7a6f626def0584b8e3771a07739ddf3f676b5ec93da',
    logIndex: 0,
    ...overrides,
  };
}

// =================================================================
// Withdrawals
// =================================================================
export function buildWithdrawalRequest(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 18,
    blockHash: '0x42034a1ce4a5dad61e7b4d17d608ffdf89cb3e9b5cd1bcb5c34ce7db152b3ec8',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x000000000000000000000000eadfe69e7d9e1d369d05df6a88f687129523e16d000000000000000000000000a8b78f8b7ac12853a847fa07c69283d52fdd47a7',
    topics: [
      '0x3d0ebccb4fc9730699221da0180970852f595ed5c78781346149123cbbe9f1d3',
      '0x9e5a89de5a7e780b9eb5a61425a3a656f0c891ac4c56c07037d257724af490c9',
      '0x0000000000000000000000000000000000000000000000000000000000000001',
      '0x5104cbd15362576f8591d30ab8a9bf7cd46359da50888732394444660717f124',
    ],
    transactionHash: '0xac3aa3683548a631dd7561cfa32d4e003f43bfc061bb40adc9920c9c1d4d6a60',
    logIndex: 0,
    ...overrides,
  };
}

export function buildWithdrawalFulfilled(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 22,
    blockHash: '0x0396fbf4328f2d7001083e9092baaf1805c33c365881d1e1bc5a7db4a4abdb11',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x000000000000000000000000eadfe69e7d9e1d369d05df6a88f687129523e16d000000000000000000000000a8b78f8b7ac12853a847fa07c69283d52fdd47a70000000000000000000000000000000000000000000000000ddef4f5d4f7c000',
    topics: [
      '0x9e7b58b29aa3b972bb0f457499d0dfd00bf23905b0c3358fb864e7120402aefa',
      '0x9e5a89de5a7e780b9eb5a61425a3a656f0c891ac4c56c07037d257724af490c9',
      '0x0000000000000000000000000000000000000000000000000000000000000001',
      '0x5104cbd15362576f8591d30ab8a9bf7cd46359da50888732394444660717f124',
    ],
    transactionHash: '0xd7018b960a11f53e83763b2a3c582b5e9178caf24fe0e17e3d3367962af8885f',
    logIndex: 0,
    ...overrides,
  };
}
