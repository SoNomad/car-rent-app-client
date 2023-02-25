import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

//стилизация кнопки MUI
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[700],
  },
}));

const CustomButton = (props) => {
  return <ColorButton variant="contained">{props.children}</ColorButton>;
};

export default CustomButton;
