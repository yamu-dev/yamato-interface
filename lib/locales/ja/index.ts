const ja = {
    "dashboard": {
        "tvl": "TVL: 総預入額(Total Value Locked)",
        "tcr": "TCR: 総担保比率(Total Collateral Ratio)",
        "intermarketPriceVariance": "市場間価格差異",
        "price": "価格",
        "totalSupply": "総発行量",
        "yamatoStatisticsHelp": "用語解説\nTVL: 総預入額(Total Value Locked)\nTCR: 総担保比率(Total Collateral Ratio)"
    },
    "infographics": {
        "borrowRecommend": "借入推奨",
        "buyRecommend": "買い推奨",
        "repaymentRecommend": "返済推奨",
        "redemptionRecommend": "償還推奨",
        "tcr": "TCR: 総担保比率(Total Collateral Ratio)",
        "mcr": "MCR: 最低担保比率(Minimum Collateral Ratio)",
        "redemptionPool": "償還プール",
        "liquidationPool": "弁済プール"
    },
    "layout": {
        "tool": "ツール"
    },
    "pledge": {
        "collateral": {
            "alert1": "ウォレットを接続してください。またはネットワークを切り替えてください。",
            "alert2": "残高を超えています。",
            "alert3": "最小担保量は",
            "alert4": "です。",
            "alert5": "預入量が0です。",
            "alert6": "担保量を超えています。",
            "depositAmountInput": "預入量入力",
            "depositExecution": "預入実行",
            "predictedFluctuation": "変動予測値",
            "collateralRate": "担保率",
            "collateralBalance": "担保量",
            "valuation": "評価額",
            "withdrawalAmountInput": "引出量入力",
            "withdrawalExecution": "引出実行"
        },
        "debt": {
            "alert1": "ウォレットを接続してください。またはネットワークを切り替えてください。",
            "alert2": "数値で入力してください。",
            "alert3": "担保率は最低",
            "alert4": "%が必要です。",
            "alert5": "借入量を超えています。",
            "alert6": "残高を超えています。",
            "borrowAmountInput": "借入量入力",
            "borrowExecution": "借入実行",
            "receiptAmount": "受取量",
            "fee": "手数料",
            "feeRate": "手数料率",
            "totalBorrowAmount": "借入量合計",
            "maximumBorrowableAmount": "最大借入可能量",
            "borrowBalance": "借入量",
            "collateralRate": "担保率",
            "repaymentAmountInput": "返済量入力",
            "repaymentExecution": "返済実行",
            "predictedFluctuation": "変動予測値"
        }
    },
    "redemption": {
        "coreRedemption": {
            "alert1": "ウォレットを接続してください。またはネットワークを切り替えてください。",
            "redemption": "償還",
            "totalPoolVolume": "プール総量",
            "totalContenderRedemption": "償還候補総量",
            "executionRewardPrediction": "実行リワード予測",
            "redemptionExecution": "償還実行"
        },
        "selfRedemption": {
            "alert1": "ウォレットを接続してください。またはネットワークを切り替えてください。",
            "alert2": "残高が足りません。",
            "alert3": "可能数量を超えています。",
            "redemption": "償還",
            "redemptionAmountInput": "償還実行量入力",
            "predictedCollateralGainAmount": "予想担保獲得量",
            "totalContenderRedemption": "償還候補総量",
            "redemptionExecution": "償還実行"
        },
        "sweep": {
            "alert1": "ウォレットを接続してください。またはネットワークを切り替えてください。",
            "subrogation": "代位弁済",
            "totalPoolVolume": "プール総量",
            "totalContenderLiquidation": "弁済候補総量",
            "executionRewardPrediction": "実行リワード予測",
            "subrogationExecution": "代位弁済実行"
        }
    },
    "terminologyPopover": {
        "terminology": "用語解説"
    },
    "tools": {
        "totalCollateralVolume": "担保総額",
        "totalBorrowVolume": "借入総額",
        "exchangeRate": "交換レート",
        "immediately": "直前の",
        "redemptionPool": "償還プール",
        "immediatelyRedemptionPool": "直前の償還プール",
        "liquidationPool": "弁済プール",
        "immediatelyLiquidationPool": "直前の弁済プール"
    },
    "walletConnectButton": {
        "accountDetails": {
            "predictedGain": "獲得予想"
        },
        "walletModal": {
            "alert1": "サポートしているEthereum\nnetworkに切り替えてください。現在はmainnetとgoerliに対応しています。",
            "alert2": "ウォレットを選んでください。",
            "alert3": "または拡張機能から直接操作してみてください。"
        }
    },
    "world": {
        "logViewer": {
            "alert1": "を預けました!",
            "alert2": "を引き出しました!",
            "alert3": "を借り入れました!",
            "alert4": "を返済しました!",
            "alert5": "トリガーしました！",
            "alert6": "を行いました！",
            "alert7": "が",
            "alert8": "ログがありません。"
        }
    },
    "constants": {
        "LOG_EVENT_NAME": {
            "deposit": "預入",
            "withdrawal": "引出",
            "borrowing": "借入",
            "repay": "返済",
            "governance_lock": "YMTロック",
            "governance_extension": "YMT延長",
            "governance_withdrawal": "YMT引出",
            "self_redemption": "償還",
            "core_redemption": "Yamato償還",
            "sweep": "Yamato代位弁済"
        },
        "REVERT_REASON_DESCRIPTION": {
            "default": "不明なエラーが発生しました",
            "depositShortage": "担保が不足しています。",
            "transferFailure": "コントラクト内で送金に失敗しました。",
            "underMCR": "最低担保率を下回ります。",
            "withdrawLock": "引き出しがロックされています。",
            "notFlashLoan": "同じブロックでこの操作はできません。",
            "nonPledge": "まだpledgeが作られていません。",
            "noSweepReserve": "弁済プールが空です。",
            "noRedeemablePledge": "償還できるpledgeがありません。",
            "noSweepablePledge": "弁済できるpledgeがありません。",
            "zeroRepay": "返済量が0です。",
            "overDebt": "返済量が借入量より上回っています。",
            "overBalance": "指定した量が保有残高を超えています。",
            "zeroFee": "手数料が0になっています。",
            "insufficientBorrowing": "手数料が借入量より上回っています。",
            "notGoverner": "あなたはガバナーではありません。",
            "notTester": "あなたはテスターではありません。",
            "justReverted": "不明なエラーが発生しました。またはネットワークを切り替えてください。",
            "walletRejected": "送信を取り止めました。",
            "zeroInput": "入力値が0です。または小さすぎます。"
        },
        "ErrorToastConfig": {
            "title": "トランザクションが失敗しました"
        },
        "appName": "Yamato Protocol Interface"
    }
};
export default ja;

