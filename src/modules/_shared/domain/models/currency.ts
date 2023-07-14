import { bsAbbr, bsFormat, usdAbbr, usdFormat } from '@utils/currency';

interface CurrencyProps {
    name: string;
    abbr: string;
    format?: (value: number) => string;
}

export interface CurrencyPrimitiveProps {
    name: string;
    abbr: string;
    format?: (value: number) => string;
}

export default class Currency {
    constructor(private props: CurrencyProps) {}

    get name() {
        return this.props.name;
    }

    get abbr() {
        return this.props.abbr;
    }

    isEqual(otherCurrency: Currency) {
        return this.props.abbr == otherCurrency.abbr;
    }

    format(value: number) {
        return this.props.format
            ? this.props.format(value ? value : 0)
            : value.toString();
    }

    toPrimitives(): CurrencyPrimitiveProps {
        return {
            abbr: this.props.abbr,
            name: this.props.name,
            format: this.props.format
        };
    }

    static fromPrimitives(props: CurrencyPrimitiveProps) {
        /* 
    if (!props.format) {
      console.warn("Format method is undefined");
    } */

        //This is bad but well, we need to refactor:

        const curr = new Currency(props);

        if (curr.abbr === bsAbbr) {
            return new Currency({
                ...curr.props,
                format: bsFormat
            });
        }

        if (curr.abbr === usdAbbr) {
            return new Currency({
                ...curr.props,
                format: usdFormat
            });
        }

        return curr;
    }
}
