import ObjectUtils from '@utils/misc/object-utils';
import DateTimeUtils from '@utils/misc/datetime-utils';

interface PromotionProps {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
    restaurantId: string;
    available: boolean;
    duration: {
        start: Date;
        end: Date
    };
    mallsIds: string[];
    status: string;
    createdAt: Date;
}

interface PromotionPrimitiveProps extends PromotionProps {

}

export default class Promotion {

    constructor(protected props: PromotionProps) {
    }

    get id() {
        return this.props.id;
    }

    get createdAt() {
        return this.props.createdAt;
    }

    get imageUrl() {
        return this.props.imageUrl;
    }

    get isActive() {
        return this.props.available;
    }

    get isAvailable() {
        return DateTimeUtils.endOfDay(this.props.duration.end) >= DateTimeUtils.endOfDay(new Date());
    }

    get endDate() {
        return DateTimeUtils.endOfDay(this.props.duration.end);
    }

    get name() {
        return this.props.name;
    }

    get restaurantId() {
        return this.props.restaurantId;
    }

    get description() {
        return this.props.description;
    }

    get mallsIds() {
        return this.props.mallsIds;
    }

    updateInfo(info: Omit<Partial<PromotionProps>, 'id' | 'imageUrl' | 'createdAt'>) {
        this.props = ObjectUtils.merge(this.props, info);
    }

    static fromPrimitives(props: PromotionPrimitiveProps) {
        return new Promotion({
            ...props
        });
    }

    updateImageUrl(imageUrl: string) {
        this.props.imageUrl = imageUrl;
    }

    toPrimitives(): PromotionPrimitiveProps {
        return {
            ...this.props
        };
    }
}