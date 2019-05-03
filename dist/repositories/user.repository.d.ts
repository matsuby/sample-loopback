import { DefaultCrudRepository } from '@loopback/repository';
import { User } from '../models';
import { SqliteDataSource } from '../datasources';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id> {
    constructor(dataSource: SqliteDataSource);
}
