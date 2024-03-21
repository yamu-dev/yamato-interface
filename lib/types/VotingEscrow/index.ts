import { useMediaQuery } from "@chakra-ui/react";

export const LockType = {
  CREATE_LOCK: "createLock",
  INCREASE_AMOUNT: "increaseAmount",
  INCREASE_UNLOCK_TIME: "increaseUnlockTime",
} as const;
export type LockType = (typeof LockType)[keyof typeof LockType];

export declare const breakpointMobile = '1000px';