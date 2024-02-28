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
  Avatar
} from "@chakra-ui/react";
import {
  CategoryTitle,
  ConentBox,
  HeaderBox1,
  ItemTitleValue,
} from '../CommonItem';
import { useCallback, useMemo } from 'react';
import { QuestionIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { CustomButton } from "components/shared/CustomButton";
import { formatPrice } from '../../lib/utils/prices';
// import { StyledTooltip } from "components/shared/StyledTooltip";


function getMarketRateOfCjpyJpy(rateOfCjpyJpy: [string, number]) {
  if (!rateOfCjpyJpy) {
    return ``;
  }

  return `${rateOfCjpyJpy[0]}: ¥${
    formatPrice(rateOfCjpyJpy[1], 'jpy').value
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
    tvl: 0,
    tcr: 0,
    rateOfEthJpy: 0,
    totalSupplyOfCjpy: 0,
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

  const getExternalLink = useCallback(
    (exchangeName: string) => {
      if (exchangeName.includes('uniswap')) {
        return `https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=${cjpyAddress}`;
      }
      return '';
    },
    [cjpyAddress]
  );

  return (
    <>
    {/* <HeaderBox1>
    <HStack>
      <CategoryTitle>Yamato Statistics</CategoryTitle>
      <Tooltip
            hasArrow
            label={
              <Text whiteSpace={"pre-wrap"}>{t("YAMATO_STATISTICS_HELP")}</Text>
            }
          >
            <QuestionIcon fontSize={"md"} mb={1} ml={1} />
          </Tooltip>
    </HStack>
  </HeaderBox1>
  <ConentBox>
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      <GridItem colSpan={1}>
        <VStack align="start">
          <DashboardItem
            title={'TVL'}
            stat={`¥${formatPrice(tvl, 'jpy').value}`}
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
            title={t('DASHBOARD_INTERMARKETPRICEVARIANCE')}
            stat={`${getMarketRateOfCjpyJpy(rateOfCjpyJpy[0])}
            (${getDeviationRate(rateOfCjpyJpy[0])})`}
            firstLoadCompleted={firstLoadCompleted}
          >
            {rateOfCjpyJpy[0] && (
              <Link href={getExternalLink(rateOfCjpyJpy[0][0])}>
                ABCD
              </Link>
            )}
          </DashboardItem>
          {/* <DashboardItem
            title={''}
            stat={`${getMarketRateOfCjpyJpy(rateOfCjpyJpy[1])}
            (${getDeviationRate(rateOfCjpyJpy[1])})`}
            firstLoadCompleted={firstLoadCompleted}
          >
            {rateOfCjpyJpy[1] && (
              <ExternalLink href={getExternalLink(rateOfCjpyJpy[1][0])}>
                <ExternalLinkIcon />
              </ExternalLink>
            )}
          </DashboardItem>
          <DashboardItem
            title={''}
            stat={`${getMarketRateOfCjpyJpy(rateOfCjpyJpy[2])}
            (${getDeviationRate(rateOfCjpyJpy[2])})`}
            firstLoadCompleted={firstLoadCompleted}
          >
            {rateOfCjpyJpy[2] && (
              <ExternalLink href={getExternalLink(rateOfCjpyJpy[2][0])}>
                <ExternalLinkIcon />
              </ExternalLink>
            )}
          </DashboardItem> */}
        {/* </VStack>
      </GridItem>

      <GridItem colSpan={1}>
        <VStack align="start">
          {/* v1.5 feature
        <DashboardItem title={'veYMT量'} stat={'（工事中）'} />
        <DashboardItem title={'総ファーミングスコア'} stat={'（工事中）'} /> */}
          {/* <DashboardItem
            title={'ETH' + t('DASHBOARD_PRICE')}
            stat={`¥${formatPrice(rateOfEthJpy, 'jpy').value}`}
            firstLoadCompleted={firstLoadCompleted}
          />
          <DashboardItem
            title={'CJPY' + t('YDASHBOARD_TOTALS')}
            stat={`${formatPrice(totalSupplyOfCjpy, 'jpy').value} ${
              YAMATO_SYMBOL.YEN
            }`}
            firstLoadCompleted={firstLoadCompleted}
          />
        </VStack>
      </GridItem>
    </Grid>
  </ConentBox> */} 



    
    {/* <Card
      flex={1}
      maxW="5xl"
      bg={"#fcfaf2"}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.25) 3px 3px 0px",
        borderRadius: "0px",
      }}
      color={"#818181"}
    >
      <CardHeader bg={"#f9aea5"} py={2}>
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
          <HStack align="start">
            <VStack align="start">
            <Box>
                {t('TVL')}
              </Box>
              <Box>
                {t('TCR')}
              </Box>
              <Box>
                {t('DASHBOARD_INTERMARKETPRICEVARIANCE')} 
              </Box>
            </VStack>
            <VStack align="start">
            <Box>
                {"¥0.0"}
            </Box>
              <Box>
              {"¥0.0"}
              </Box>
              <Box>
                {"¥0.0"}
              </Box>
            </VStack>
            <VStack align="start">
            <Box>{'ETH' + t('DASHBOARD_PRICE')}
            </Box>
            <Box>{'CJPY' + t('YDASHBOARD_TOTALS')}
            </Box>
            </VStack>
            <VStack align="start">
            <Box>
                {"¥0.0"}
            </Box>
              <Box>
              {"¥0.0"}
              </Box>
            </VStack>
          </HStack>
        </CardBody>
      </Card> */}
      <Flex w="full" h="160px" bg="blue.50" rounded="xl" boxShadow="md" mb="2">
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
    </Flex>

      </>
  );
}
