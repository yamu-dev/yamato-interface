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
  useMediaQuery
} from "@chakra-ui/react";
import {
  CategoryTitle,
  ConentBox,
  HeaderBox1,
  ItemTitleValue,
} from '../CommonItem';
import { useCallback, useMemo } from 'react';
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
    tvl: 387828799.0242,
    tcr: 420,
    rateOfEthJpy: 513014,
    totalSupplyOfCjpy: 92274777.3888,
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
              Yamato Statistics
              <Tooltip
                hasArrow
                label={
                  <Text whiteSpace={"pre-wrap"}>{t("YAMATO_STATISTICS_HELP")}</Text>
                }
              >
                <QuestionIcon fontSize={"md"} mb={1} ml={1} />
              </Tooltip>
            </Heading>
          </CardHeader>
          <CardBody>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <DashboardItem
                title={'TVL'}
                stat={`¥${formatPrice(tvl, 'jpy').value}`}
                firstLoadCompleted={firstLoadCompleted}
              />
              <DashboardItem
                title={'ETH' + t('DASHBOARD_PRICE')}
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
                title={'CJPY' + t('YDASHBOARD_TOTALS')}
                stat={`${formatPrice(totalSupplyOfCjpy, 'jpy').value} ${YAMATO_SYMBOL.YEN
                  }`}
                firstLoadCompleted={firstLoadCompleted}
              />

              <DashboardItem
                title={t('DASHBOARD_INTERMARKETPRICEVARIANCE')}
                stat={`${getMarketRateOfCjpyJpy(rateOfCjpyJpy[0])}
                (${getDeviationRate(rateOfCjpyJpy[0])})`}
                firstLoadCompleted={firstLoadCompleted}
              >
                {rateOfCjpyJpy[0] && (
                  <Link href={getExternalLink(rateOfCjpyJpy[0][0])}>
                  </Link>
                )}
              </DashboardItem>
            </Grid>
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
              Yamato Statistics
              <Tooltip
                hasArrow
                label={
                  <Text whiteSpace={"pre-wrap"}>{t("YAMATO_STATISTICS_HELP")}</Text>
                }
              >
                <QuestionIcon fontSize={"md"} mb={1} ml={1} />
              </Tooltip>
            </Heading>
          </CardHeader>
          <CardBody>
            <DashboardItemForDevice
              title={'TVL'}
              stat={`¥${formatPrice(tvl, 'jpy').value}`}
              firstLoadCompleted={firstLoadCompleted}
            />
            <DashboardItemForDevice
              title={'ETH' + t('DASHBOARD_PRICE')}
              stat={`¥${formatPrice(rateOfEthJpy, 'jpy').value}`}
              firstLoadCompleted={firstLoadCompleted}
            />

            <DashboardItemForDevice
              title={'TCR'}
              stat={`${tcr.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}%`}
              firstLoadCompleted={firstLoadCompleted}
            />
            <DashboardItemForDevice
              title={'CJPY' + t('YDASHBOARD_TOTALS')}
              stat={`${formatPrice(totalSupplyOfCjpy, 'jpy').value} ${YAMATO_SYMBOL.YEN
                }`}
              firstLoadCompleted={firstLoadCompleted}
            />

            <DashboardItemForDevice
              title={t('DASHBOARD_INTERMARKETPRICEVARIANCE')}
              stat={`${getMarketRateOfCjpyJpy(rateOfCjpyJpy[0])}
                (${getDeviationRate(rateOfCjpyJpy[0])})`}
              firstLoadCompleted={firstLoadCompleted}
            >
              {rateOfCjpyJpy[0] && (
                <Link href={getExternalLink(rateOfCjpyJpy[0][0])}>
                </Link>
              )}
            </DashboardItemForDevice>
          </CardBody>
        </Card>)}

      {/* <Flex w="full" h="160px" bg="blue.50" rounded="xl" boxShadow="md" mb="2">
      <Flex align="center" w="20%">
        <Avatar size="xl" mx="auto" src="https://bit.ly/kent-c-dodds" />
      </Flex>
      <Box
        w="70%"
        bgPosition="right"
        bgSize="220px"
        bgRepeat="no-repeat"
        mr="4"
      >
        <Flex align="center" my="5">
          <Heading pr="4" fontSize="2xl" color="gray.600">
            Daisuke Matsuura
          </Heading>
        </Flex>
        <Flex mb="3" color="gray.500">
          <Flex align="center" w="35%">
            <Text pl="2">Osaka, JAPAN</Text>
          </Flex>
          <Flex align="center">
            <Text pl="2">1800+ connection </Text>
          </Flex>
        </Flex>
        <Flex mb="5" color="gray.500">
          <Flex align="center" w="35%">
            <Text pl="2">https://biz.can-ly.com/</Text>
          </Flex>
          <Flex align="center">
            <Text pl="2">Canly Co.,Ltd </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex> */}

    </>
  );
}
