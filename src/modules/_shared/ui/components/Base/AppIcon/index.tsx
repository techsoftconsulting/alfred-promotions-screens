import { createIconSetFromIcoMoon } from '@expo/vector-icons';

const AppIcon = createIconSetFromIcoMoon(
        require('@assets/fonts/selection.json'),
        'IconFont',
        'font.ttf'
);

export default AppIcon;
