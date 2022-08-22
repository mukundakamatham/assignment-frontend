import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Inputbox({
  isRequired,
  handleChange,
  name,
  label,
  type,
}) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '56ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required={isRequired}
          id="outlined-required"
          label={label}
          type={type}
          onChange={(e: any) => handleChange(e, name)}
        />
      </div>
    </Box>
  );
}
