import { StandardTokenABI } from './ABI/StandardToken/Token.js';
import { TokenLockABI } from './ABI/TokenLock/tokenlock.js';
import { LptokenLockABI } from './ABI/LiquidityLock/lptokenlocker.js';
import { LptokenABI } from './ABI/LiquidityLock/lptoken.js';
import { PresaleManageABI } from './ABI/Presale/PresaleManage.js';
import { PresaleSettingABI } from './ABI/Presale/PresaleSetting.js';
import { PresaleABI } from './ABI/Presale/Presale.js';
// import {PresaleABI} from "./ABI/Presale/Presale_Temp.js";
import { LockForwarderABI } from './ABI/Presale/PresaleLockForwarder.js';
import { manageCreateTokenABI } from './ABI/CreateToken/CreateManage.js';
import { standardTokenCreateABI } from './ABI/CreateToken/StandardToken.js';
import { liquidityTokenCreateABI } from './ABI/CreateToken/LiquidityToken.js';

export const TOKENLOCK_ADDRESS = {
  eth: '0x98106b29701B693AF00F002679FdbeF47Ef43E17',
  bsc: '0x0715d13eCa068f3707CC27A246FF2A85f99F5714',
  mtr: '0x0715d13eCa068f3707CC27A246FF2A85f99F5714',
  polygon: '',
};

export const LIQUIDITYLOCK_ADDRESS = {
  eth: '0x78b06B8096A471CABfCF189beFb24A134FE2E88C',
  bsc: '0xdb78C45F1C11382962a95e6e27d306015634Aa5b',
  neon: '0x5b8B7995f451b09a1e24B634ADD62199b7Bcd3e7',
  polygon: '',
};

//0xeBcF02B5eD0C8694d994A1D3E974d4a0087d8F2f
export const PRESALE_MANAGE_ADDRESS = {
  eth: '0x3b09f46D4716bB7d6a08315C91158aFE27618830',
  bsc: '0x1376C5b77a8Bbf757De61F5B72F528BaE5B5eF32',
  polygon: '',
};

export const CREATE_TOKEN_MANAGE_ADDRESS = {
  eth: '0xC19A09597C4D313fb01Df54fCb1D8B329cDEB379',
  bsc: '0x1c9C08c84074f4957EF0D9F3360d623460a7B22B',
  neon: '0xA39EF21986Ad330aE89Ea2780d3A2184Bacd9Df0',
  polygon: '',
};

////////////////////////////////////////////////////////////////////////////////////////////

export const STANDARD_TOKEN_ABI = StandardTokenABI;

export const TOKEN_LOCK_ABI = TokenLockABI;

export const LIQUIDITY_LOCK_ABI = {
  lock: LptokenLockABI,
  token: LptokenABI,
};

export const PRESALE_ABI = {
  manage: PresaleManageABI,
  setting: PresaleSettingABI,
  presale: PresaleABI,
  lockforwarder: LockForwarderABI,
};

export const CREATE_TOKEN_ABI = {
  manage: manageCreateTokenABI,
  standard: standardTokenCreateABI,
  liquidity: liquidityTokenCreateABI,
};

export const GetCoinPriceURL = {
  eth: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR',
  bsc: 'https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=BTC,USD,EUR',
  polygon: 'https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=BTC,USD,EUR',
};

export const CRYPTCOMPARE_API_KEY = 'a77e4e82d09267dd87bb3041c0379574ac267a20bc80a16e175b3ba39cedc40b';
