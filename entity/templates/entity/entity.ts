export class <%= pascal %>Builder {
    make<%= pascal %>(<%= camel %>: I<%= pascal %>) {
        if (!<%= camel %>.name) {
            throw new Error('<%= pascal %> must have a name.');
        }
        if (!<%= camel %>.description) {
            throw new Error('<%= pascal %> must have a description.');
        }
        return {
            ...<%= camel %>
        };
    }
}

export interface I<%= pascal %> {
    // tslint:disable: no-any member-ordering
    _id: any;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
