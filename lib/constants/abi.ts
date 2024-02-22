export interface ISystemContractAbis {
  FeeDistributor: string;
  GaugeController: string;
  Gauge: string;
  Minter: string;
  VotingEscrow: string;
  ERC20: string;
}

export interface IVeSystemAbis {
  [systemName: string]: {
    [chainId: number]: ISystemContractAbis;
  };
}

export const veSystemAbis: IVeSystemAbis = {
  yamato: {
    1: {
      FeeDistributor: "",
      GaugeController: "",
      Gauge: "",
      Minter: "",
      VotingEscrow: "",
      ERC20: "",
    },
    11155111: {
      FeeDistributor: "lib/abis/yamato/FeeDistributor.json",
      GaugeController: "lib/abis/yamato/GaugeController.json",
      Gauge: "lib/abis/yamato/Gauge.json",
      Minter: "lib/abis/yamato/Minter.json",
      VotingEscrow: "lib/abis/yamato/VotingEscrow.json",
      ERC20: "lib/abis/yamato/ERC20.json",
    },
  },
};
