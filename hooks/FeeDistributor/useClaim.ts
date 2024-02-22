import {
  useSimulateContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { veSystemAbis } from "lib/constants/abi";


export default function useClaim({
  address,
  token,
  onSuccessWrite,
  onErrorWrite,
  onSuccessConfirm,
  onErrorConfirm,
}: {
  address: `0x${string}`;
  token: `0x${string}`;
  onSuccessWrite?: (data: any) => void;
  onErrorWrite?: (error: Error) => void;
  onSuccessConfirm?: (data: any) => void;
  onErrorConfirm?: (error: Error) => void;
}): {
  prepareFn: ReturnType<typeof useSimulateContract>;
  writeFn: ReturnType<typeof useWriteContract>;
  waitFn: ReturnType<typeof useWaitForTransactionReceipt>;
} {
  const chainId = 1;
  const systemName = "yamato";

  const FeeDistributorABI = veSystemAbis[systemName][chainId].FeeDistributor;
  const config = {
    address: process.env.NEXT_PUBLIC_FEE_DISTRIBUTOR_ADDRESS as `0x${string}`,
    abi: FeeDistributorABI,
    functionName: "claim",
    args: [address, token],
  };

  const prepareFn = useSimulateContract({
    ...config,
    account: address,
  });

  const writeFn = useWriteContract({
    mutation: {
      onSuccess: (data) => onSuccessWrite && onSuccessWrite(data),
      onError: (e: Error) => onErrorWrite && onErrorWrite(e),
    },
  });

  if (!!address && !!token) {
    writeFn.writeContract({
      ...config,
    });
  }

  const waitFn = useWaitForTransactionReceipt({
    hash: writeFn?.data,
    onReplaced: (replacement) => {
      console.log(replacement);
    },
  });

  if (waitFn.status === "success" && onSuccessConfirm) {
    onSuccessConfirm(waitFn.status);
  } else if (waitFn.status === "error" && onErrorConfirm) {
    onErrorConfirm(waitFn.error);
  }

  return {
    prepareFn,
    writeFn,
    waitFn,
  };
}
