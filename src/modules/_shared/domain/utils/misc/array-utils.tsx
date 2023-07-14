import {
    concat as LConcat,
    differenceWith as LDifferenceWith,
    filter as lFilter,
    find as LFind,
    findIndex as LfindIndex,
    groupBy as LGroupBy,
    isArray as LIsArray,
    isEqual as lIsEqual,
    keyBy as LkeyBy,
    orderBy as LOrderBy,
    uniq as LUniq,
    uniqBy as LUniqBy,
    xor as LXor,
    xorBy as LXorBy
} from 'lodash';

const ArrayUtils = {
    groupBy: LGroupBy,
    orderBy: LOrderBy,
    isArray: LIsArray,
    isEqual: lIsEqual,
    filter: lFilter,
    find: LFind,
    differenceWith: LDifferenceWith,
    combine(arr1: any[], arr2: any[]) {
        return arr1.map((e, i) => {
            return { ...e, ...arr2[i] };
        });
    },
    xor: LXor,
    replaceByKey: (arr: any[], newValue: any, keyName: string) => {
        const copy = [...arr];
        var index = LfindIndex(arr, (e) => e[keyName] == newValue[keyName]);

        if (index <= -1) return arr;

        if (copy[index]) {
            copy[index] = newValue;
        } else {
            copy.push(newValue);
        }

        return copy;
    },
    replaceWhere<T = any>(
            arr: T[],
            condition: (params: T) => boolean,
            newValue: any
    ) {
        const copy = [...arr];
        var index = LfindIndex(arr, condition);

        if (index <= -1) return arr;

        if (copy[index]) {
            copy[index] = newValue;
        } else {
            copy.push(newValue);
        }

        return copy;
    },
    toggleAdd<T = any>(array: T[], element: T, predicate: any) {
        return LXorBy(array, [element], predicate);
    },
    keyBy<T = any>(array: T[], predicate: any) {
        return LkeyBy(array, predicate);
    },
    uniq<T = any>(array: T[]) {
        return LUniq<T>(array);
    },
    uniqBy<T = any>(array: T[], criteria: any) {
        return LUniqBy<T>(array, criteria);
    },
    findIndex<T = any>(array: T[], predicate: any) {
        return LfindIndex<T>(array, predicate);
    },
    concat<T = any>(array: T[], ...rest: T[]) {
        return LConcat<T>(array, ...rest);
    },
    filterLike(arr1: any[], fieldName: string, like: string) {
        return arr1.filter((dto) => {
            let name = dto[fieldName] ?? '';
            let test = like;
            let reg1 = new RegExp('^' + test + '.*$', 'i');
            let reg2 = new RegExp('^.*' + test + '$', 'i');
            let regex3 = new RegExp([test].join('|'), 'i');

            let match = name.match(reg1);
            let match2 = name.match(reg2);
            let match3 = name.includes(test);
            let match4 = regex3.test(name);
            let n = name?.toLowerCase();
            let match5 = test?.toLowerCase()?.trim()?.split(' ')?.some(sub => {
                return n?.includes(sub);
            });

            return !!match || !!match2 || !!match3 || !!match4 || !!match5;
        });
    }
};

export default ArrayUtils;
