import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';
import images from '@shared/ui/images/images';

export function useLoadAssets() {
    const [assetsLoaded, setAssetsLoaded] = useState(false);

    // const { loaded: fontsLoaded, error } = useLoadIconFonts();

    function cacheImages(images: string[]) {
        return images.map((image) => {
            return Asset.fromModule(image).downloadAsync();
        });
    }

    async function _loadAssetsAsync() {
        const imageAssets = cacheImages(Object.values(images));
        await Promise.all([...imageAssets]);
    }

    useEffect(() => {
        async function prepare() {
            try {
                try {
                    await _loadAssetsAsync();

                } catch (e) {
                    throw new Error('ASSETS_NOT_LOADED');
                }

                try {
                    //  preload(Object.values(images));
                    await Font.loadAsync({
                        IconFont: require('@assets/fonts/font.ttf'),
                        AppFont: require('@assets/fonts/font-app.ttf')
                    });
                } catch (e) {
                    throw new Error('FONTS_NOT_LOADED');
                }

                setAssetsLoaded(true);
            } catch (e) {
                console.log('WARNING');
                console.warn(e);
            } finally {
                setAssetsLoaded(true);
            }
        }

        prepare();
    }, []);


    return {
        loaded: assetsLoaded
    };
}
