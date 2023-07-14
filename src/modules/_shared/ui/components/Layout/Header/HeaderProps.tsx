import React from "react";

export default interface HeaderProps {
    leftComponent?: React.ReactElement<{}>;
    centerComponent?: React.ReactElement<{}>;
    rightComponent?: React.ReactElement<{}>;
    style?: any;
    leftContainerStyle?: any;
    centerContainerStyle?: any;
    rightContainerStyle?: any;
}