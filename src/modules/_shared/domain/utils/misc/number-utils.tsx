var numeral = require("numeral");

const NumberUtils = {
  format: (value: number, formatString: string): string => {
    return numeral(value).format(formatString);
  },
};

export default NumberUtils;
