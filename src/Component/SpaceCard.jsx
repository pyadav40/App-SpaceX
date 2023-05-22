import { Card, CardContent, CardMedia,Typography } from '@mui/material'
 
 
import React from 'react';



const SpaceCard = ({card_image,mid,launch_year,succ_launch, mi_name}) => {
 
  return (
 
    <Card sx={{maxWidth:280,backgroundColor:"lightgray"}}>
        <CardMedia component="img" loading='lazy' 
        sx={{marginLeft:4, marginTop:2,height:120, width:120, objectFit:"contain"}} 
         image={card_image} alt="SpaceX Image"/>
      <CardContent>
        <Typography variant='body1'>{mi_name}</Typography>
        <Typography variant='body1'>Mission Ids: {mid}</Typography>
        <Typography variant='body1'>Launch Year: {launch_year}</Typography>
        <Typography variant='body1'>Sucessful Launch: {succ_launch.toString().charAt(0).toUpperCase()+succ_launch.toString().slice(1)} </Typography>
        <Typography variant='body1'>Sucessful Landing:</Typography>
      </CardContent>
    </Card>
   
 
  )
}

export default SpaceCard