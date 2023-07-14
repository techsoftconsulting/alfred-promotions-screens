import {
    isEmpty,
    isNil,
    isNull as LIsNull,
    mapValues as LMapValues,
    merge as LMerge,
    omit as LOmit,
    omitBy as fnOmitBy,
    pick as LPick
} from 'lodash';
import fnGet from 'lodash/get';

const ObjectUtils = {
    get: fnGet,
    isNull: LIsNull,
    omit: LOmit,
    mapValues: LMapValues,
    omitUnknown: (object: any) => {
        return fnOmitBy(object, isNil || isEmpty);
    },
    omitBy: fnOmitBy,
    pick: LPick,
    isEmpty: LIsNull,
    merge: LMerge
};

export default ObjectUtils;
