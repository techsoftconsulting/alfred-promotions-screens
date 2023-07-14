import React from 'react';
import { List as BaseList } from 'react-native-paper';
import { ListProps } from './ListProps';

export function List(props: ListProps) {
    return <BaseList.Section {...(props as any)} />;
}
