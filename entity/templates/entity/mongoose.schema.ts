import { Document, Model, model, Schema } from 'mongoose';
import { I<%= pascal %> } from './<%= dash %>.entity';

export interface I<%= pascal %>Model extends I<%= pascal %>, Document {}
export const <%= camel %>Schema: Schema<I<%= pascal %>> = new Schema<I<%= pascal %>>({
    name: String
});

export const <%= camel %>Model: Model<I<%= pascal %>Model> = model<I<%= pascal %>Model>(
    '<%= pascal %>',
    <%= camel %>Schema,
);
