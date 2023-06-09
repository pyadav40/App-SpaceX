import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Divider} from '@mui/material'
import PaginationComp from './PaginationComp';
import Yearbutton from './Yearbutton';

const year = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]

const Mainpage = () => {
  // Main results
  const [mainRes, setMainRes] = useState([]);
 
  // filter as per Years
  const [launch, setLaunch] = useState(false)
  const [landing, setLanding] = useState(false)
  const [page,setPage]=useState(1);
  // const [launchYear, setlaunchYears] = useState(0);

 
  
  let handlePagination=(e,v)=>
  {
    setPage(v)
  }


  let getSearchData = (param) => {
    let url = `https://api.spacexdata.com/v3/launches?limit=100${param}`
    // keep the loading state truee before calling API
    // setLoadingState(true);
    async function getApi(url) {

      const fetchdata = await fetch(url)
      const res = await fetchdata.json();
      setMainRes(res);
    }
    getApi(url)
    console.log(url);
  }
  useEffect(() => { getSearchData() }, []) 
 
  let handleLaunch = () => {
    setLaunch(!launch)
    const url_launch = `&launch_success=true`
    getSearchData(url_launch)
    console.log(launch)
  }
  let handleland = () => {
    setLanding(!landing)
    const url_launch = `&launch_success=true&land_success=true`
    getSearchData(url_launch)
    console.log(landing)
  }

  let handleYear = (year) => {
    const url_launch = `&launch_success=true&land_success=true&launch_year=${year}`;
    getSearchData(url_launch)

  }
  
   

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" >
        <Grid container justifyContent="center">
          <Typography component="div" variant='h4'>SpaceX Lanunches Programs</Typography>
        </Grid>
      </Grid>
      <Grid container m={2} style={{ gap: 30 }} >
        <Grid item lg={3} md={3} justifyContent="center" sx={{ borderRadius: 3, height: '470', backgroundColor: "lightblue" }}>
          <Typography ml={2} fontFamily='Prompt, sans-serif' justifyContent="center" component="div" variant='h6'>Filter</Typography>
          <Typography ml={10} variant='body1'>Launch Year</Typography>
          <Divider />
          <Grid container m={1}>
            {
              year.map((y, i) => {
                return (
                  <Grid item sx={{ margin: 1 }} lg={3} md={3}>
                    <Yearbutton key={i} year={y} handleChange={handleYear} />
                  </Grid>
                )
              })
            }
          </Grid>
          <Grid item  >
            <Typography ml={10} variant='body1'>Successful Launch</Typography>

            <Divider />
          </Grid>
          <Grid container m={1} >
            <Grid item ml={5} md={4} lg={4}>
              <Yearbutton handleChange={handleLaunch} year={"True"} />
            </Grid>
            <Grid item ml={5} md={4} lg={4}>
              <Yearbutton handleChange={handleLaunch} year={"False"} />
            </Grid>
          </Grid>
          <Grid item>
            <Typography ml={10} variant='body1'>Successful Landing</Typography>

            <Divider />
          </Grid>
          <Grid container m={1}>
            <Grid item ml={5} md={4} lg={4}>
              <Yearbutton handleChange={handleland} year={"True"} />
            </Grid>
            <Grid item ml={5} md={4} lg={4}>
              <Yearbutton handleChange={handleland} year={"False"} />
            </Grid>
          </Grid>

        </Grid>
        <Grid container lg={8} md={8} justifyContent="center" sx={{ borderRadius: 3, backgroundColor: "lightpink", marginTop: 0 }}>
        <Grid margin={3} container justifyContent="center" >
         <PaginationComp page={page} 
         handlePagination={handlePagination} 
         mainRes={mainRes}/>
         </Grid>
          {/* {useMemo(() => (mainRes.length > 0 ? mainRes.map((item, i) => {
            return (
              <Grid sx={{ margin: 1 }} spacing={2} lg={3} md={3}>
                <SpaceCard key={i} mi_name={item.rocket.rocket_name} card_image={item.links.mission_patch} mid={item.mission_id} launch_year={item.launch_year} succ_launch={item.launch_success} />
              </Grid>
            )
          }) : <Typography variant='h4'>No Data</Typography>), [mainRes])
          } */}
           
        </Grid>

      </Grid>

    </Box >
  )
}

export default Mainpage