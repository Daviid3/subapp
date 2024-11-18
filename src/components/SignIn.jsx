import { Container, styled, Paper, Typography,Box, TextField, Button,ListItem,List, Checkbox, Icon, IconButton } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './NavBar'
import { Link,useNavigate } from 'react-router-dom'


const StyledPaper = styled(Paper)(({theme})=>({
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    
    })) 



function SignIn() {
    const [Post, setPost] = useState({
    Email:"",
    Password:"",
})
const navigate = useNavigate();
console.log(Post)

const handleinput = (event) => {
    setPost({...Post, [event.target.name]: event.target.value})
   
}

const handlesubmit = async (event) => {
    try {
        event.preventDefault();
        alert('Submitted');

        const userData = {
        identifier: Post.Email,
        password: Post.Password,
        };

        localStorage.setItem('Access', userData)
        localStorage.setItem('refresh', userData)

        console.log('Sending user data:', localStorage);

        const response = await axios.post('https://zafrino-5e5b8bdb623d.herokuapp.com/api/auth/local', userData);

        console.log('Registration successful', response.data);
        alert('Registration successful!');
        sessionStorage.setItem("userEmail", Post.Email);
        navigate('/Subscriptions');
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            console.error('Error during registration:', error.response.data.error);
            alert(`Error: ${error.response.data.error.message || 'Registration failed due to validation.'}`);
        } else {
            console.error('Error during registration:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    }
};


  return (
    
    <Container maxWidth="sm"><Navbar/>
    <Box sx={{marginTop:"100px", color:"black"}} >
    <Typography>Sign in to your account</Typography>
    <Typography>Manage all your subscriptions in one place</Typography>
    </Box>
    <StyledPaper sx={{marginTop:"30px", backgroundColor:"white"}} elevation={4}>
        <form onSubmit={handlesubmit}>
        <Box sx={{textAlign:"start"}}>

    

    <Typography variant='h4' gutterBottom sx={{fontSize:"1rem"}}>Email</Typography>
    <Box sx={{display: "flex", gap: 1,mb: 3}}>
    <TextField onChange={handleinput} name='Email' sx={{}} fullWidth placeholder='Enter your email' />
    {/* <Button variant='contained'>add</Button> */}
    </Box>
    <Box sx={{display:"flex", justifyContent:"space-between"}}>
    <Typography variant='h4'  sx={{fontSize:"1rem"}}>Password</Typography>
    <Typography>Forgot password?</Typography></Box>
    <Box sx={{display: "flex", gap: 1,mb: 1}}>
    <TextField  onChange={handleinput} name='Password' fullWidth placeholder='Enter your password' />
    {/* <Button variant='contained'>add</Button> */}
    </Box>
    <Box sx={{display:"flex"}}>
    <Checkbox sx={{display: "flex", gap: 0,mb: 2, paddingBlock:"0px", paddingInline:"0px", marginBottom:"30px",marginRight:"10px"}}/>
    <Typography sx={{display: "flex", gap: 1,mb: 4}}variant='h8'>Remember me</Typography>
   </Box> 
   </Box>
   <Box> <Button type='submit' variant='contained' sx={{backgroundColor:"#13E611", color:"black", fontWeight:"bold"}}> Sign In </Button> </Box>
   </form>
   <Typography sx={{ gap: 1,mt: 3}} variant='h6' gutterBottom>Don't have an account? <Link to={"/Subscriptions"}>Sign up</Link> </Typography>
   </StyledPaper>
   
    
    </Container>

  )
}


export default SignIn