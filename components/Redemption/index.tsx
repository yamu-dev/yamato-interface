import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';
import { CategoryTitle, ConentBox, HeaderBox2 } from '../CommonItem';
import CoreRedemption from './CoreRedemption';
import SelfRedemption from './SelfRedemption';
import Sweep from './Sweep';

// export default function Redemption() {
//   return (
//     <>
//       <HeaderBox2>
//         <CategoryTitle>Functions</CategoryTitle>
//       </HeaderBox2>
//       <ConentBox>
//         <SelfRedemption />
//         <CoreRedemption />
//         <Sweep />
//       </ConentBox>
//     </>
//   );
// }



export default function Redemption() {
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
            Functions
          </Heading>
        </CardHeader>
        <CardBody>

          <SelfRedemption />
          <CoreRedemption />
          <Sweep />
        </CardBody>
      </Card>
    </>
  );
}