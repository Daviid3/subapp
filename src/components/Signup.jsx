import { Container, styled, Paper, Typography,Box, TextField, Button} from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './NavBar'

const StyledPaper = styled(Paper)(({theme})=>({
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    
    })) 


const initialstate = {
          FirstName:"",
          LastName:"",
          Email:"",
          Password:"",
        }


function Signup() {
    const [Post, setPost] = useState(initialstate)
console.log(Post)

const handleinput = (event) => {
    setPost({...Post, [event.target.name]: event.target.value})
}

const handlesubmit = async (event) => {
    try {
        event.preventDefault();
        alert('Submitted');

        const userData = {
            firstname: Post.FirstName,
            lastname: Post.LastName,   
            username: `${Post.FirstName}${Post.LastName}`,
            email: Post.Email,
            password: Post.Password,
        };

        console.log('Sending user data:', userData);

        const response = await axios.post('https://zafrino-5e5b8bdb623d.herokuapp.com/api/auth/local/register', userData);

        console.log('Registration successful', response.data);
        alert('Registration successful!');
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
    <StyledPaper sx={{marginTop:"100px", backgroundColor:"white"}} elevation={4}>
        <form onSubmit={handlesubmit}>
        <Box sx={{textAlign:"start"}}>
    <Typography variant='h6' gutterBottom sx={{fontSize:"1rem"}}>First Name</Typography>
    <Box sx={{display: "flex", gap: 1,mb: 3}}>
    <TextField onChange={handleinput} name='FirstName' fullWidth placeholder='Enter your first name' />
    {/* <Button variant='contained'>add</Button> */}
    </Box>
    <Typography variant='h4' gutterBottom sx={{fontSize:"1rem"}}>Last Name</Typography>
    <Box sx={{display: "flex", gap: 1,mb: 3}}>
    <TextField onChange={handleinput} name='LastName' fullWidth placeholder='Enter your last name' />
    {/* <Button variant='contained'>add</Button> */}
    </Box>
    <Typography variant='h4' gutterBottom sx={{fontSize:"1rem"}}>Email</Typography>
    <Box sx={{display: "flex", gap: 1,mb: 3}}>
    <TextField onChange={handleinput} name='Email' sx={{}} fullWidth placeholder='Enter your email' />
    {/* <Button variant='contained'>add</Button> */}
    </Box>
    <Typography variant='h4'  sx={{fontSize:"1rem"}}>Password</Typography>
    <Box sx={{display: "flex", gap: 1,mb: 1}}>
    <TextField  onChange={handleinput} name='Password' fullWidth placeholder='Create a password' />
    {/* <Button variant='contained'>add</Button> */}
    </Box>
    <Typography sx={{display: "flex", gap: 1,mb: 4}}variant='h8'>Password must be at least 8 characters</Typography>
    </Box>
   <Box> <Button type='submit' variant='contained' sx={{backgroundColor:"#13E611", color:"black", fontWeight:"bold"}}>Create Account</Button> </Box>
   <Typography sx={{ gap: 1,mt: 3}} variant='h6' gutterBottom>Already have an account? Sign In</Typography>
   </form>
   </StyledPaper>
   
    
    </Container>

  )
}


export default Signup