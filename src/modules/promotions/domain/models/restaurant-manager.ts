interface RestaurantManagerCredentials {
    email: string;
    password?: string;
}

interface RestaurantManagerProps {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    restaurantId: string;
    credentials?: RestaurantManagerCredentials;
    status: string;
}

interface RestaurantManagerPrimitiveProps extends RestaurantManagerProps {

}

export default class RestaurantManager {
    constructor(protected props: RestaurantManagerProps) {
    }

    get id() {
        return this.props.id;
    }

    get email() {
        return this.props.email;
    }

    get credentials() {
        return this.props.credentials;
    }

    static fromPrimitives(props: RestaurantManagerPrimitiveProps) {
        return new RestaurantManager({
            ...props
        });
    }

    toPrimitives(): RestaurantManagerPrimitiveProps {
        return {
            ...this.props
        };
    }
}