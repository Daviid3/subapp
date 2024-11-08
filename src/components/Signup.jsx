import { Container, styled, Paper, Typography,Box, TextField, Button,ListItem,List, Checkbox, Icon, IconButton } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './NavBar'

const StyledPaper = styled(Paper)(({theme})=>({
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    
    })) 


const API_BASE_URL = "https://jsonplaceholder.typicode.com/"
const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})
function Signup() {
const [Post, setPost] = useState({
    FirstName:"",
    LastName:"",
    Email:"",
    Password:""
})
console.log(Post)

const handleinput = (event) => {
    setPost({...Post, [event.target.name]: event.target.value})
    setPost({ FirstName: "", LastName: "", Email: "", Password: "" })
}

const handlesubmit= async (event) =>{
 try {
    event.preventDefault()
  alert("Submitted")

    await axios.post("https://zafrino-5e5b8bdb623d.herokuapp.com/api/auth/local/register",Post)

    console.log('Registration successful', response.data);
 } catch (error) {
    console.log(error)
    console.error('Error during registration:', error);
 }
}


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
   </form>
   <Typography sx={{ gap: 1,mt: 3}} variant='h6' gutterBottom>Already have an account? Sign In</Typography>
   </StyledPaper>
   
    
    </Container>

  )
}


export default Signup