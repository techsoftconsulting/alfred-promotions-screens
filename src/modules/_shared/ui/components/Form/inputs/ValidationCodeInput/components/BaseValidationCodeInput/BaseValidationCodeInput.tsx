import React, {useState} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {
    BaseValidationCodeInputProps
} from "@main-components/Form/inputs/ValidationCodeInput/components/BaseValidationCodeInput/BaseValidationCodeInputProps";
import InputTextHelper from "@main-components/Form/components/InputTextHelper";
import {palette} from "@modules/_shared/ui/theme/AppTheme";
import {Box} from "@main-components/Base";


export default function BaseValidationCodeInput(props: BaseValidationCodeInputProps) {
    const codeLength = props.number || props.code?.length;

    const [state, setState] = useState<any>({
        code: new Array(codeLength).fill(""),
        edit: null,
        reset: false,
    });

    let textInputsRefs: any = {};


    function clean() {
        setState({
            edit: null,
            reset: true,
        });
        focus(0);
    }

    function focus(id: number) {
        // Check to ensure that input exists. This is important in the case of autofill.
        if (textInputsRefs[id]) textInputsRefs[id].focus();
    }

    function isFocus(id: number) {
        let newCode = state.code.slice();

        for (let i = 0; i < newCode.length; i++) if (i >= id) newCode[i] = "";

        setState({
            code: newCode,
            edit: id,
        });
    }

    function handleEdit(number: string, id: number) {
        let newCode = state.code.slice();

        // Detecting if the entire code has been pasted or autofilled into
        // the first field.
        const hasAutoFilled =
            number.length > 1 && number.length === props.number && id === 0;

        if (hasAutoFilled) {
            newCode = number.split("");

            // Need to update state so UI updates.
            setState({
                code: newCode,
                edit: props.number - 1,
                reset: false,
            });
        } else {
            newCode[id] = number[0];
        }

        // User filling the last pin ?
        if (id === props.number - 1 || hasAutoFilled) {
            /*  focus(0); */

            props.onInputComplete?.(newCode.join(""));
            setState({
                code: newCode,
                edit: state.edit + 1,
                reset: true,
            });

            return;
        }

        focus(state.edit + 1);

        setState({
            code: newCode,
            edit: state.edit + 1,
            reset: false,
        });
    }

    function onKeyPress(e: any) {
        if (e.nativeEvent.key === "Backspace") {
            const edit = state.edit;
            const toFocus = edit > 0 ? edit - 1 : 0;
            focus(toFocus);
        }
    }

    const {obfuscation, ...rest} = props;


    return (
        <>
            <View style={[styles.container, props.container]}>
                {[...new Array(props.number)].map((el, index) => {
                    const id = index;
                    const value = state.code[id]
                        ? obfuscation
                            ? "*"
                            : state.code[id].toString()
                        : "";

                    return (
                        <TextInput
                            key={"code-input" + id}
                            ref={(ref) => {
                                const newRefs = {...textInputsRefs, [id]: ref};
                                textInputsRefs = newRefs;
                            }}
                            keyboardType="numeric"
                            onChangeText={(text) => handleEdit(text, id)}
                            onFocus={() => isFocus(id)}
                            value={value}
                            maxLength={id === 0 ? props.number : 1}
                            underlineColorAndroid="transparent"
                            style={[styles.item, props.numberItemSize ? {
                                width: props.numberItemSize,
                                height: props.numberItemSize
                            } : {}]}
                            autoCapitalize={"sentences"}
                            autoCorrect={false}
                            autoFocus={
                                (id === 0 && state.edit === null && props.autoFocusFirst) ||
                                id === state.edit
                            }
                            onKeyPress={onKeyPress}
                            {...rest}
                        />
                    );
                })}
            </View>

            {
                !!props.error && (
                    <Box style={[styles.container, props.container]}>
                        <InputTextHelper
                            error={props.error}
                            helperText={props.helperText}
                        />
                    </Box>
                )
            }

        </>
    );
}

BaseValidationCodeInput.defaultProps = {
    code: "",
    number: 6,
    autoFocusFirst: true,
    obfuscation: false,
};

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    item: {
        fontSize: 22,
        marginRight: 10,
        borderRadius: 8,
        borderBottomWidth: 0,
        width: 35,
        paddingLeft: 0,
        height: 40,
        textAlign: "center",
        backgroundColor: palette.GREY_LIGHT,
    },
});
