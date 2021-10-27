import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEthChangePercent } from '../../utils/prices';
import { AppDispatch, AppState } from '../index';
import {
  fetchEvents,
  fetchRateOfEthJpy,
  fetchTokenState,
  fetchYamatoState,
  resetEvents,
} from './actions';
import { YamatoEntiretyState } from './reducer';

/**
 * selector
 */
export function useYamatoStateForDashboard() {
  return useSelector((state: AppState) => {
    return {
      totalSupplyOfCjpy: state.yamatoEntirety.token.cjpy.totalSupply,
      tvl: state.yamatoEntirety.lending.tvl,
      tcr: state.yamatoEntirety.lending.tcr,
      rateOfEthJpy: state.yamatoEntirety.rateOfEthJpy,
      rateOfCjpyJpy: createRateOfCjpyJpy(
        state.market.rateOfCjpyEth,
        state.yamatoEntirety.rateOfEthJpy
      ),
      ethChangePercent: getEthChangePercent(
        state.yamatoEntirety.rateOfEthJpy,
        state.yamatoEntirety.prevRateOfEthJpy
      ),
    };
  });
}
export function useYamatoStateForPledge() {
  return useSelector((state: AppState) => ({
    rateOfEthJpy: state.yamatoEntirety.rateOfEthJpy,
    redemptionReserve: state.yamatoEntirety.pool.redemptionReserve,
    sweepReserve: state.yamatoEntirety.pool.sweepReserve,
    redeemableCandidate: state.yamatoEntirety.pledges.redeemableCandidate,
    sweepableCandiate: state.yamatoEntirety.pledges.sweepableCandidate,
    MCR: state.yamatoEntirety.parameter.MCR,
    GRR: state.yamatoEntirety.parameter.GRR,
  }));
}
export function useYamatoStateForWorld() {
  return useSelector((state: AppState) => ({
    events: state.yamatoEntirety.events.slice(0, 20),
  }));
}
export function useYamatoStateForInfographics() {
  return useSelector((state: AppState) => {
    return {
      rateOfCjpyJpy: createRateOfCjpyJpy(
        state.market.rateOfCjpyEth,
        state.yamatoEntirety.rateOfEthJpy
      ),
      totalCollateral: state.yamatoEntirety.lending.totalCollateral,
      totalDebt: state.yamatoEntirety.lending.totalDebt,
      tcr: state.yamatoEntirety.lending.tcr,
      rateOfEthJpy: state.yamatoEntirety.rateOfEthJpy,
      prevRateOfEthJpy: state.yamatoEntirety.prevRateOfEthJpy,
      redemptionReserve: state.yamatoEntirety.pool.redemptionReserve,
      prevRedemptionReserve: state.yamatoEntirety.pool.prevRedemptionReserve,
      sweepReserve: state.yamatoEntirety.pool.sweepReserve,
      prevSweepReserve: state.yamatoEntirety.pool.prevSweepReserve,
      MCR: state.yamatoEntirety.parameter.MCR,
      isRedeemablePledge: state.yamatoEntirety.pledges.isRedeemablePledge,
    };
  });
}

/**
 * dispatcher
 */
export function useFetchYamatoState() {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(
    (
      args: {
        [key in keyof Pick<
          YamatoEntiretyState,
          'lending' | 'pledges' | 'pool' | 'parameter'
        >]: key extends 'pool'
          ? Omit<
              YamatoEntiretyState[key],
              'prevRedemptionReserve' | 'prevSweepReserve'
            >
          : YamatoEntiretyState[key];
      }
    ) => dispatch(fetchYamatoState(args)),
    [dispatch]
  );
}
export function useFetchTokenState() {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(
    (args: YamatoEntiretyState['token']) => {
      dispatch(fetchTokenState(args));
    },
    [dispatch]
  );
}
export function useFetchRateOfEthJpy() {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(
    (rateOfEthJpy: YamatoEntiretyState['rateOfEthJpy']) =>
      dispatch(fetchRateOfEthJpy({ rateOfEthJpy })),
    [dispatch]
  );
}
export function useFetchEvents() {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(
    (events: YamatoEntiretyState['events']) =>
      dispatch(fetchEvents({ events })),
    [dispatch]
  );
}
export function useResetEvents() {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(() => dispatch(resetEvents()), [dispatch]);
}

/**
 * utils
 */

function createRateOfCjpyJpy(
  rateOfCjpyEth: { [source: string]: number },
  rateOfEthJpy: number
) {
  return Object.entries(rateOfCjpyEth)
    .sort((a, b) => (a[1] > b[1] ? -1 : 1))
    .map((data) => {
      data[1] = rateOfEthJpy ? data[1] / rateOfEthJpy : 0;
      return data;
    });
}
