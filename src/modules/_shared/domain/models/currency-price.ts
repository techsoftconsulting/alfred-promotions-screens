import ArrayUtils from '../utils/misc/array-utils';
import Currency, { CurrencyPrimitiveProps } from './currency';
import UsdCurrency from './usd-currency';

interface CurrencyPriceProps {
    value: number;
    formattedValue?: string;
    currency: Currency;
}

export interface CurrencyPricePrimitiveProps {
    value: number;
    formattedValue?: string;
    currency: CurrencyPrimitiveProps;
}

export default class CurrencyPrice {
    constructor(private props: CurrencyPriceProps) {
        if (isNaN(props.value)) {
            props.value = 0;
        }

        props.value = parseFloat(props.value as any);
    }

    get value() {
        return this.props.value;
    }

    get formattedValue() {
        if (this.props.formattedValue) {
            return this.props.formattedValue;
        }

        return this.props.currency.format(this.props.value);
    }

    get currency() {
        return this.props.currency;
    }

    static sum(priceA: CurrencyPrice, priceB: CurrencyPrice) {
        return new CurrencyPrice({
            value: priceA.value + priceB.value,
            currency: priceA.currency
        });
    }

    static subtract(priceA: CurrencyPrice, priceB: CurrencyPrice) {
        if (priceA.value - priceB.value < 0) {
            return CurrencyPrice.fromZero(priceA.currency);
        }

        return new CurrencyPrice({
            value: priceA.value - priceB.value,
            currency: priceA.currency
        });
    }

    static times(
        currencyPrice: CurrencyPrice,
        times: number,
        totalCurrency?: Currency
    ) {
        return new CurrencyPrice({
            value: currencyPrice.value * times,
            currency: totalCurrency ?? currencyPrice.currency
        });
    }

    static div(
        currencyPrice: CurrencyPrice,
        times: number,
        totalCurrency?: Currency
    ) {
        return new CurrencyPrice({
            value: currencyPrice.value / times,
            currency: totalCurrency ?? currencyPrice.currency
        });
    }

    static getAcc(prices: CurrencyPrice[]) {
        if (prices.length == 0) return CurrencyPrice.fromZero(UsdCurrency);

        const total = prices.reduce((a, b) => {
            return a + b.value;
        }, 0);

        const accCurrency = prices[0].currency;

        return new CurrencyPrice({
            currency: accCurrency,
            value: total
        });
    }

    toPrimitives(): CurrencyPricePrimitiveProps {
        return {
            ...this.props,
            currency: this.props.currency.toPrimitives()
        };
    }

    static fromPrimitives(props: CurrencyPricePrimitiveProps) {
        return new CurrencyPrice({
            currency: Currency.fromPrimitives(props.currency),
            value: props.value,
            formattedValue: props.formattedValue
        });
    }

    get isZero() {
        return this.props.value == 0;
    }

    static isEqual(priceA: CurrencyPrice, priceB: CurrencyPrice) {
        if (!priceA.props.currency.isEqual(priceB.currency)) return false;
        return priceA.props.value == priceB.props.value;
    }

    static equalPrices(pricesA: CurrencyPrice[], pricesB: CurrencyPrice[]) {
        const difference = ArrayUtils.differenceWith(
            pricesA,
            pricesB,
            (a: CurrencyPrice, b: CurrencyPrice) => CurrencyPrice.isEqual(a, b)
        );
        return difference.length == 0;
    }

    static fromZero(currency: Currency) {
        return new CurrencyPrice({
            currency: Currency.fromPrimitives(currency),
            value: 0,
            formattedValue: '0'
        });
    }

    static percentage(price: CurrencyPrice, percentage: number) {
        return new CurrencyPrice({
            currency: price.currency,
            value: parseFloat((percentage * price.value / 100).toFixed(2))
        });
    }

    static fromPrimitiveArray(items: CurrencyPricePrimitiveProps[]) {
        return items.map((e) => CurrencyPrice.fromPrimitives(e));
    }
}
