import NumberUtils from '@utils/misc/number-utils';

export const bsFormat = (value: number) => {
    return `Bs.S ${NumberUtils.format(value, '0.0[,]')}`;
};

export const bsAbbr = 'Bs.S';

export const usdFormat = (value: number) => {
    return `$${NumberUtils.format(value, '0.0[,]')}`;
};

export const usdAbbr = 'USD';
