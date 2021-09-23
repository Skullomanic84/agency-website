import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (
        <Container>
            <Wrap>
                <Left>
                    <Logo>
                        THEAgency
                    </Logo>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </Menu>
                </Left>
                <Button>
                    JOIN NOW
                </Button>
            </Wrap>
        </Container>
    )
}

export default Navbar

const Container = styled.div `
    height: 50px;
`
const Wrap = styled.div `
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div `
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h1 `
    text-decoration: underline #8c7851;
    color: #020826;
    font-weight: 900;
`
const Menu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;   
`
const MenuItem = styled.li `
    cursor: pointer;
    margin-right: 30px;
    font-size: 18px;
    color: #020826;
    font-weight: 600;
`
const Button = styled.button `
cursor: pointer;
    border: 1px solid #020826;
    padding: 10px 17px;
    background-color: transparent;
    color: #020826;
    font-weight: 700;
    font-family: 'Playfair Display', serif;
    transition: all 400ms;


    &:hover {
        background-color: #fffffe;
    }
`