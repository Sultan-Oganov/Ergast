import {AxiosResponse} from 'axios';
import {instance} from '../axios';
import {IGetRaces} from '../types/races';

interface IRacesAPI {
  getRacesList: (params: {
    limit: number;
    offset: number;
  }) => Promise<AxiosResponse<IGetRaces>>;
}

class RacesAPI implements IRacesAPI {
  getRacesList(params: {limit: number; offset: number}) {
    const {limit, offset} = params;
    return instance.get(
      `https://ergast.com/api/f1.json?limit=${limit}&offset=${offset}`,
    );
  }
}

export const racesAPI = new RacesAPI();
