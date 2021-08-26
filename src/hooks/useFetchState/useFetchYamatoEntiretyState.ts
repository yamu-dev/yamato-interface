import { formatEther } from '../../utils/web3';
import {
  useYamatoMainContract,
  useYamatoPoolContract,
  useYamatoPriceFeedContract,
} from '../useContract';

export async function useFetchYamatoEntiretyState(): Promise<{
  totalCollateral: number;
  totalDebt: number;
  redemptionReserve: number;
  sweepReserve: number;
  sweepableCandiate: number;
  tvl: number;
  rateOfEthJpy: number;
  tcr: number;
}> {
  // TODO: subgraph pattern
  return useFetchYamatoEntiretyStateFromContract();
}

async function useFetchYamatoEntiretyStateFromContract() {
  const yamatoMainContract = useYamatoMainContract();
  const yamatoPoolContract = useYamatoPoolContract();
  const yamatoPriceFeedContract = useYamatoPriceFeedContract();

  const yamatoMainResults = yamatoMainContract
    ? {
        totalCollateral: Number(
          formatEther(await yamatoMainContract.totalColl())
        ),
        totalDebt: (await yamatoMainContract.totalDebt()).toNumber(),
      }
    : {
        totalCollateral: 0,
        totalDebt: 0,
      };
  const yamatoPoolResults = yamatoPoolContract
    ? {
        redemptionReserve: (
          await yamatoPoolContract.redemptionReserve()
        ).toNumber(),
        sweepReserve: (await yamatoPoolContract.sweepReserve()).toNumber(),
        sweepableCandiate: 0.5, // FIXME: ISSUE #27
        tvl: (await yamatoPoolContract.lockedCollateral()).toNumber(),
      }
    : {
        redemptionReserve: 0,
        sweepReserve: 0,
        sweepableCandiate: 0,
        tvl: 0,
      };
  const yamatoPriceFeedResults = yamatoPriceFeedContract
    ? {
        rateOfEthJpy: (
          await yamatoPriceFeedContract.lastGoodPrice()
        ).toNumber(),
      }
    : {
        rateOfEthJpy: 0,
      };
  const tcr =
    ((yamatoMainResults.totalCollateral * yamatoPriceFeedResults.rateOfEthJpy) /
      yamatoMainResults.totalDebt) *
    100;

  return {
    ...yamatoMainResults,
    ...yamatoPoolResults,
    ...yamatoPriceFeedResults,
    tcr,
  };
}