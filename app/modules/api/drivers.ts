import {AxiosResponse} from 'axios';
import {instance} from '../axios';
import {IGetDrivers} from '../types/drivers';

interface IDriversAPI {
  getDriversList: (params: {
    limit: number;
    offset: number;
  }) => Promise<AxiosResponse<IGetDrivers>>;
}

class DriversAPI implements IDriversAPI {
  getDriversList(params: {limit: number; offset: number}) {
    const {limit, offset} = params;
    return instance.get(`f1/drivers.json?limit=${limit}&offset=${offset}`);
  }
}

export const driversAPI = new DriversAPI();
