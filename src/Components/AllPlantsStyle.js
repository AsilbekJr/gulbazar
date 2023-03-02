import { MenuItem, Select, styled } from "@mui/material";
import  FormControl  from '@mui/material/FormControl';

export const MyFormControl = styled(FormControl)(({theme}) => ({
    ".MuiInputLabel-root":{
       "&.Mui-focused":{
        color:"#000"
       }
    },
".MuiInputBase-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#000"
    },
    "&.Mui-focused label": {
      borderColor: "#000"
    }
  }
})) 
export const MyInputItem = styled(MenuItem)(({theme}) => ({
    [theme.breakpoints.down("sm")]:{
        fontSize: ".8rem",
        margin:"0rem 0"
    },
    margin:".8rem 0"
   
})) 