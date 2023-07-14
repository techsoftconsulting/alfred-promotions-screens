import { Box } from '@main-components/Base/Box';
import Text from '@main-components/Typography/Text';
import TouchableOpacity from '@main-components/Utilities/TouchableOpacity';
import { usePathname } from 'expo-router';
import useNavigation from '@shared/domain/hooks/navigation/use-navigation';
import SizingUtils from '@utils/misc/sizing-utils';
import { IconButton } from '@main-components/Base/IconButton';
import React, { useEffect, useState } from 'react';
import { Modal, ModalProps } from '@main-components/Base/Modal';
import { useTheme } from '@shared/ui/theme/AppTheme';
import BaseTextInput from '@main-components/Form/inputs/TextInput/components/BaseTextInput/BaseTextInput';
import { Icon } from '@main-components/Base/Icon';
import { ListItem } from '@main-components/Base/List';
import { Image } from '@main-components/Base/Image';
import Animated, {
    Easing,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming
} from 'react-native-reanimated';
import useFindPromotions from '@modules/promotions/application/promotions/use-find-promotions';

export const SPACE_BAR_HEIGHT = 0;
export const APP_MENU_HEIGHT = SizingUtils.scale(35);

export default function AppMenu() {

    const route = usePathname();
    const { navigate } = useNavigation();

    const handlePress = (id) => {
        navigate(id);
    };

    return (
            <>
                <Box
                        position={'fixed'}
                        width={'100%'}
                        zIndex={'999'}
                        style={{
                            height: SPACE_BAR_HEIGHT,
                            backgroundColor: 'white'
                        }}
                />
                <Box
                        position={'fixed'}
                        width={'100%'}
                        zIndex={'999'}
                        height={APP_MENU_HEIGHT}
                        top={SPACE_BAR_HEIGHT}
                        bg={'primaryMain'}
                        justifyContent={'space-between'}
                        flexDirection={'row'}
                        alignItems={'center'}
                        paddingHorizontal={'m'}
                >

                    <Box
                            alignItems={'center'}
                            flex={1}
                    >
                        <MenuItem
                                id={'promotions'}
                                selected={false}
                                title={'Promociones'}
                                onPress={handlePress}
                        />
                    </Box>


                    <Box>
                        <SearchController />
                    </Box>

                </Box>
            </>
    );
}

function BackButton() {
    const { navigate, goBack, canGoBack } = useNavigation();
    const ICON_SIZE = SizingUtils.scale(30);

    if (!canGoBack()) {
        return <Box></Box>;
    }

    return (
            <Box
                    height={'100%'}
                    zIndex={9999}
                    justifyContent={'center'}
            >
                <Box ml={'m'}>
                    <IconButton
                            containerSize={ICON_SIZE - 20}
                            borderRadius={ICON_SIZE - 20 / 2}
                            onPress={() => {
                                goBack();
                            }}
                            iconSize={ICON_SIZE / 2}
                            iconName={'arrow-left'}
                            iconColor={'white'}
                    />
                </Box>
            </Box>
    );
}

function SearchController() {
    const ICON_SIZE = SizingUtils.scale(30);

    const [showSearchModal, setShowSearchModal] = useState(false);

    return (
            <>
                <IconButton
                        containerSize={ICON_SIZE}
                        borderRadius={ICON_SIZE / 2}
                        backgroundColor={'primaryMain'}
                        onPress={() => {
                            setShowSearchModal(true);
                        }}
                        iconSize={ICON_SIZE / 2}
                        iconName={'search'}
                        iconColor={'white'}
                />
                <SearchModal
                        onSearch={() => {

                        }}
                        onDismiss={() => {
                            setShowSearchModal(false);
                        }}
                        visible={showSearchModal}
                />
            </>

    );
}

