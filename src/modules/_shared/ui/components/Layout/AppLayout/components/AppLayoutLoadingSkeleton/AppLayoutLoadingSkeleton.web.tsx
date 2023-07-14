import {Box, Image, Skeleton} from "@main-components/Base";
import {useAppLayout} from "@modules/_shared/ui/hooks/use-app-layout";
import {CLOSED_DRAWER_WIDTH, DRAWER_WIDTH} from "@main-components/Layout/AppLayout/drawer-constants";
import {useTheme} from "@modules/_shared/ui/theme/AppTheme";
import React from "react";
import Header from "@main-components/Layout/Header";
import images from "@modules/_shared/ui/images/images";

export function AppLayoutLoadingSkeleton(props) {
    const collapsed = useAppLayout((values) => values.collapsedMenu)
    const width = !collapsed ? DRAWER_WIDTH : CLOSED_DRAWER_WIDTH;
    const theme = useTheme()

    return (
        <div
            style={{
                backgroundColor: theme.colors.greyLightest,
                paddingBottom: 60 /* Trial bar */,
                position: 'relative',
                width: `calc(100% - ${width}px)`,
                left: `${width}px`,
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}
        >
            <SkeletonMenu collapsed={collapsed}/>

            <SkeletonHeader
                title={''}
            />

            <Box
                flex={1}
                height="100%"
                p="m"
                bg={"greyLightest"}
            >
                {props.children}
            </Box>

        </div>
    );
}

function SkeletonMenu({collapsed}) {
    const width = collapsed ? CLOSED_DRAWER_WIDTH : DRAWER_WIDTH
    const theme = useTheme()

    return (
        <Box
            bg={"secondaryMain"}
            position={"absolute"}
            height={"100%"}
            left={-width}
            width={width}
        >

            <Box p={"s"}>
                <Image
                    source={collapsed ? images.LOGO : images.LOGO}
                    style={{
                        width: '100%',
                        height: 60,
                        resizeMode: 'contain'
                    }}
                />
            </Box>

            <Box
                mt={"s"}
                paddingHorizontal={"m"}

            >
                <Skeleton
                    loading
                    style={{
                        width: "100%",
                        height: 40,
                        borderRadius: 10,
                    }}
                    type={"rectangle"}
                    color={"#212d34"}
                    highlightColor={theme.colors.secondaryMain}
                />
            </Box>

            <Box
                paddingHorizontal={"m"}
                marginVertical={"xl"}
            >
                <MenuItemSkeleton/>

                <MenuItemSkeleton/>

                <MenuItemSkeleton/>

                <MenuItemSkeleton/>

                <MenuItemSkeleton/>

                <MenuItemSkeleton/>

                <MenuItemSkeleton/>

                <MenuItemSkeleton/>

                <MenuItemSkeleton/>

            </Box>


        </Box>
    )
}

function MenuItemSkeleton() {
    const theme = useTheme()

    return (
        <Box mb={"m"}>
            <Skeleton
                loading
                style={{
                    width: "100%",
                    height: 30,
                    borderRadius: 4,
                }}
                type={"rectangle"}
                color={"#212d34"}
                highlightColor={theme.colors.secondaryMain}
            />
        </Box>

    )
}

function SkeletonHeader() {
    const theme = useTheme()
    return (
        <Header
            style={{
                backgroundColor: theme.colors.white,
                height: 70,
                paddingHorizontal: 20,
                boxShadow: '5px 2px 10px #eceff1'
            }}
            leftComponent={{
                icon: 'menu',
                color: 'black',
                onPress: () => {
                }
            }}
            centerComponent={
                <Box
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                >

                </Box>
            }
        />
    )
}