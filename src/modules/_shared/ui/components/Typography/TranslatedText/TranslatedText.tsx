import Text from '@main-components/Typography/Text';
import useTranslate from '@modules/_shared/domain/hooks/use-translate';
import ObjectUtils from '@utils/misc/object-utils';
import React from 'react';
import { TranslatedTextProps } from './TranslatedTextProps';

export default function TranslatedText(props: TranslatedTextProps) {
    const translate = useTranslate();

    return (
        <Text {...ObjectUtils.omit(props, ['translationKey', 'options'])}>
            {translate(props.translationKey, props.options)}
        </Text>
    );
}
