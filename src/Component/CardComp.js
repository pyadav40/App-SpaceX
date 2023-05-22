import React from 'react'
import { useMemo } from 'react';
import {Grid,Typography} from '@mui/material'
import SpaceCard from './SpaceCard';
const CardComp = ({carddata}) => {
    console.log("card Compoent",carddata)
  return (
    <> 
           {useMemo(() => (carddata.length > 0 ? carddata.map((item, i) => {
            return (
              <Grid sx={{ margin: 1 }} spacing={2} lg={3} md={3}>
                <SpaceCard key={i} mi_name={item.rocket.rocket_name} card_image={item.links.mission_patch} mid={item.mission_id} launch_year={item.launch_year} succ_launch={item.launch_success} />
              </Grid>
            )
          }) : <Typography variant='h4'>No Data</Typography>), [carddata])
          }
    </>
  )
}

export default CardComp