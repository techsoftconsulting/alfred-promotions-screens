import { ListItemProps } from '@main-components/Base/List/components/ListItem';

export interface CardListProps {
    title: string;
    items: ListItemProps[];
    renderFooter?: () => JSX.Element;
}
