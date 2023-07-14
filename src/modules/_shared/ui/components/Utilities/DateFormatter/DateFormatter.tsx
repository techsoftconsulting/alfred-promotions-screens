import 'moment/locale/es-mx';
import React from 'react';
import Moment from 'react-moment';
import { DateFormatterProps } from './DateFormatterProps';

export default function DateFormatter({
    children,
    element,
    format
}: DateFormatterProps) {
    return (
        <Moment format={format} element={element} locale="es-mx">
            {children}
        </Moment>
    );
}
