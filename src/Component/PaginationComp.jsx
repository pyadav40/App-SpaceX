import React, { useEffect, useState } from 'react'
import { Pagination, Grid } from '@mui/material';
import CardComp from './CardComp';


const PaginationComp = ({ page, handlePagination, mainRes }) => {
  const [pagedData, setPagedData] = useState([]);
  const numOfPages = Math.ceil(mainRes.length / 6)
  useEffect(() => {
    const numofEntry = 6;
    const stPoint = (page * numofEntry) - numofEntry;
    const end = page * numofEntry;
    const newPagedData = mainRes.slice(stPoint, end);
    setPagedData(newPagedData);
  }, [page, mainRes]);
  // console.log(pagedData)
  return (
    <>
    <Grid container margin={2} justifyContent="center">
      <Pagination page={page} count={numOfPages} defaultPage={1} variant="outlined" color="primary" onChange={handlePagination}
      />
      </Grid>
      <CardComp carddata={pagedData} />
    </>

  )
}

export default PaginationComp