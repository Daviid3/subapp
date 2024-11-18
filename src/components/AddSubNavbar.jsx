import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Link } from 'react-router-dom';
const pages = ['About Us', 'Sign In'];
const settings = ['Profile'];

function Navbar2() {


  return (
    <AppBar position="fixed" color='blue' sx={{backgroundColor:"#F8FCF9",  }}>
        <Toolbar>
      <Container maxWidth="10000">
        <Toolbar disableGutters>
          <SendOutlinedIcon sx={{ display: { xl: 'none', md: 'flex' }, mr: 1, color:"#091609" }} />
          <Typography
          >
        <Link to={"/"} ><Typography color='black'>Acme Subscription Manager</Typography></Link>   
          </Typography>

         
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
          </Box>
          
           
          

       <Box sx={{display: 'flex' }}>
        <Link to={"/"} ><Typography sx={{ my: 2, color: '#091609', display: 'block', paddingRight:"10px" }}>About Us</Typography></Link>   
         
          
          
        <Link to={"/SignIn"} ><Typography sx={{ my: 2, color: '#091609', display: 'block', paddingRight:"10px" }}>SignIn</Typography></Link>   
          </Box>
          
          

            <Tooltip >
              <Button sx={{color:"black", backgroundColor:"#13E611", borderRadius:"10px", marginTop:"10px", marginBottom:"10px", fontWeight:"bold"}} variant='contained'><Link to={"/Signup"}>Start Free</Link> </Button>
            </Tooltip>
           
          
        </Toolbar>
      </Container>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar2;
