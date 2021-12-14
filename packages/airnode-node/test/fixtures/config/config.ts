import * as ois from './ois';
import * as settings from './node-settings';
import { Config, RrpTrigger, ApiCredentials } from '../../../src/types';

export function buildRrpTrigger(overrides?: Partial<RrpTrigger>): RrpTrigger {
  return {
    endpointId: '0x13dea3311fe0d6b84f4daeab831befbc49e19e6494c41e9e065a09c3c68f43b6',
    endpointName: 'convertToUSD',
    oisTitle: 'Currency Converter API',
    testable: true,
    ...overrides,
  };
}

export function buildApiCredentials(overrides?: Partial<ApiCredentials>): ApiCredentials {
  return {
    securitySchemeName: 'My Security Scheme',
    securitySchemeValue: 'supersecret',
    oisTitle: 'Currency Converter API',
    ...overrides,
  };
}

export function buildConfig(overrides?: Partial<Config>): Config {
  return {
    chains: [
      {
        authorizers: [],
        contracts: {
          AirnodeRrp: '0x197F3826040dF832481f835652c290aC7c41f073',
        },
        id: '31337',
        type: 'evm',
        providers: {
          ['EVM local']: {
            url: 'http://localhost:4111',
          },
        },
      },
    ],
    nodeSettings: settings.buildNodeSettings(),
    triggers: {
      rrp: [buildRrpTrigger()],
    },
    ois: [ois.buildOIS()],
    apiCredentials: [buildApiCredentials()],
    ...overrides,
  };
}
