import React from 'react';
import styled from 'styled-components';
import loginMen from '../images/loginMen.png';
import { Link } from 'react-router-dom';

const LoginImage = styled.div`
    height: 65vh;
    background-color: var(--lightGreen);
    display: flex;
    justify-content: center;
    padding-top: 65px;

    @media screen and (max-width: 480px) {
        height: 400px;
    }
`;
const LoginText = styled.div`
    color: var(--green);
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin-top: 30px;
    width: 100%;
`;
const LoginBtn = styled(Link)`
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    width: 300px;
    cursor: pointer;
    padding: 10px 0px;
    border-radius: 40px;
    background: linear-gradient(180deg, var(--gradientStart) 0%, var(--gradientEnd) 100%);
    box-shadow: 2px 4px 8px var(--gradientStart);
    display: block;
    margin: 20px auto 0 auto;
`;
const SignUpText = styled.p`
    text-align: center;
`;
const LinkText = styled(Link)`
    color: var(--green);
    text-decoration: none;
`;

const Login = () => {
    return (
        <>
            <LoginImage>
                <img src={loginMen} alt="Login" />
            </LoginImage>
            <LoginText>
                Spend Smarter
                <br />
                Save More
            </LoginText>
            <LoginBtn to="/home">Login</LoginBtn>
            <SignUpText>
                Don't have an account? <LinkText to="/signUp">Sign Up</LinkText>
            </SignUpText>
        </>
    );
};

export default Login;
