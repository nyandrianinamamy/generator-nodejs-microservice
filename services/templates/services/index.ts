import { <%= camel %>Repository } from '../repository';
import { <%= pascal %>ServiceBuilder } from './<%= camel %>.services';

const <%= camel %>Service = new <%= pascal %>ServiceBuilder({ <%= camel %>Repository });

export { <%= camel %>Service, <%= camel %>Repository };
