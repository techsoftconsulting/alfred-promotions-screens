import ArrayUtils from '@utils/misc/array-utils';
import RestaurantTable, { RestaurantTablePrimitiveProps } from '@modules/promotions/domain/models/restaurant-table';

export interface RestaurantAreaProps {
    id: string;
    name: string;
    restaurantId: string,
    tables: RestaurantTable[];
}

export interface RestaurantAreaPrimitiveProps extends Omit<RestaurantAreaProps, 'tables'> {
    tables: RestaurantTablePrimitiveProps[];
}

export default class RestaurantArea {

    constructor(private props: RestaurantAreaProps) {

    }

    get id() {
        return this.props.id;
    }

    get name() {
        return this.props.name;
    }

    get tables() {
        return this.props.tables;
    }

    static fromPrimitives(props: RestaurantAreaPrimitiveProps) {
        return new RestaurantArea({
            ...props,
            tables: props.tables.map((t) => RestaurantTable.fromPrimitives(t))
        });
    }

    createTable(table: RestaurantTable) {
        this.props.tables.push(table);
    }

    updateName(name: string) {
        this.props.name = name;
    }

    updateTable(table: RestaurantTable) {
        ArrayUtils.replaceByKey(this.props.tables, table, 'id');
    }

    deleteTable(id: string) {
        this.props.tables = this.props.tables.filter(el => el.id !== id);
    }

    findTable(id: string) {
        return this.props.tables.find((t) => t.id == id);
    }

    toPrimitives(): RestaurantAreaPrimitiveProps {
        return {
            ...this.props,
            tables: this.props.tables.map((t) => t.toPrimitives())
        };
    }
}
