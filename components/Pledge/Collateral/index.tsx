import { Grid, GridItem, Skeleton } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { YAMATO_SYMBOL } from '../../../constants/yamato';
// import { usePledgeData } from '../../../state/pledge/hooks';
// import { useYamatoStateForPledge } from '../../../state/yamato-entirety/hooks';
import { ItemTitleForPledge, ItemTitleValue } from '../../CommonItem';
import DepositInput from './DepositInput';
import WithdrawalInput from './WithdrawalInput';
import { formatPrice } from 'lib/utils/prices';
import { multiplyToNum } from 'lib/utils/bignumber';
import { PledgeItem } from '../PledgeItem';

export default function Collateral() {
  const { rateOfEthJpy, firstLoadCompleted } = useYamatoStateForPledge();
  const { collateral, debt } = usePledgeData();
  const { t } = useTranslation();

  return (
    <>
      <Grid templateColumns="repeat(16, 1fr)" gap={4} mb={0} >
        {/* <GridItem colSpan={2}>
          <ItemTitleForPledge marginTop={26}>
            {t('pledge.collateral.collateralBalance')}
          </ItemTitleForPledge>
        </GridItem> */}
        <PledgeItem
          title={'ETH' + t('dashboard.price')}
          stat={formatPrice(collateral, 'eth').value + ' ' + YAMATO_SYMBOL.COLLATERAL}
          firstLoadCompleted={firstLoadCompleted}
        />

        {/* <GridItem colSpan={3}>
          <ItemTitleValue
            marginTop={26}
            data-testid="collateral-data-currentAmount"
          >
            {firstLoadCompleted ? (
              <>
                {formatPrice(collateral, 'eth').value}
                {` `}
                {YAMATO_SYMBOL.COLLATERAL}
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

        {/* <GridItem colSpan={5}> */}
        <DepositInput
          collateral={collateral}
          debt={debt}
          rateOfEthJpy={rateOfEthJpy}
        />
        {/* </GridItem> */}

        {/* <GridItem colSpan={6}> */}
        <WithdrawalInput
          collateral={collateral}
          debt={debt}
          rateOfEthJpy={rateOfEthJpy}
        />
        {/* </GridItem> */}
      </Grid>

      <Grid templateColumns="repeat(8, 1fr)" gap={4} mb={4}>
        {/* <GridItem colSpan={1}>
          <ItemTitleForPledge marginTop={26}>
            {t('pledge.collateral.valuation')}
          </ItemTitleForPledge>
        </GridItem>
        <GridItem colSpan={2}>
          <ItemTitleValue marginTop={26}>
            {firstLoadCompleted ? (
              <>
                ¥
                {
                  formatPrice(multiplyToNum(collateral, rateOfEthJpy), 'jpy')
                    .value
                }
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
          title={t('pledge.collateral.valuation')}
          stat={`¥${formatPrice(multiplyToNum(collateral, rateOfEthJpy), 'jpy').value}`}
          firstLoadCompleted={firstLoadCompleted}
        />
      </Grid>
    </>
  );
}

//// TODO: Please remove the following "export" statement once you have modified the code.
function useYamatoStateForPledge(): { rateOfEthJpy: any; firstLoadCompleted: any; } {
  return { rateOfEthJpy: 9999, firstLoadCompleted: true };
}

function usePledgeData(): { collateral: any; debt: any; } {
  return { collateral: 9999, debt: 999 };
}