function MenuItem({ id, selected, title, onPress }) {

    const theme = useTheme();

    const animation = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        const color = interpolateColor(
                animation.value,
                [0, 1],
                [theme.colors.primaryMain, theme.colors.appSuccess]
        );

        return {
            width: SizingUtils.scale(60),
            border: 0,
            marginHorizontal: theme.spacing.m,
            borderRadius: 80,
            backgroundColor: color
        };
    }, []);

    useEffect(() => {
        animation.value = selected ?
                withRepeat(
                        withTiming(1, {
                            duration: 1500,
                            easing: Easing.inOut(Easing.linear)
                        }),
                        -1,
                        true
                ) : 0;
    }, [selected]);

    return (
            <TouchableOpacity
                    disabled
                    onPress={() => onPress(id)}
            >
                <Animated.View style={[animatedStyle]}>
                    <Box
                            alignItems={'center'}
                            justifyContent={'center'}
                            padding={'s'}
                    >
                        <Text
                                bold={selected}
                                /*  variant={selected ? 'heading2' : 'body'}*/
                                color={'white'}
                        >{title}</Text>
                    </Box>
                </Animated.View>
            </TouchableOpacity>
    );
}


function SearchModal(props: Partial<ModalProps> & { onSearch: any }) {


    return (
            <Modal
                    containerStyle={{}}
                    contentContainerStyle={{
                        boxShadow: 'none',
                        backgroundColor: 'transparent',
                        top: '40%',
                        maxWidth: '80%'
                    }}
                    visible={props.visible}
                    onDismiss={props.onDismiss}
            >
                <SearchContainer
                        onCancel={() => {
                            props.onDismiss?.();
                        }}
                />
            </Modal>
    );
}

function SearchContainer({ onCancel }) {

    const theme = useTheme();
    const [query, setQuery] = useState('');
    const [searchQuery, setSearchQuery] = useState('');


    const { data: result, loading, isRefetching, refetch } = useFindPromotions({
        query: searchQuery
    }, {
        enabled: searchQuery?.trim() !== ''
    });

    const BACK_BUTTON_SIZE = SizingUtils.mscale(40);

    return (
            <Box


            >
                <Box
                        alignItems={'center'}
                        flexDirection={'row'}
                        marginHorizontal={'l'}
                >
                    <Box mr={'l'}>
                        <IconButton
                                onPress={() => {
                                    onCancel();
                                }}
                                iconSize={BACK_BUTTON_SIZE / 2}
                                containerSize={BACK_BUTTON_SIZE}
                                borderRadius={BACK_BUTTON_SIZE / 2}
                                backgroundColor={'greyLight'}
                                iconName={'chevron-left'}
                                iconColor={'black'}
                        />
                    </Box>
                    <Box
                            flex={1}
                    >
                        <Box
                                height={SizingUtils.vscale(35)}
                                paddingHorizontal={'m'}
                                style={{
                                    backgroundColor: theme.colors.greyLight,
                                    borderRadius: 35,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    maxWidth: '100%'
                                }}
                                alignItems={'center'}
                                flexDirection={'row'}
                        >
                            <Box
                                    flex={1}
                            >
                                <BaseTextInput
                                        autoFocus
                                        value={query}
                                        placeholder={'¿Qué promoción estás buscando?'}
                                        onChangeText={el => {
                                            setQuery(el);
                                        }}
                                        style={{
                                            height: SizingUtils.vscale(35),
                                            fontSize: theme.textVariants.body.fontSize,
                                            elevation: 0,
                                            borderWidth: 0,
                                            backgroundColor: 'transparent'
                                        }}
                                        onSubmitEditing={() => {
                                            if (query.trim().length == 0) {
                                                setSearchQuery('');
                                                return;
                                            }
                                            setSearchQuery(query);
                                        }}
                                />
                            </Box>
                            <Box>
                                <IconButton
                                        disabled={query?.trim().length == 0}
                                        iconSize={BACK_BUTTON_SIZE / 2}
                                        containerSize={BACK_BUTTON_SIZE}
                                        borderRadius={BACK_BUTTON_SIZE / 2}
                                        backgroundColor={'primaryMain'}
                                        iconName={'search'}
                                        iconColor={'white'}
                                        onPress={() => {
                                            if (query.trim().length == 0) {
                                                setSearchQuery('');
                                                return;
                                            }
                                            setSearchQuery(query);
                                            // onCancel();
                                        }}
                                />
                            </Box>

                        </Box>
                    </Box>

                </Box>
                <ResultItemList
                        onClose={onCancel}
                        result={result}
                        loading={loading}
                />

            </Box>
    );
}

