import { useDrawerStatus } from '@react-navigation/drawer';

export default function useIsDrawerOpen() {
    const isDrawerOpen = useDrawerStatus() === 'open';

    return isDrawerOpen;
}
