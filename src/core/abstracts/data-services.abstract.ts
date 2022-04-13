import { User, CallList, QrCode, Card, UserSetting } from '../entities';

import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataService {
  abstract users: IGenericRepository<User>;
  abstract calls: IGenericRepository<CallList>;
  abstract qrCodes: IGenericRepository<QrCode>;
  abstract cards: IGenericRepository<Card>;
  abstract userSettings: IGenericRepository<UserSetting>;
}
