import UuidUtils from '@utils/misc/uuid-utils';

interface AppEventProps {
    id?: string;
    occurredOn: Date;
    data: any;
}

export default abstract class AppEvent {

    constructor(protected props: AppEventProps) {
        this.props.id = this.props.id ?? UuidUtils.persistenceUuid();
    }

    abstract eventName(): string;

    abstract get type(): string;

    get occurredOn() {
        return this.props.occurredOn;
    }

    get id() {
        return this.props.id;
    }

    get data() {
        return this.props.data;
    }

    updateData(data) {
        this.props.data = data
    }

    abstract toPrimitives(): any
}