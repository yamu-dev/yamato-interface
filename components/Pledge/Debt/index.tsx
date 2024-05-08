import { Flex, Grid, GridItem, Skeleton, VStack } from '@chakra-ui/react';
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
      <Flex wrap="wrap" gap={8} mt={2}>
        <VStack>
          <PledgeItem
                title={t('pledge.debt.maximumBorrowableAmount')}
                stat={formatPrice(getBorrowableAmount(collateral, debt, rateOfEthJpy, MCR), 'jpy').value + ' ' + YAMATO_SYMBOL.YEN}
                firstLoadCompleted={firstLoadCompleted}
          />
          <PledgeItem
                title={t('pledge.debt.borrowBalance')}
                stat={formatPrice(debt, 'jpy').value + ' ' + YAMATO_SYMBOL.YEN}
                firstLoadCompleted={firstLoadCompleted}
          />
          <PledgeItem
                title={t('pledge.debt.collateralRate')}
                stat={formatCollateralizationRatio(collateral * rateOfEthJpy, debt) + '%'}
                firstLoadCompleted={firstLoadCompleted}
          />
        </VStack>
        
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

