import React from "react";
import Grid from "@mui/material/Grid";
import {Paper, Avatar, TextField,Button,Typography,Checkbox, Link } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import FormControlLabel from "@mui/material/FormControlLabel";

const Login=()=> {
    const paperStyle={
        padding: "20px",
        height: "70vh",
        width: 280,
        margin: "20px auto"
      }
     const avatarStyle={
        backgroundColor: "green"
     }
     const btnstyle={
        Margin:"8px 0"
     }
     const textfield={
       margin:"10 px"


     } 


     return(
        <Grid>
             <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
            <Avatar style={avatarStyle}><LockIcon></LockIcon></Avatar>
            <h2>Sign in</h2>
            </Grid>
    <TextField label ="Username" placeholder="Enter Username" fullWidth required></TextField>
    <TextField label ="Password" placeholder="Enter Password" type="password" fullWidth required></TextField>
    
      
       <FormControlLabel 
             control={
                <Checkbox 
                name="Checked" 
                Color="primary"
                />}
            label="remember me"
                />
                <Button 
                type="Submit"
                color="Primary"
                variant="contained"
                style={btnstyle}
                fullWidth>

                </Button>

                <Typography style={textfield}>
                     <Link href="#">
                        Forgot password?
                     </Link>
                  </Typography>

                  <Typography style={textfield}>
                     <Link href="#">
                        Don't have an account? Sign up
                     </Link>
                  </Typography>

       </Paper>
       </Grid>
    )
}

export default Login;