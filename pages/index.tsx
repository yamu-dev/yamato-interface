import { useMediaQuery, useBreakpointValue } from "@chakra-ui/react";
import { AccountDashboard, AccountDashboardForMobile } from "components";

export default function VotingEscrow() {
  // const [isPC] = useMediaQuery(`(min-width: ${breakpointPC})`);
  const [isPC] = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      {isPC ? <AccountDashboard /> : <AccountDashboardForMobile />}
    </>
  );
}
