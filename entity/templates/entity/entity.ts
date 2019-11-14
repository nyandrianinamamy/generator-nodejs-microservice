export class <%= pascal %>Builder {
    constructor() {}

    make<%= pascal %>(<%= camel %>: I<%= pascal %>) {
        if (!<%= camel %>.name) {
            throw new Error('<%= pascal %> must have a name.');
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
}
