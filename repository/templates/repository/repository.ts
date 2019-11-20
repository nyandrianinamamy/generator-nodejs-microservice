import { MongoRepository } from '../../database/mongo.repository';
import { I<%= pascal %> } from '../entity/<%= dash %>.entity';
import { I<%= pascal %>Model } from '../entity/<%= dash %>.mongoose.schema';
// tslint:disable-next-line: no-empty-interface
export class <%= pascal %>Repository extends MongoRepository<I<%= pascal %>Model, I<%= pascal %>> {}
