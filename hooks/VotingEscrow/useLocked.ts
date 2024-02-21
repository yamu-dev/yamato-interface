import { useReadContract } from "wagmi";
import VotingEscrowABI from "lib/constants/abis/VotingEscrow.json";

export default function useLocked(address?: `0x${string}`): {
  readFn: ReturnType<
    typeof useReadContract<typeof VotingEscrowABI, "locked", [bigint, bigint]>
  >;
} {
  const config = {
    address: process.env.NEXT_PUBLIC_VE_ADDRESS as `0x${string}`,
    abi: VotingEscrowABI,
  };
  const readFn = useReadContract<
    typeof VotingEscrowABI,
    "locked",
    [bigint, bigint]
  >({
    ...config,
    functionName: "locked",
    args: [address],
    query: {
      enabled: !!address,
    },
  });

  return {
    readFn,
  };
}
