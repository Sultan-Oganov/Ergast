export interface ILocation {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface ICircuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: ILocation;
}

export interface IRace {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: ICircuit;
  date: string;
}

export interface IGetRaces {
  MRData: {
    limit: number;
    offset: number;
    total: number;
    RaceTable: {Races: IRace[]};
  };
}
