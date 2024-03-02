import { Box, HStack, Skeleton, chakra } from '@chakra-ui/react';
import { ItemTitleValue, ItemTitleForPledge } from '../CommonItem';

interface Props {
  title: string;
  stat: any;
  firstLoadCompleted: boolean;
  children?: any;
}

export function DashboardItem(props: Props) {
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