import { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);`

const Image = styled(`img`)({
    width: 150,
    margin: `auto`,
    display: `flex`,
    padding: `35px 0 0`
});

const Img = styled(`img`)({
    width: 100,
    margin: `auto`,
    display: `flex`,
});

const Wrapper = styled(Box)`
    padding: 20px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 10px;
    }`

const LoginButton = styled(Button)`
    text-transform: none;
    background: #ff0000;
    color: #000000;
    height: 50px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);`

const SignupButton = styled(Button)`
    text-transform: none;
    background: #FFFF00;
    color: #000000;
    height: 50px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);`

const Text = styled(Typography)`
    color: #808080;
    font-size: 12px;`

const Login = () => {

    const imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRE92NW3f-Dja_3IggL2rr72vlCPUcGmiNA&usqp=CAU'
    const imgURL = 'https://i.postimg.cc/RVK1WmgL/Brick-Hub-1.png';

    const [account, toggleAccount] = useState('login');

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
        <Component>
            <Box>
                <Image src={imageURL} alt='login' /> <Img src={imgURL} alt='login' />
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant='standard' label='Enter Username' />
                            <TextField variant='standard' label='Enter Password' />
                            <LoginButton variante='contained'>Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()}>Create an account</SignupButton>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant='standard' label='Enter Name' />
                            <TextField variant='standard' label='Enter Username' />
                            <TextField variant='standard' label='Enter Password' />

                            <SignupButton>Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant='contained' onClick={() => toggleSignup()}>Already have an account</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login;