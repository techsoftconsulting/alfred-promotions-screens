import {Box} from "@main-components/Base";
import Text from "@main-components/Typography/Text";
import React from "react";

export function ShowPageSection(props: { children: any, title: string }) {
    return (
        <Box p={"l"}>
            <Text
                bold
                variant={"heading2"}
            >{props.title}</Text>
            <Box
                mt={"l"}
                ml={"m"}
            >

                {props.children}
            </Box>
        </Box>
    )
}