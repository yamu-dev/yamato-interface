import { Box, HStack, Skeleton, Spacer, chakra } from '@chakra-ui/react';
import { ItemTitleValue, ItemTitleForPledge } from '../CommonItem';

interface Props {
  title: string;
  stat: any;
  firstLoadCompleted: boolean;
  children?: any;
}

export function DashboardItem(props: Props) {
  return (
    // <Box color={'blue'} bg="teal.200">
    <Box ml='-1'>
      <HStack justifyContent={"space-between"}>
        {/* <Box width="10rem" whiteSpace="nowrap">{props.title}</Box> */}
        <Box width={{ base: "7rem", sm: "10rem", xl: "10rem" }}>{props.title}</Box>
        {props.firstLoadCompleted ? (
          // <Box width={"13rem"}>
          <Box w={{ base: "10rem", sm: "13rem", lg: "13rem" }} whiteSpace="nowrap">
            {props.stat}
            {props.children}
          </Box>
        ) : (
          <Skeleton width="20rem" height="1.6rem" />
        )
        }
      </HStack >
    </Box>
  );
}

export function DashboardItemForDevice(props: Props) {
  return (
    <HStack justifyContent={"space-between"}>
      <Box>{props.title}</Box>
      {props.firstLoadCompleted ? (
        <Box>
          {props.stat}
          {props.children}
        </Box>
      ) : (
        <Skeleton width="20rem" height="1.6rem" />
      )}
    </HStack>
  );
}