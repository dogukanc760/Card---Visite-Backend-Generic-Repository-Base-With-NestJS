import { User } from '../entities';

import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataService {
  abstract users: IGenericRepository<User>;
}
