import { Flex, Grid, GridItem, Skeleton, VStack } from '@chakra-ui/react';
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
      {/* <Grid templateColumns="repeat(16, 1fr)" gap={4} mb={0} > */}
      <Flex wrap="wrap" gap={8}>
        <VStack>
          <PledgeItem
                title={t('pledge.collateral.collateralBalance')}
                stat={formatPrice(collateral, 'eth').value + ' ' + YAMATO_SYMBOL.COLLATERAL}
                firstLoadCompleted={firstLoadCompleted}
          />
          <PledgeItem
            title={t('pledge.collateral.valuation')}
            stat={`¥${formatPrice(multiplyToNum(collateral, rateOfEthJpy), 'jpy').value}`}
            firstLoadCompleted={firstLoadCompleted}
          />
        </VStack>

        <DepositInput
            collateral={collateral}
            debt={debt}
            rateOfEthJpy={rateOfEthJpy}
        />
        <WithdrawalInput
            collateral={collateral}
            debt={debt}
            rateOfEthJpy={rateOfEthJpy}
        />
      </Flex>
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

