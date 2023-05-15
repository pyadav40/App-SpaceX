import { Card, CardContent, CardMedia,Typography } from '@mui/material'
import React from 'react'

const SpaceCard = ({card_image,mid,launch_year,succ_launch, mi_name}) => {
// console.log(succ_launch.toString().toUpperCase())
  return (
 
    <Card sx={{maxWidth:345,backgroundColor:"lightgray"}}>
        <CardMedia component="img" loading='lazy'
        sx={{height:190, width:180, objectFit:"contain"}}  image={card_image} alt="SpaceX Image"/>
      <CardContent>
        <Typography variant='body1'>{mi_name}</Typography>
        <Typography variant='body1'>Mission Ids: {mid}</Typography>
        <Typography variant='body1'>Launch Year: {launch_year}</Typography>
        <Typography variant='body1'>Sucessful Launch: {succ_launch.toString().toUpperCase()} </Typography>
        <Typography variant='body1'>Sucessful Landing::</Typography>
      </CardContent>
    </Card>
   
 
  )
}

export default SpaceCard