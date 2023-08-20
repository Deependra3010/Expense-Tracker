import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaChartLine, FaClockRotateLeft, FaHouse } from 'react-icons/fa6';

const NavItem = styled(Link)`
    text-decoration: none;
    margin-right: 30px;
    font-size: 18px;
    color: var(--grey);
    display: flex;
    align-items: center;
    &:hover {
        color: var(--iconGreen);
    }
    i {
        margin-right: 7px;
    }
    @media (max-width: 768px) {
        display: none;
        height: 100%;
        margin-top: 1em;
    }
`;
const Nav = styled.div`
    position: fixed;
    z-index: 1056;
    background-color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 0px -2px 25px rgba(0, 0, 0, 0.06);
    padding: 10px 10px;

    .navToggler {
        position: absolute;
        right: 1rem;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
        visibility: hidden;
        color: var(--grey);
        font-size: 1.5rem;

        &:hover {
            color: var(--iconGreen);
        }
    }
    &.responsiveNavbar {
        ${NavItem} {
            display: block;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        transition: 1s;
        .navToggler {
            visibility: visible;
            opacity: 1;
        }
    }
`;
const NavLogo = styled(Link)`
    font-size: 24px;
    color: var(--iconGreen);
    text-decoration: none;
    margin-right: 130px;
`;

const Navbar: React.FC = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const [showToggler, setShowToggler] = useState<Boolean>(false);
    const handleNavbar = () => {
        setShowToggler(!showToggler);
        navRef.current?.classList.toggle('responsiveNavbar');
    };
    return (
        <Nav ref={navRef}>
            <NavLogo to="/home">ExpenseTracker</NavLogo>
            <NavItem to="/home">
                <FaHouse className="me-1" />
                Home
            </NavItem>
            <NavItem to="/statistics">
                <FaChartLine className="me-1" />
                Statistics
            </NavItem>
            <NavItem to="/records">
                <FaClockRotateLeft className="me-1" />
                Records
            </NavItem>
            <button className="navToggler" onClick={handleNavbar}>
                {showToggler ? <FaTimes /> : <FaBars />}
            </button>
        </Nav>
    );
};

export default Navbar;
