import { <%= camel %>Model } from '../entity';
import { <%= pascal %>Repository } from './<%= dash %>.repository';

// Connect the <%= camel %> repository to the db
const <%= camel %>Repository: <%= pascal %>Repository = new <%= pascal %>Repository(<%= camel %>Model);

export { <%= camel %>Repository };
