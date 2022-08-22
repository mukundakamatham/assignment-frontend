import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
export default function Datepicker({ handleChange, label, name }) {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  );
  const handlechange = (newValue: Date | null) => {
    setValue(newValue);
    let e = { target: { value: newValue } };
    handleChange(e, name);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '56ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label={label}
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handlechange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </Box>
  );
}
