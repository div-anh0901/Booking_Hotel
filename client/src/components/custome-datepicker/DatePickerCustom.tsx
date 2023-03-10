import * as React from 'react';

import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers';
type Attribute = {
    fullWidth?: boolean;
    width?: string;

}
export const DatePickerCustom =styled(DatePicker)<Attribute>(({ theme ,fullWidth, width}) => ({
    width:fullWidth ? "100%": width
}));