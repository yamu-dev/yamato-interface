const en = {
  "dashboard": {
    "tvl": "TVL(Total Value Locked)",
    "tcr": "TCR(Total Collateral Ratio)",
    "intermarketPriceVariance": "Intermarket Price Variance",
    "price": " Price",
    "totalSupply": " Total Supply"
  },
  "infographics": {
    "borrowRecommend": "Borrow Recommend",
    "buyRecommend": "Buy Recommend",
    "repaymentRecommend": "Repayment Recommend",
    "redemptionRecommend": "Redemption Recommend",
    "tcr": "TCR(Total Collateral Ratio)",
    "mcr": "MCR(Minimum Collateral Ratio)",
    "redemptionPool": "Redemption Pool",
    "liquidationPool": " Liquidation Pool"
  },
  "layout": {
    "tool": "tool"
  },
  "pledge": {
    "collateral": {
      "alert1": "Connect your wallet. Or switch networks.",
      "alert2": "Exceeded balance",
      "alert3": "The minimum collateral amount is",
      "alert4": "",
      "alert5": "Deposit Amount is zero.",
      "alert6": "Exceeds the collateral Balance.",
      "depositAmountInput": "Deposit Amount",
      "depositExecution": "Deposit",
      "predictedFluctuation": "Predicted Fluctuation",
      "collateralRate": "Collateral Rate",
      "collateralBalance": "Collateral Balance",
      "valuation": "Valuation",
      "withdrawalAmountInput": "Withdrawal Amount",
      "withdrawalExecution": "Withdrawal"
    },
    "debt": {
      "alert1": "Connect your wallet. Or switch networks.",
      "alert2": "Enter a numeric value.",
      "alert3": "Lowest collateral rate",
      "alert4": "% is required",
      "alert5": "Exceeds the borrowing Amount.",
      "alert6": "Exceeded balance",
      "borrowAmountInput": "Borrow Amount",
      "borrowExecution": "Borrow",
      "receiptAmount": "Receipt Volume",
      "fee": "Fee",
      "feeRate": "Fee Rate",
      "totalBorrowAmount": "Total Borrow Amount",
      "maximumBorrowableAmount": "Maximum Borrowable Amount",
      "borrowBalance": "Borrow Balance",
      "collateralRate": "Collateral Rate",
      "repaymentAmountInput": "Repayment Amount",
      "repaymentExecution": "Repayment",
      "predictedFluctuation": "Predicted Fluctuation"
    }
  },
  "redemption": {
    "coreRedemption": {
      "alert1": "Connect your wallet. Or switch networks.",
      "redemption": "Redemption",
      "totalPoolVolume": "Total Pool Volume",
      "totalContenderRedemption": "Total Contender Redemption",
      "executionRewardPrediction": "Execution Reward Prediction",
      "redemptionExecution": " Redemption"
    },
    "selfRedemption": {
      "alert1": "Connect your wallet. Or switch networks.",
      "alert2": "Insufficient balance",
      "alert3": "Exceeds possible quantity",
      "redemption": "Redemption",
      "redemptionAmountInput": "Redemption Amount",
      "predictedCollateralGainAmount": "Predicted Collateral Gain Amount",
      "totalContenderRedemption": "Total Contender Redemption",
      "redemptionExecution": "Redemption"
    },
    "sweep": {
      "alert1": "Connect your wallet. Or switch networks.",
      "subrogation": "Subrogation",
      "totalPoolVolume": "Total Pool Volume",
      "totalContenderLiquidation": "Total Contender Liquidation",
      "executionRewardPrediction": "Execution Reward Prediction",
      "subrogationExecution": "Subrogation"
    }
  },
  "terminologyPopover": {
    "terminology": "Terminology"
  },
  "tools": {
    "totalCollateralVolume": "Total Collateral Volume",
    "totalBorrowVolume": "Total Borrow Volume",
    "exchangeRate": " Exchange Rate",
    "immediately": "Immediately",
    "redemptionPool": "Redemption Pool",
    "immediatelyRedemptionPool": "Immediately Redemption Pool",
    "liquidationPool": "liquidation Pool",
    "immediatelyLiquidationPool": "Immediately Liquidation Pool"
  },
  "walletConnectButton": {
    "accountDetails": {
      "predictedGain": "Predicted Gain"
    },
    "walletModal": {
      "alert1": "Please switch to a supported Ethereum network. Currently mainnet and goerli are supported.",
      "alert2": "Please select a wallet.",
      "alert3": "Or try operating directly from the extension."
    }
  },
  "world": {
    "logViewer": {
      "alert1": " deposited!",
      "alert2": " withdrawn!",
      "alert3": " borrowed!",
      "alert4": " repaid!",
      "alert5": " Trigger pulled!",
      "alert6": " executed!",
      "alert7": " ",
      "alert8": "No logs"
    }
  },
  "constants": {
    "LOG_EVENT_NAME": {
      "deposit": "Deposit",
      "withdrawal": "Withdrawal",
      "borrowing": "Borrowing",
      "repay": "Repay",
      "governance_lock": "YMT Locked",
      "governance_extension": "YMT extension",
      "governance_withdrawal": "YMT withdrawal",
      "self_redemption": "Self redemption",
      "core_redemption": "Yamato redemption",
      "sweep": "Yamato Subrogation"
    },
    "REVERT_REASON_DESCRIPTION": {
      "default": "Unknown error occurred",
      "depositShortage": "Collateral is insufficient",
      "transferFailure": "Transfer failed within the contract.",
      "underMCR": "Below the minimum collateral rate.",
      "withdrawLock": "Withdraw is locked.",
      "notFlashLoan": "This operation cannot be performed on the same block.",
      "nonPledge": "The pledge has not yet been made.",
      "noSweepReserve": "Liquidation Pool is empty.",
      "noRedeemablePledge": "There is no redeemable pledge.",
      "noSweepablePledge": "There is no pledge that can be repaid.",
      "zeroRepay": "The repayment volume is 0.",
      "overDebt": "The repayment volume exceeds the borrow balance.",
      "overBalance": "The specified amount exceeds the balance held.",
      "zeroFee": "The commission fee is zero.",
      "insufficientBorrowing": "Fees exceed the amount borrowed.",
      "notGoverner": "You are not a governor.",
      "notTester": "You are not a tester.",
      "justReverted": "An unknown error has occurred. Or please switch networks.",
      "walletRejected": "Transmission has been canceled.",
      "zeroInput": "Input value is 0. Or too small."
    },
    "ErrorToastConfig": {
      "title": "Transaction failed"
    },
    "appName": "Yamato Protocol Interface"
  }
};
export default en;
