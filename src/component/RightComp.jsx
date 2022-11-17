import React from 'react'
import {Grid,Table,TableBody,TableCell,TableRow,Typography,Button} from "@mui/material"

function RightComp() {
  return (
    <Grid item m={0} p={0} md={12}>
    <Table>
      <TableBody>
        <TableRow sx={{minHeight: "300px",border: "1px solid #bababa",borderRadius: "20px",borderLeft: "1px solid #bababa",height: "150px"}}>
          <TableCell sx={{maxWidth: "50px",pb: 2,verticalAlign: "top",borderRight: "1px solid #bababa"}}>
            <Typography variant="h6" noWrap sx={{ fontWeight: "900", color: "#383838" }}>
              Nov. 12
            </Typography>
          </TableCell>
          <TableCell sx={{maxWidth: "135px",pb: 2,verticalAlign: "top",borderRight: "1px solid #bababa",}}>
            <Typography variant="h6" sx={{ color: "#383838" }}>
              08:00 am - 05:00 pm
            </Typography>
          </TableCell>
          <TableCell sx={{maxWidth: "215px",pb: 2,borderRight: "1px solid #bababa"}}>
            <Typography variant="h6" sx={{ textDecoration: "justify", color: "#383838" }}>
              410 S. Pecan Pearsall, TX 78061
            </Typography>
          </TableCell>
          <TableCell sx={{maxWidth: "90px",textAlign: "left",pb: 2,borderRight: "1px solid #bababa",}}>
            <Typography variant="h4" sx={{ fontWeight: "700", color: "#84b333" }}>
              Open
            </Typography>
            <Typography variant="h6" sx={{ color: "#383838" }}>
              12 seats available
            </Typography>
          </TableCell>
          <TableCell sx={{maxWidth: "300px",display: "flex",alignItem: "center",justifyContent: "center",flexDirection: "column",pb: 2,border: "none",}}>
            <Button variant="contained" sx={{bgcolor: "#84b333",m: 0,px: 1,fontSize: "1.15rem","&:hover ": {bgcolor: "#84b333",},textTransform: "none",}}>
              Learn more
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table sx={{ mt: 3}}>
      <TableBody>
        <TableRow
          sx={{minHeight: "300px",border: "1px solid #bababa",borderRadius: "20px",borderLeft: "1px solid #bababa",height: "150px"}}>
          <TableCell
            sx={{maxWidth: "50px",pb: 2,verticalAlign: "top",borderRight: "1px solid #bababa",}}>
            <Typography variant="h6" noWrap sx={{ fontWeight: "900", color: "#383838" }}>
              Nov. 12
            </Typography>
          </TableCell>
          <TableCell sx={{maxWidth: "135px",pb: 2,verticalAlign: "top",borderRight: "1px solid #bababa"}}>
            <Typography variant="h6" sx={{ color: "#383838" }}>
              08:00 am - 04:30 pm
            </Typography>
          </TableCell>
          <TableCell sx={{maxWidth: "215px",pb: 2,borderRight: "1px solid #bababa"}}>
            <Typography variant="h6" sx={{ textDecoration: "justify", color: "#383838" }}>
                Seabrook Volunteer Fire Department 1850 E. Meyer Ave.Seabrook , TX 77586
            </Typography>
          </TableCell>
          <TableCell sx={{maxWidth: "90px",textAlign: "left",pb: 2,borderRight: "1px solid #bababa"}}>
            <Typography variant="h4"sx={{ fontWeight: "700", color: "#84b333" }}> Open
            </Typography>
            <Typography variant="h6" sx={{ color: "#383838" }}>
              5 seats available
            </Typography>
          </TableCell>
          <TableCell sx={{maxWidth: "300px",display: "flex",alignItem: "center",justifyContent: "center",flexDirection: "column",pb: 2,border: "none"}}>
            <Button variant="contained" sx={{bgcolor: "#84b333",m: 0,px: 1,fontSize: "1.15rem","&:hover ": {bgcolor: "#84b333",},textTransform: "none"}}>
              Learn more
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table sx={{ mt: 3, border: "1px solid #bababa" }}>
      <TableBody>
        <TableRow sx={{minHeight: "300px",borderRadius: "20px",borderLeft: "1px solid #bababa",height: "150px",}}>
          <TableCell sx={{maxWidth: "50px",pb: 2,verticalAlign: "top",borderRight: "1px solid #bababa",}}>
            <Typography variant="h6" noWrap sx={{ fontWeight: "900", color: "#383838" }}>
              Nov. 12
            </Typography>
          </TableCell>
          <TableCell sx={{maxWidth: "135px",pb: 2,verticalAlign: "top",borderRight: "1px solid #bababa"}}>
            <Typography variant="h6" sx={{ color: "#383838" }}>
              08:00 am - 05:00 pm
            </Typography>
          </TableCell>
          <TableCell sx={{maxWidth: "215px",pb: 2,borderRight: "1px solid #bababa",}}>
            <Typography variant="h6" sx={{ textDecoration: "justify", color: "#383838" }}>
              Casa Mare Girl Scout Camp Casa Mare, TX 77862
            </Typography>
          </TableCell>
          <TableCell sx={{maxWidth: "90px",textAlign: "left",pb: 2,borderRight: "1px solid #bababa",}}>
            <Typography variant="h4" sx={{ fontWeight: "700", color: "#84b333" }}>
              Open
            </Typography>
            <Typography variant="h6" sx={{ color: "#383838" }}>
              10 seats available
            </Typography>
          </TableCell>
          <TableCell sx={{maxWidth: "300px",display: "flex",alignItem: "center",justifyContent: "center",flexDirection: "column",pb: 2,border: "none",}}>
            <Button variant="contained" sx={{bgcolor: "#84b333",m: 0,px: 1,fontSize: "1.15rem","&:hover ": {bgcolor: "#84b333",},textTransform: "none",}}>
              Learn more
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Grid>
  )
}

export default RightComp
