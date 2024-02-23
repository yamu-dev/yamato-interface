const en = {
  APP_NAME: "VotingEscrow",
  APP_DESCRIPTION: "Web3",
  CLAIM: "Claim",
  BALANCE: "Balance",
  CANCEL: "Cancel",
  CONFIRMATION: "Confirmation",
  EARLY_USER_REWARD: "Early user rewards",
  EARLY_USER_REWARD_HELP:
    "Early users are rewarded with claimable YMT tokens.\n\nEarly user rewards will end once the budget of 50 million YMT has been claimed. Even if you have the eligibility, you cannot claim if all the budget has been claimed.",
  CLAIMABLE: "Claimable",
  VE_YMT: "veYMT",
  VE_YMT_REWARD: "veYMT Rewards",
  VE_YMT_REWARD_HELP:
    "By locking YMT tokens for a specified period, non-transferable veYMT tokens are issued. The minimum lock period is one week, and the maximum is 52 weeks (approximately 4 years). Locked YMT tokens cannot be withdrawn until the end of the lock period. \nLocking 1 YMT for 4 years issues 1 veYMT, which linearly depreciates over time, reaching 0 veYMT after 4 years. Weeks are calculated starting every Thursday at 00:00 (UTC).",
  YMT_LOCKED: "YMT Locked",
  LOCKED_UNTIL: "Locked until",
  REWARDS: "Rewards",
  REWARDS_HELP:
    "As a reward for veYMT holders, newly issued YMT tokens and fee income from auctions are distributed according to the balance of veYMT held at the start of each week.",
  COMMING_SOON: "Comming soon...",
  RAW_DATA: "Raw data",
  TEMPLATE: "Template",
  TOO_SMALL_ALLOCATION:
    "The token allocation amount is too small, and some participants may receive 0 token allocation (less than token decimals). Those who receive 0 allocation can initiate a refund request. Please consider to increase the allocation amount. Please note token allocation to each bidder is calculated by rounding down, and the aggregated amount of fraction tokens (less than token decimals) for each bidder will remain locked in the contract address forever(it cannot be withdrawn). ",
  TARGET_TOTAL_RAISED_EXPLANATION:
    "The target amount of this auction. Users can buy even after this value is achieved.",

  // VotingEscrow
  VE_CREATE_LOCK: "Create lock",
  VE_INCREASE_AMOUNT: "Increase lock amount",
  VE_INCREASE_UNLOCK_TIME: "Increase lock",
  VE_WITHDRAW: "Withdraw YMT",
  INPUT_LOCK_AMOUNT: "Input lock amount",
  SELECT_UNLOCK_DATE: "Select unlock date",
};
export default en;
