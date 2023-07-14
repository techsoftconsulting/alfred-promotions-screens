import ArrayUtils from '@modules/_shared/domain/utils/misc/array-utils';
import ClipboardUtils from '@modules/_shared/domain/utils/misc/clipboard-utils';
import DateTimeUtils from '@modules/_shared/domain/utils/misc/datetime-utils';
import LinkingUtils from '@modules/_shared/domain/utils/misc/linking-utils';
import NetworkUtils from '@modules/_shared/domain/utils/misc/network-utils';
import ObjectUtils from '@modules/_shared/domain/utils/misc/object-utils';
import UuidUtils from '@utils/misc/uuid-utils';
import SizingUtils from '@utils/misc/sizing-utils';
import TextUtils from '@utils/misc/text-utils';

export interface AppUtils {
    uuid: typeof UuidUtils;
    object: typeof ObjectUtils;
    date: typeof DateTimeUtils;
    linking: typeof LinkingUtils;
    array: typeof ArrayUtils;
    network: typeof NetworkUtils;
    clipboard: typeof ClipboardUtils;
    sizing: typeof SizingUtils;
    text: typeof TextUtils;
}
