import DateTimeUtils from '@utils/misc/datetime-utils';

interface RestaurantProps {
    id: string;
    name: string;
    categoriesIds: string;
    description: string;
    logoUrl?: string;
    coverImageUrl?: string;
    slug: string;
    schedule: any;
    address: string;
    contactPhone: string;
    status: string;
    managerEmail?: string;
    createdAt: Date;
}

interface RestaurantPrimitiveProps extends RestaurantProps {

}

export default class Restaurant {

    constructor(protected props: RestaurantProps) {
    }

    get id() {
        return this.props.id;
    }

    get createdAt() {
        return this.props.createdAt;
    }

    get logoUrl() {
        return this.props.logoUrl;
    }

    get coverImageUrl() {
        return this.props.coverImageUrl;
    }

    get contactPhone() {
        return this.props.contactPhone;
    }

    get todaySchedule() {
        const dateName = DateTimeUtils.format(new Date(), 'dddd').toUpperCase();
        return this.props.schedule[dateName];
    }

    get slug() {
        return this.props.slug;
    }

    get description() {
        return this.props.description;
    }

    get categoriesIds() {
        return this.props.categoriesIds;
    }

    get mallId() {
        return this.props.address;
    }

    get managerEmail() {
        return this.props.managerEmail;
    }

    get name() {
        return this.props.name;
    }

    static fromPrimitives(props: RestaurantPrimitiveProps) {
        return new Restaurant({
            ...props
        });
    }

    updateLogoUrl(logoUrl: string) {
        this.props.logoUrl = logoUrl;
    }

    updateCoverImageUrl(url: string) {
        this.props.coverImageUrl = url;
    }

    toPrimitives(): RestaurantPrimitiveProps {
        return {
            ...this.props
        };
    }
}