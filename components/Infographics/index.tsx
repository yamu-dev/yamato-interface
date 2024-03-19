import { Card, CardBody, CardHeader, Grid, GridItem, HStack, Heading, Tooltip, useMediaQuery } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
// import { useYamatoStateForInfographics } from '../../state/yamato-entirety/hooks';
// import { getEthChangePercent } from '../../utils/prices';
import {
  CategoryTitle,
  ConentBox,
  HeaderBox1,
  ItemTitleValue,
} from '../CommonItem';
// import TerminologyPopover from '../TerminologyPopover';
// import CjpyPrice from './CjpyPrice';
// import EthPrice from './EthPrice';
// import Pool from './Pool';
// import Tcr from './Tcr';
import {
  getReserveRankOfRedemption,
  getReserveRankOfSweep,
  getCjpyPriceRank,
  getColorCodePerTcr,
  getEthPriceRank,
  getSignalMessages,
} from './functions';
import { QuestionIcon } from '@chakra-ui/icons';

function getCjpyRank(rateOfCjpyJpy: [string, number]) {
  if (!rateOfCjpyJpy || !rateOfCjpyJpy[1]) {
    return 0;
  }

  const rawPrice = rateOfCjpyJpy[1];
  return getCjpyPriceRank(rawPrice);
}

export interface InfographicsProps {
  // state.market
  rateOfCjpyJpy: [string, number][];

  // state.yamatoEntirety
  totalCollateral: number; // state.yamatoEntirety.lending.totalCollateral
  totalDebt: number; // state.yamatoEntirety.lending.totalDebt
  tcr: number; // state.yamatoEntirety.lending.tcr
  rateOfEthJpy: number; // state.yamatoEntirety.rateOfEthJpy
  prevRateOfEthJpy: number; // state.yamatoEntirety.prevRateOfEthJpy
  redemptionReserve: number; // state.yamatoEntirety.pool.redemptionReserve
  prevRedemptionReserve: number; // state.yamatoEntirety.pool.prevRedemptionReserve
  sweepReserve: number; // state.yamatoEntirety.pool.sweepReserve
  prevSweepReserve: number; // state.yamatoEntirety.pool.prevSweepReserve
}

// export function InfographicsHelp() {
//   const { t } = useTranslation();
//   return (
//     <TerminologyPopover>
//       <ItemTitleValue>{t('infographics.tcr')}</ItemTitleValue>
//       <ItemTitleValue>{t('infographics.mcr')}</ItemTitleValue>
//     </TerminologyPopover>
//   );
// }

// export function InfographicsContent(props: Partial<InfographicsProps>) {
//   const yamatoState = useYamatoStateForInfographics();
//   const mixedValues = { ...yamatoState, ...props };
//   const { t } = useTranslation();

//   const {
//     rateOfCjpyJpy,
//     rateOfEthJpy,
//     prevRateOfEthJpy,
//     redemptionReserve,
//     prevRedemptionReserve,
//     sweepReserve,
//     prevSweepReserve,
//     totalCollateral,
//     totalDebt,
//     tcr,
//     MCR,
//     isRedeemablePledge,
//   } = mixedValues;

//   const fixedTcr = useMemo(() => {
//     return props.hasOwnProperty('totalCollateral') ||
//       props.hasOwnProperty('totalDebt') ||
//       props.hasOwnProperty('rateOfEthJpy')
//       ? (100 * totalCollateral * rateOfEthJpy) / totalDebt
//       : tcr;
//   }, [props, totalDebt, totalCollateral, rateOfEthJpy, tcr]);
//   const ethChangePercent = useMemo(
//     () => getEthChangePercent(rateOfEthJpy, prevRateOfEthJpy),
//     [rateOfEthJpy, prevRateOfEthJpy]
//   );
//   const isDecreaseForRedemptionReserve = useMemo(
//     () => redemptionReserve < prevRedemptionReserve,
//     [redemptionReserve, prevRedemptionReserve]
//   );
//   const isDecreaseForSweepReserve = useMemo(
//     () => sweepReserve < prevSweepReserve,
//     [sweepReserve, prevSweepReserve]
//   );

