import React from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import RightComp from "./RightComp";

function MainComp() {


  return (
    <>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          color: "white",
          textAlign: "center",
          fontFamily: "arial",
          bgcolor: "black",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "4px",
          pt: 2,
          pb: 0.5,
        }}
      >
        Texas Parks & Wildlife
      </Typography>
      <Grid container spacing={1}>
        <Grid container item md={12} mt={2} mx={30}>
          <Grid container md={12} justifyContent="flex-end" columnGap={1} mb="0">
            <Button variant="text" sx={{ color: "grey", borderRadius: "0" }}>
              <Typography variant="h6"
                sx={{ color: "black", fontWeight: "normal" }}>
                Help
              </Typography>
            </Button>
            <Button variant="contained"
              sx={{bgcolor: "#e7e7e7","&:hover": {backgroundColor: "#e7e7e7",},borderRadius: "0",boxShadow: "none",}}>
              <Typography sx={{fontSize: "1.2rem",fontWeight: "500",color: "#5f5f5f",textTransform: "none",}}>
                Login
              </Typography>
            </Button>
          </Grid>
          <Grid container md={12} rowGap={2} mb={5}>
            <Grid item md={12}>
              <Typography variant="h4" sx={{ fontWeight: "900" }}>
                Education Registration System
              </Typography>
            </Grid>
            <Grid item md={12}>
              <TextField id="outlined-basic" value="Education Reg System Home" variant="outlined" inputProps={{ style: { fontWeight: 800, fontSize: "1.2rem" } }} sx={{ width: "300px", bgcolor: "#f2f2f2", borderRadius: 0, color: "black", mr: 1}}
              />
              <Button
                variant="contained"
                color="success"
                size="large"
                sx={{textTransform: "none",fontSize: "1.1rem",borderRadius: 0,bgcolor: "#23b33b",py: 1.8,"&:hover": { bgcolor: "#23b33b" },}}>
                Am I Certified?
              </Button>
            </Grid>
          </Grid>
          <Grid container md={12}>
            <Grid item md={12} ml={1}>
              <Typography variant="h3" sx={{color: "#5c5c5c",fontWeight: "600",wordSpacing: "5px",letterSpacing: "2px", }}
              >
                Hunter Education Classroom Course
              </Typography>
              <Typography
                variant="h4"
                sx={{color: "#5c5c5c",mt: 4,fontWeight: "600",wordSpacing: "5px",letterSpacing: "2px",
                }}>
                Showing classes near Austin, TX 78701, USA
              </Typography>
              <Button variant="text" sx={{my: 1,fontWeight: "600",fontSize: "1.2rem",mx: 0,textTransform: "none",px: 0 }}>
                Change Location
              </Button>
            </Grid>
          </Grid>
          <Grid container mt={2} spacing={0}>
            <Grid item xs={2.5}>
              <Typography
                variant="h6"
                sx={{color: "#5c5c5c",fontWeight: "900",letterSpacing: "1px",wordSpacing: "1px"}}>
                Show classes within:
              </Typography>
              <Button 
                variant="contained"
                sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",minWidth:"175px",bgcolor: "#ffffff",border:"2px solid black",borderRadius:"8px",py:0,my:0,color:"black",margin: 0,px: 1,fontSize: "1.15rem","&:hover ": {bgcolor: "#ffffff",color:"black"},textTransform: "none",}}>
                <Typography variant="h6">200 miles</Typography>
                <ImportExportIcon />
              </Button>
              <Typography
                variant="h6"
                sx={{color: "#5c5c5c",fontWeight: "900",letterSpacing: "1px",wordSpacing: "1px",mt: 2}}>
                Month:
              </Typography>
              <Button
                variant="contained"
                sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",bgcolor: "#ffffff",color:"black",minWidth:"150px",border:"2px solid black",borderRadius:"8px",my: 0,px: 1,py:0,fontSize: "1.15rem",
                  "&:hover ": {bgcolor: "#ffffff",color:"black"},textTransform: "none"}}>
                <Typography variant="h6">
                Any
                </Typography>
                <ImportExportIcon />

              </Button>
              <Typography
                variant="h6"
                sx={{color: "#5c5c5c",fontWeight: "900",letterSpacing: "1px",wordSpacing: "1px",mt: 2,}}>
                Show only:
              </Typography>
              <FormGroup sx={{ maxWidth: "200px" }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Typography
                      variant="h6"
                      sx={{ wordWrap: "wrap", width: "80%" }}
                    >
                      Classes for the hearing impaired
                    </Typography>
                  }
                  sx={{ py: 1,alignItems:"flex-start" }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Typography
                      variant="h6"
                      sx={{ wordWrap: "wrap", width: "80%" }}
                    >
                      Instructors bilingues(espanol -ingles)
                    </Typography>
                  }
                  sx={{ py: 1 ,alignItems:"flex-start"}}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Typography
                      variant="h6"
                      sx={{ wordWrap: "wrap", width: "70%" }}
                    >
                      Open classes
                    </Typography>
                  }
                  sx={{ py: 1,alignItems:"flex-start" }}
                />
              </FormGroup>
            </Grid>
            <Grid item md={9.5}>
             <RightComp />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MainComp;
