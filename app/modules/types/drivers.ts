export interface IDriver {
  driverId: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface IGetDrivers {
  MRData: {
    limit: number;
    offset: number;
    total: number;
    DriverTable: {Drivers: IDriver[]};
  };
}
