import ObjectUtils from '@utils/misc/object-utils';

export default function useGetImageDimensionsFromUrl() {
    function getDimensionsFromUrl(url: string) {
        const parts = url.split('_')
        const dimensions = parts?.pop()?.split('x');

        if (parts.length <= 1) return {}


        const width = dimensions?.[0];
        const height = dimensions?.[1]?.split('.')?.shift();

        return ObjectUtils.omitUnknown({
            width: width ? parseFloat(width ?? '') : undefined,
            height: height && height !== '-' ? parseFloat(height ?? '') : undefined
        });
    }

    return {
        getDimensions: getDimensionsFromUrl
    };
}