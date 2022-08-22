import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectBox({ value, handleChange, label, name, items }) {
  return (
    <div>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, minWidth: 120 },
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="select first person "
            onChange={(e) => handleChange(e, name)}
          >
            {items.map((e: any, i: any) => (
              <MenuItem value={e.value} key={i}>
                {e.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
