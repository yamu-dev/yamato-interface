import { Box, HStack, Skeleton, chakra } from '@chakra-ui/react';
import { ItemTitleValue, ItemTitleForPledge } from '../CommonItem';

interface Props {
  title: string;
  stat: any;
  firstLoadCompleted: boolean;
  children?: any;
}

// export default function DashboardItem(props: Props) {
//   return (
//     <HStack justifyContent={"space-between"}>
//       <Box width="10rem">{props.title}</Box>
//       {props.firstLoadCompleted ? (
//         <Box width="5rem">
//           {props.stat}
//           {props.children}
//         </Box>
//       ) : (
//         <Skeleton width="20rem" height="1.6rem" />
//       )}
//     </HStack>
//   );
// }


export default function DashboardItem(props: Props) {
  return (
    <HStack justifyContent={"space-between"}>
      <Box>{props.title}</Box>
      {props.firstLoadCompleted ? (
        <Box width='15rem'>
          {props.stat}
          {props.children}
        </Box>
      ) : (
        <Skeleton width="20rem" height="1.6rem" />
      )}
    </HStack>
  );
}