//   /**
//    * All 21 Ranks(-10 ~ +10)
//    */
//   const cjpyPriceRank = useMemo(
//     () => getCjpyRank(rateOfCjpyJpy[0]),
//     [rateOfCjpyJpy]
//   );
//   /**
//    * All 91 Ranks(-45 ~ +45)
//    */
//   const ethPriceRank = useMemo(
//     () => getEthPriceRank(ethChangePercent),
//     [ethChangePercent]
//   );
//   /**
//    * All 125 ranks. Min 236 - Mid 298 - Max 360
//    */
//   const colorCodePerTcr = useMemo(
//     () => getColorCodePerTcr(fixedTcr, MCR),
//     [fixedTcr, MCR]
//   );
//   /**
//    * Rank up per 5000,000
//    */
//   const reserveRankOfRedemption = useMemo(
//     () => getReserveRankOfRedemption(redemptionReserve),
//     [redemptionReserve]
//   );
//   /**
//    * Rank up per 1000,000
//    */
//   const reserveRankOfSweep = useMemo(
//     () => getReserveRankOfSweep(sweepReserve),
//     [sweepReserve]
//   );

//   const renderSignalMessages = useCallback(() => {
//     const messages = getSignalMessages(
//       cjpyPriceRank,
//       ethPriceRank,
//       isRedeemablePledge,
//       t
//     );
//     return messages.map((message, index) => (
//       <ItemTitleValue key={index} style={{ display: 'block' }}>
//         {message}
//       </ItemTitleValue>
//     ));
//   }, [cjpyPriceRank, ethPriceRank, isRedeemablePledge, t]);

//   return (
//     <>
//       <div style={{ minHeight: '16px', marginBottom: '10px' }}>
//         {renderSignalMessages()}
//       </div>
//       <Grid templateColumns="repeat(2, 1fr)" gap={4}>
//         <GridItem colSpan={1}>
//           <CjpyPrice
//             cjpyPriceRank={cjpyPriceRank}
//             ethPriceRank={ethPriceRank}
//             colorCodePerTcr={colorCodePerTcr}
//           />
//         </GridItem>
//         <GridItem colSpan={1}>
//           <EthPrice ethPrice={rateOfEthJpy} ethPriceRank={ethPriceRank} />
//           <div style={{ margin: '0.4rem 0' }}>
//             <Tcr tcr={fixedTcr} />
//           </div>
//           <Pool
//             reserveRankOfRedemption={reserveRankOfRedemption}
//             isDecreaseForRedemptionReserve={isDecreaseForRedemptionReserve}
//             reserveRankOfSweep={reserveRankOfSweep}
//             isDecreaseForSweepReserve={isDecreaseForSweepReserve}
//           />
//         </GridItem>
//       </Grid>
//     </>
//   );
// }


// export default function Infographics(props: Partial<InfographicsProps>) {
export default function Infographics(props: Partial<InfographicsProps>) {
  const { t } = useTranslation();
  const breakpointXl = '820px';
  const [isPC] = useMediaQuery(`(min-width: ${breakpointXl})`);

  return (
    <>
      {isPC ? (
        <Card
          flex={1}
          maxW="5xl"
          bg={"#fcfaf2"}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.25) 3px 3px 0px",
            borderRadius: "0px",
          }}
          color={"#818181"}
        >
          <CardHeader bg={"#5bad92"} py={2}>
            <Heading size="md" color={"white"}>
              CJPY Now
              {/* <Tooltip
                hasArrow
                label={
                  <Text whiteSpace={"pre-wrap"}>{t("dashboard.yamatoStatisticsHelp")}</Text>
                }
              >
                <QuestionIcon fontSize={"md"} mb={1} ml={1} />
              </Tooltip> */}
            </Heading>
          </CardHeader>
          <CardBody>
          </CardBody>
        </Card>) : (
        <Card
          flex={1}
          maxW="5xl"
          bg={"#fcfaf2"}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.25) 3px 3px 0px",
            borderRadius: "0px",
          }}
          color={"#818181"}
        >
          <CardHeader bg={"#5bad92"} py={2}>
            <Heading size="md" color={"white"}>
              CJPY Now
              {/* <Tooltip
                hasArrow
                label={
                  <Text whiteSpace={"pre-wrap"}>{t("dashboard.yamatoStatisticsHelp")}</Text>
                }
              >
                <QuestionIcon fontSize={"md"} mb={1} ml={1} />
              </Tooltip> */}
            </Heading>
          </CardHeader>
          <CardBody>
          </CardBody>
        </Card>)}
    </>
  );
}
