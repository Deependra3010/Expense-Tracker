import React from 'react';
import styled from 'styled-components';
import loginMen from '../images/loginMen.png';
import { Link } from 'react-router-dom';
import { colors } from '../utils/themes';

const LoginImage = styled.div`
    width: 100%;
    background-color: ${colors.lightGreen};
    display: flex;
    justify-content: center;
    padding-top: 20px;

    @media screen and (max-width: 480px) {
        height: 400px;
    }
`;
const LoginText = styled.div`
    color: ${colors.green};
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin-top: 30px;
    width: 100%;
`;
const LoginBtn = styled.button`
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    width: 300px;
    cursor: pointer;
    padding: 10px 0px;
    border-radius: 40px;
    background: linear-gradient(180deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%);
    box-shadow: 2px 4px 8px ${colors.gradientStart};
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
`;
const SignUpText = styled.p`
    text-align: center;
`;
const LinkText = styled(Link)`
    color: ${colors.green};
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
            <LoginBtn>Login</LoginBtn>
            <SignUpText>
                Don't have an account? <LinkText to="/signUp">Sign Up</LinkText>
            </SignUpText>
        </>
    );
};

export default Login;
