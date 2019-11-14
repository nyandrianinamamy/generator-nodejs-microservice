import { <%= camel %>Builder } from '../entities';
import { I<%= pascal %> } from '../entities/<%= dash %>.entity';
import { <%= pascal %>Repository } from '../repository/<%= dash %>.repository';

export class <%= pascal %>ServiceBuilder {
    <%= camel %>Repository: <%= pascal %>Repository;

    // tslint:disable-next-line: no-any
    constructor({ <%= camel %>Repository }: any) {
        this.<%= camel %>Repository = <%= camel %>Repository;
    }
    async create(<%= camel %>Info: I<%= pascal %>): Promise<I<%= pascal %>> {
        const <%= camel %>: I<%= pascal %> = <%= camel %>Builder.make<%= pascal %>(<%= camel %>Info);
        return this.<%= camel %>Repository.create(<%= camel %>);
    }

    async deleteById(id: string): Promise<boolean> {
        const <%= camel %> = await this.findById(id);
        if (!<%= camel %>) {
            throw new Error('<%= pascal %> not found');
        }
        return this.<%= camel %>Repository.delete(id);
    }

    async findById(id: string): Promise<I<%= pascal %>> {
        if (!id) {
            throw new Error('Id not supplied');
        }
        const <%= camel %> = await this.<%= camel %>Repository.findOne(id).exec();
        if (!<%= camel %>) {
            throw new Error('<%= pascal %> not found');
        }
        return <%= camel %>;
    }

    async find(): Promise<I<%= pascal %>[]> {
        return this.<%= camel %>Repository.find({}).exec();
    }
}
