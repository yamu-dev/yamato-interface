import { Flex, Grid, GridItem, HStack, Skeleton, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { YAMATO_SYMBOL } from '../../../constants/yamato';
// import { usePledgeData } from '../../../state/pledge/hooks';
// import { useWalletState } from '../../../state/wallet/hooks';
// import { useYamatoStateForPledge } from '../../../state/yamato-entirety/hooks';
import { ItemTitleValue, ItemTitleForPledge } from '../../CommonItem';
import BorrowInput from './BorrowingInput';
import RepayInput from './RepayInput';
import { formatCollateralizationRatio, formatPrice } from 'lib/utils/prices';
import { PledgeItem } from '../PledgeItem';

function getBorrowableAmount(
  collateral: number,
  debt: number,
  rateOfEthJpy: number,
  MCR: number
) {
  if (MCR <= 0) {
    return 0;
  }
  const collateralBasedJpy = collateral * rateOfEthJpy;
  const MCR2 = MCR / 100;
  if (debt > 0) {
    const ICR = collateralBasedJpy / debt;
    if (ICR - MCR2 <= 0) {
      return 0;
    }
  }

  // coll / (debt + x) = MCR  ->  x = (coll - debt * MCR) / MCR
  const borrowableAmount = (collateralBasedJpy - debt * MCR2) / MCR2;
  return borrowableAmount;
}

export default function Debt() {
  const { rateOfEthJpy, MCR, firstLoadCompleted } = useYamatoStateForPledge();
  const { collateral, debt } = usePledgeData();
  const { cjpy } = useWalletState();
  const { t } = useTranslation();

  return (
    <>
      <Grid templateColumns="repeat(16, 1fr)" gap={4} mb={4} >
        {/* <GridItem colSpan={1.8}>
          <ItemTitleForPledge marginTop={15}>
            {t('pledge.debt.maximumBorrowableAmount')}
          </ItemTitleForPledge>
        </GridItem>
        <GridItem colSpan={2}>
          <ItemTitleValue marginTop={15}>
            {firstLoadCompleted ? (
              <>
                {
                  formatPrice(
                    getBorrowableAmount(collateral, debt, rateOfEthJpy, MCR),
                    'jpy'
                  ).value
                }
                {` `}
                {YAMATO_SYMBOL.YEN}
              </>
            ) : (
              <Skeleton
                height="1.4rem"
                width="7rem"
                style={{
                  lineHeight: '1.4rem',
                }}
              />
            )}
          </ItemTitleValue>
        </GridItem> */}
        <PledgeItem
          title={t('pledge.debt.maximumBorrowableAmount')}
          stat={formatPrice(getBorrowableAmount(collateral, debt, rateOfEthJpy, MCR), 'jpy').value + ' ' + YAMATO_SYMBOL.YEN}
          firstLoadCompleted={firstLoadCompleted}
        />
      </Grid>
      <Grid templateColumns="repeat(16, 1fr)" gap={4} mb={0} >
        {/* <GridItem colSpan={2}>
          <ItemTitleForPledge marginTop={15}>
            {t('pledge.debt.borrowBalance')}
          </ItemTitleForPledge>
        </GridItem>

        <GridItem colSpan={3}>
          <ItemTitleValue
            marginTop={15}
            data-testid="borrowing-data-currentAmount"
          >
            {firstLoadCompleted ? (
              <>
                {formatPrice(debt, 'jpy').value}
                {` `}
                {YAMATO_SYMBOL.YEN}
              </>
            ) : (
              <Skeleton
                height="1.4rem"
                width="7rem"
                style={{
                  lineHeight: '1.4rem',
                }}
              />
            )}
          </ItemTitleValue>
        </GridItem> */}
        <PledgeItem
          title={t('pledge.debt.borrowBalance')}
          stat={formatPrice(debt, 'jpy').value + ' ' + YAMATO_SYMBOL.YEN}
          firstLoadCompleted={firstLoadCompleted}
        />
        <Inputs />
      </Grid>
      <Grid templateColumns="repeat(8, 1fr)" gap={4} mb={0} mt={-8}>
        {/* <GridItem colSpan={1}>
          <ItemTitleForPledge marginTop={2}>
            {t('pledge.debt.collateralRate')}
          </ItemTitleForPledge>
        </GridItem>
        <GridItem colSpan={1}>
          <ItemTitleValue marginTop={2}>
            {firstLoadCompleted ? (
              <>
                {formatCollateralizationRatio(collateral * rateOfEthJpy, debt)}%
              </>
            ) : (
              <Skeleton
                height="1.4rem"
                width="7rem"
                style={{
                  lineHeight: '1.4rem',
                }}
              />
            )}
          </ItemTitleValue>
        </GridItem> */}
        <PledgeItem
          title={t('pledge.debt.collateralRate')}
          stat={formatCollateralizationRatio(collateral * rateOfEthJpy, debt) + '%'}
          firstLoadCompleted={firstLoadCompleted}
        />
      </Grid>
    </>
  );
}

export function Inputs() {
  const { rateOfEthJpy, MCR, firstLoadCompleted } = useYamatoStateForPledge();
  const { collateral, debt } = usePledgeData();
  const { cjpy } = useWalletState();
  const { t } = useTranslation();
  return (
    <>
      <Flex>
        <HStack>
          <BorrowInput
            collateral={collateral}
            debt={debt}
            rateOfEthJpy={rateOfEthJpy}
            MCR={MCR}
          />
          <RepayInput
            collateral={collateral}
            debt={debt}
            rateOfEthJpy={rateOfEthJpy}
            cjpy={cjpy}
          />
        </HStack>
      </Flex>
    </>
  );
}

//// TODO: The following functions are not implemented
function useYamatoStateForPledge(): { rateOfEthJpy: any; MCR: any; firstLoadCompleted: any; } {
  return {
    rateOfEthJpy: 10000000,
    MCR: 10000,
    firstLoadCompleted: true,
  };
}

function usePledgeData(): { collateral: any; debt: any; } {
  return {
    collateral: 9999,
    debt: 99999999,
  };
}

function useWalletState(): { cjpy: any; } {
  return {
    cjpy: 999999999,
  };
}

