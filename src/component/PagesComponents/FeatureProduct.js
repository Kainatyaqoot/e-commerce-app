import React from "react";
import FeatureProductsCard from "./FeatureProductsCard";
// import "./FeatureProductCard.css";
import { Grid, Typography } from "@mui/material"
// import images
import coat from "../../assets/images/coat.png";
import badge from "../../assets/images/badge.png";
import purse from "../../assets/images/purse.png";
import brownSweater from "../../assets/images/brownSweater.png";
import darkBikini from "../../assets/images/darkBikini.png";
import originalJacket from "../../assets/images/originalJacket.png";

// import image2 from "../../assets/images/image2.png";

export const FeaturedProducts = () => {
  return (
    <>
      <Grid container
        alignItems="center"
        justifyContent="center"
      >
        <Grid item lg={11} sx={{ mt: 10 }} >   <Typography variant="h5" >Feature Products</Typography></Grid>
        <Grid container alignItems="center" spacing={5} sx={{ mt: 2, mr: 3 }}
          justifyContent="center" className='nude'>
          <Grid item >
            <FeatureProductsCard
              img1={coat}
              img2={badge}
              title='#1 New Release'
              name='coat'
              discount='p50.00'
              price='P40.00'
            />
          </Grid>
          <Grid item >
            <FeatureProductsCard
              img1={purse}
              title='Top Brand'
              name='coat'
              price='P40.00'
            />
          </Grid>
          <Grid item >
            <FeatureProductsCard
              img1={brownSweater}
              img2={badge}
              title='Top Brand'
              name='coat'
              discount='p50.00'
              price='P40.00'
            />
          </Grid>
          <Grid item >
            <FeatureProductsCard
              img1={darkBikini}
              title='Top Brand'
              name='coat'
              price='P40.00'
            />
          </Grid>
          <Grid item>
            <FeatureProductsCard
              img1={originalJacket}
              img2={badge}
              title='New'
              name='coat'
              discount='p50.00'
              price='P40.00'
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={5} sx={{ mt: 2, mr: 3 }}
          justifyContent="center" className='nude'>
          <Grid item >
            <FeatureProductsCard
              img1={coat}
              img2={badge}
              title='#1 New Release'
              name='coat'
              discount='p50.00'
              price='P40.00'
            />
          </Grid>
          <Grid item >
            <FeatureProductsCard
              img1={purse}
              title='Top Brand'
              name='coat'
              price='P40.00'
            />
          </Grid>
          <Grid item >
            <FeatureProductsCard
              img1={brownSweater}
              img2={badge}
              title='Top Brand'
              name='coat'
              discount='p50.00'
              price='P40.00'
            />
          </Grid>
          <Grid item >
            <FeatureProductsCard
              img1={darkBikini}
              title='Top Brand'
              name='coat'
              price='P40.00'
            />
          </Grid>
          <Grid item>
            <FeatureProductsCard
              img1={originalJacket}
              img2={badge}
              title='New'
              name='coat'
              discount='p50.00'
              price='P40.00'
            />
          </Grid>
        </Grid>

        
      </Grid>

    </>
  );
};