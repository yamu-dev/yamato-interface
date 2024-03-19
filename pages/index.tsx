import { useMediaQuery } from "@chakra-ui/react";
import { AccountDashboard, AccountDashboardForMobile } from "components";

export default function VotingEscrow() {
  const breakpointXl = '1000px';
  const [isPC] = useMediaQuery(`(min-width: ${breakpointXl})`);
  return (
    <>
      {isPC ? <AccountDashboard /> : <AccountDashboardForMobile />}
    </>
  );
}
