import { Document, Model, model, Schema } from 'mongoose';
import { I<%= pascal %> } from './<%= dash %>.entity';

export interface I<%= pascal %>Model extends I<%= pascal %>, Document {}
export const <%= camel %>Schema: Schema<I<%= pascal %>> = new Schema<I<%= pascal %>>(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, required: true },
    },
    { timestamps: true }
);

const textIndex = { name: 'text', description: 'text' };

<%= camel %>Schema.index(textIndex);
