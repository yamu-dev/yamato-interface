import { Card, CardBody, CardHeader, Heading, Tooltip } from '@chakra-ui/react';
import { CategoryTitle, ConentBox, HeaderBox2 } from '../CommonItem';
import Collateral from './Collateral';
import Debt from './Debt';

export default function Pledge() {
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
        {/* <CardHeader bg={"#F9AEA5"} py={2}> */}
        <CardHeader bg={"#5bad92"} py={2}>
          <Heading size="md" color={"white"}>
            My Pledge
          </Heading>
        </CardHeader>
        <CardBody>
          <Collateral />
          <Debt />
        </CardBody>
      </Card>
    </>
  );
}
