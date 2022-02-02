import React from 'react';
import LoginContainer from './LoginContainer'
import styled from 'styled-components'
function LoginView() 
{
    const {error,userName,password,handlePassword,handleUserName,handleSubmit}=LoginContainer()

  return (
      <LogInContainer>
          <FormLogIn onSubmit={(e)=>handleSubmit(e)}>
            {error.trim() && <Error>{error}</Error>}
            <Input type='text' placeholder='Username' value={userName} onChange={(e)=>handleUserName(e)}/>
            <Input type='password' placeholder='Password' value={password} onChange={(e)=>handlePassword(e.target.value)}/>
            <Button type='submit'>
                LogIn
            </Button>
          </FormLogIn>
      </LogInContainer>
  );
}


const LogInContainer=styled.section`
    height :calc(100vh - 90px);
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
`
const FormLogIn = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:2rem;
    flex-direction:column;
    background-color:rgb(204, 169, 238);
    border-radius:10px;
    box-shadow:0px 0px 10px rgba(0,0,0,.2);
    @media only screen and (max-width:500px)
    {
        padding:1.3rem;
    }
`
const Input = styled.input`
    width:400px;
    height:50px;
    border:none;
    border-bottom:1px solid rgb(85, 26, 139);
    background-color:transparent;
    color:rgb(114 55 169);
    margin-bottom:1.5rem;
    outline:none;
    &:focus
    {
        outline:none;
    }
    ::placeholder
    {
        color:rgb(114 55 169);
        text-transform:capitalize;
    }
    @media only screen and (max-width:500px)
    {
        width:250px;
    }
`
const Error = styled.p`
width:100%;
text-transform:capitalize;
padding:1rem;
background-color: rgb(85 26 139);
color: rgb(237 213 236);
font:500 .8rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
border-radius:5px;
letter-spacing:.04rem;
margin-bottom:1rem
`
const Button= styled.button`
background-color: rgb(85 26 139);
color: rgb(237 213 236);
font:500 .9rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
border-radius:5px;
text-transform:capitalize;
padding:.5rem 3rem;
`
export default LoginView;
