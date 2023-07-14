import {Box} from "@main-components/Base";
import Text from "@main-components/Typography/Text";
import React from "react";

export function ShowPageSectionItem(props: { title: string; value: any }) {
    return (
        <Box
            flexDirection={"column"}
            mb={"m"}
        >
            <Box
                justifyContent={"center"}
                mb="s"
            >
                <Text bold>{props.title}: </Text>
            </Box>
            <Box>
                <Text>{props.value}</Text>
            </Box>
        </Box>
    )
}