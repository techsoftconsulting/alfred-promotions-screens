import ObjectUtils from '@utils/misc/object-utils';
import DateTimeUtils from '@utils/misc/datetime-utils';
import LinkingUtils from '@utils/misc/linking-utils';
import ArrayUtils from '@utils/misc/array-utils';
import NetworkUtils from '@utils/misc/network-utils';
import ClipboardUtils from '@utils/misc/clipboard-utils';
import TextUtils from '@utils/misc/text-utils';
import UuidUtils from '@utils/misc/uuid-utils';
import SizingUtils from '@utils/misc/sizing-utils';

const AppUtilsProvider = {
    object: ObjectUtils,
    date: DateTimeUtils,
    linking: LinkingUtils,
    array: ArrayUtils,
    network: NetworkUtils,
    clipboard: ClipboardUtils,
    text: TextUtils,
    uuid: UuidUtils,
    sizing: SizingUtils
};

export default AppUtilsProvider;
