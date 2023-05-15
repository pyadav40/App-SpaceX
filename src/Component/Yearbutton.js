import React from 'react'
import { memo } from 'react';
import {Button} from "@mui/material";
const Yearbutton = ({year,handleChange}) => {
 
  return (
    <div>
   
        <Button aria-label='click' onClick={()=>{handleChange(year)}} variant="contained">{year}</Button>
    </div>
  )
} 

export default memo(Yearbutton)