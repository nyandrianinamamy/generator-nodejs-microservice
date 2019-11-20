import { <%= camel %>Builder } from '../entity';
import { I<%= pascal %> } from '../entity/<%= dash %>.entity';
import { <%= pascal %>Repository } from '../repository/<%= dash %>.repository';

const NOT_FOUND = '<%= pascal %> not found';

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
            throw new Error(NOT_FOUND);
        }
        return this.<%= camel %>Repository.delete(id);
    }

    // tslint:disable-next-line: no-any
    async find(params: any): Promise<I<%= pascal %>[]> {
        const { sort, skip, limit, search, ...filter } = params;
        return this.<%= camel %>Repository
            .filter(filter)
            .search(search)
            .findAndExec();
    }

    async findById(id: string): Promise<I<%= pascal %>> {
        if (!id) {
            throw new Error('Id not supplied');
        }
        const <%= camel %> = await this.<%= camel %>Repository.findOne(id).exec();
        if (!<%= camel %>) {
            throw new Error(NOT_FOUND);
        }
        return <%= camel %>;
    }

    async update(id: string, data: I<%= pascal %>): Promise<I<%= pascal %>> {
        const <%= camel %> = await this.<%= camel %>Repository.update(id, data);
        if (!<%= camel %>) {
            throw new Error(NOT_FOUND);
        }
        return <%= camel %>;
    }
}