function ResultItemList({ result, loading, onClose }) {
    const { navigate } = useNavigation();
    const theme = useTheme();

    const IMAGE_SIZE = SizingUtils.mscale(40);

    return (
            <Box
                    borderRadius={20}
                    overflow={'hidden'}
                    bg={'white'}
                    mt={'l'}
            >
                {
                        result?.length == 0 && !loading && (
                                <Box
                                        width={'100%'}
                                        bg={'white'}
                                        paddingVertical={'m'}
                                        paddingHorizontal={'m'}
                                        borderBottomWidth={1}
                                        borderBottomColor={'greyMedium'}
                                >
                                    <Text
                                            align={'center'}
                                            color={'greyMain'}
                                            variant={'heading4'}
                                    >Sin resultados...</Text>
                                </Box>
                        )
                }

                {
                        loading && (
                                <Box
                                        width={'100%'}
                                        bg={'white'}
                                        paddingVertical={'m'}
                                        paddingHorizontal={'m'}
                                        borderBottomWidth={1}
                                        borderBottomColor={'greyMedium'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                >
                                    <Box flexDirection={'row'}>
                                        <Box mr={'m'}>
                                            <Icon
                                                    name={'search'}
                                                    color={'greyMain'}
                                                    numberSize={theme.textVariants.body.fontSize}
                                            />
                                        </Box>
                                        <Box>
                                            <Text
                                                    color={'greyMain'}
                                                    variant={'heading4'}
                                            >Buscando...</Text>
                                        </Box>

                                    </Box>
                                </Box>
                        )
                }

                {
                    result?.slice(0, 3).map(el => {
                        return (
                                <TouchableOpacity
                                        onPress={() => {
                                            onClose();

                                            navigate('/[id]', {
                                                id: el.id
                                            });
                                        }}
                                        key={el.id}
                                >
                                    <Box
                                            width={'100%'}
                                            bg={'white'}
                                            paddingVertical={'s'}
                                            paddingHorizontal={'m'}
                                            borderBottomWidth={1}
                                            borderBottomColor={'greyMedium'}
                                    >
                                        <ListItem
                                                title={el?.name}
                                                titleStyle={{
                                                    fontSize: theme.textVariants.body.fontSize,
                                                    alignItems: 'center'
                                                }}
                                                style={{
                                                    justifyContent: 'center'
                                                }}
                                                left={() => {
                                                    return (
                                                            <Box
                                                                    width={IMAGE_SIZE}
                                                                    height={IMAGE_SIZE}
                                                                    mr={'l'}
                                                            >
                                                                <Image
                                                                        source={{
                                                                            uri: el?.imageUrl
                                                                        }}
                                                                        style={{
                                                                            borderRadius: IMAGE_SIZE / 2,
                                                                            width: IMAGE_SIZE,
                                                                            height: IMAGE_SIZE
                                                                        }}
                                                                />

                                                            </Box>
                                                    );
                                                }}
                                                right={() => {
                                                    return (
                                                            <Box>
                                                                <Icon
                                                                        name={'chevron-right'}
                                                                        color={'greyMedium'}
                                                                />
                                                            </Box>
                                                    );
                                                }}
                                        />

                                    </Box>
                                </TouchableOpacity>
                        );
                    })
                }
            </Box>
    );
}