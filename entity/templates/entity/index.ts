import { Model, model } from 'mongoose';
import { <%= pascal %>Builder } from './<%= dash %>.entity';
import { I<%= pascal %>Model, <%= camel %>Schema } from './<%= dash %>.mongoose.schema';

const <%= camel %>Builder = new <%= pascal %>Builder();
const <%= camel %>Model: Model<I<%= pascal %>Model> = model<I<%= pascal %>Model>('<%= pascal %>', <%= camel %>Schema);

export { <%= camel %>Builder, <%= camel %>Model };
