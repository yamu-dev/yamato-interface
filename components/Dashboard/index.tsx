import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Tooltip,
  Divider,
  HStack,
  chakra,
  CardFooter,
  Text,
  Grid,
  GridItem,
  VStack,
  Link,
  Flex,
  Spacer,
  Box,
  Avatar,
  useMediaQuery,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import {
  CategoryTitle,
  ConentBox,
  HeaderBox1,
  ItemTitleValue,
} from '../CommonItem';
import { useCallback, useMemo, useRef, useState } from 'react';
import { LinkIcon, QuestionIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { CustomButton } from "components/shared/CustomButton";
import { formatPrice } from '../../lib/utils/prices';
import { DashboardItem, DashboardItemForDevice } from "./Item";
// import { StyledTooltip } from "components/shared/StyledTooltip";


function getMarketRateOfCjpyJpy(rateOfCjpyJpy: [string, number]) {
  if (!rateOfCjpyJpy) {
    return ``;
  }

  return `${rateOfCjpyJpy[0]}: ¥${formatPrice(rateOfCjpyJpy[1], 'jpy').value
    }\n`;
}

function getDeviationRate(rateOfCjpyJpy: [string, number]) {
  if (!rateOfCjpyJpy) {
    return `0%`;
  }

  const deviationRate = (rateOfCjpyJpy[1] - 1) * 100;
  return `${deviationRate.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })}%`;
}


export default function YamatoStatistics({
  address,
}: {
  address?: `0x${string}`;
}) {
  const { t } = useTranslation();
  // TODO: dummy function
  const {
    tvl,
    tcr,
    rateOfEthJpy,
    totalSupplyOfCjpy,
    rateOfCjpyJpy,
    firstLoadCompleted,
    // } = useYamatoStateForDashboard({"address": address});
  } = {
    tvl: 38782879999999.0242,
    tcr: 420,
    rateOfEthJpy: 513014,
    totalSupplyOfCjpy: 922747779999.3888,
    rateOfCjpyJpy: [],
    firstLoadCompleted: true,
  };

  // TODO: chainId dummy
  // const chainId = 1;
  const cjpyAddress = '0xdummyAddress';
  // const cjpyAddress = useMemo(
  //   () => (chainId != null ? CJPY_ADDRESSES[chainId] : ''),
  //   [chainId]
  // );

  const YAMATO_SYMBOL = {
    COLLATERAL: 'ETH',
    YEN: 'CJPY',
    GOVERNANCE: 'YMT',
    GOVERNANCE_LOCK: 'veYMT',
    TXJP: 'TXJP',
  };

  const getExternalLink = useCallback(
    (exchangeName: string) => {
      if (exchangeName.includes('uniswap')) {
        return `https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=${cjpyAddress}`;
      }
      return '';
    },
    [cjpyAddress]
  );

  const [wrap] = useState(false);

  return (
    <>
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
            Yamato Statistics
            <Tooltip
              hasArrow
              label={
                <Text whiteSpace={"pre-wrap"}>{t("dashboard.yamatoStatisticsHelp")}</Text>
              }
            >
              <QuestionIcon fontSize={"md"} mb={1} ml={1} />
            </Tooltip>
          </Heading>
        </CardHeader>
        <CardBody>
          {/* <Grid templateColumns="repeat(2, 1fr)" gap={2}> */}
          {/* <Flex wrap="wrap" justifyContent="center" gap={2}> */}
          <Flex wrap="wrap" direction={wrap ? 'column' : 'row'} gap={2}>
            <DashboardItem
              title={'TVL'}
              stat={`¥${formatPrice(tvl, 'jpy').value}`}
              firstLoadCompleted={firstLoadCompleted}
            />
            <DashboardItem
              title={'ETH' + t('dashboard.price')}
              stat={`¥${formatPrice(rateOfEthJpy, 'jpy').value}`}
              firstLoadCompleted={firstLoadCompleted}
            />

            <DashboardItem
              title={'TCR'}
              stat={`${tcr.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}%`}
              firstLoadCompleted={firstLoadCompleted}
            />
            <DashboardItem
              title={'CJPY' + t('dashboard.totalSupply')}
              stat={`${formatPrice(totalSupplyOfCjpy, 'jpy').value} ${YAMATO_SYMBOL.YEN
                }`}
              firstLoadCompleted={firstLoadCompleted}
            />

            <DashboardItem
              title={t('dashboard.intermarketPriceVariance')}
              stat={`${getMarketRateOfCjpyJpy(rateOfCjpyJpy[0])}
                (${getDeviationRate(rateOfCjpyJpy[0])})`}
              firstLoadCompleted={firstLoadCompleted}
            >
              {rateOfCjpyJpy[0] && (
                <Link href={getExternalLink(rateOfCjpyJpy[0][0])}>
                </Link>
              )}
            </DashboardItem>
          </Flex>
          {/* </Grid> */}
        </CardBody>
      </Card>
    </>
  );
}
