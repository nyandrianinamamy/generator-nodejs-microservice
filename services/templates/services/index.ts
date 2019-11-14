import { <%= camel %>Repository } from '../repository';
import { <%= pascal %>ServiceBuilder } from './<%= camel %>.service';

const <%= camel %>Service = new <%= pascal %>ServiceBuilder({ <%= camel %>Repository });

export { <%= camel %>Service, <%= camel %>Repository };
