import { usdAbbr, usdFormat } from '@utils/currency';
import Currency from './currency';

const UsdCurrency = new Currency({
    abbr: usdAbbr,
    name: 'Dolares',
    format: usdFormat
});

export default UsdCurrency;
