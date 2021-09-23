import React from 'react'
import "animate.css"
import styled from 'styled-components'
import cyberpunk from '../images/cyberpunk.png'

function Header() {
    return (
        <Container>
            <LeftCol>
                <Title>
                    Adventures in creative age
                </Title>
                <SubTitle>
                    We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.
                </SubTitle>
                <CTA>
                    <ButtonLeft>
                        CONTACT US
                    </ButtonLeft>
                    <ButtonRight>
                        LEARN MORE
                    </ButtonRight>

                </CTA>
            </LeftCol>
            <RightCol>
                <Image src={cyberpunk} />
            </RightCol>
        </Container>
    )
}

export default Header

const Container = styled.div `
    height: calc(95.6vh - 50px);
    display: flex;
    padding: 0 20px;
`
const LeftCol = styled.div `
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    animation: slideInLeft;
    animation-duration: 2s; 
`

const RightCol = styled.div `
    width: 40%;   
`
const Title = styled.h1 `
    width: 60%;
    font-size: 65px;
`   
const SubTitle = styled.p `
    font-size: 20px;
    width: 60%;
    margin-top: 20px;
    line-height: 1.6;
`
const CTA = styled.div `
    width: 60%;
    display: flex;
    margin-top: 20px;
`
const ButtonLeft = styled.button `
    cursor: pointer;
    border: 1px solid #020826;
    padding: 10px 17px;
    background-color: #8c7851;
    color: #020826;
    font-weight: 700;
    font-family: 'Playfair Display', serif;
    margin-right: 20px;
    transition: 400ms ease-out;

    &:hover {
        color: #f9f4ef;
    }
`

const ButtonRight = styled(ButtonLeft)`
    background: transparent;
    border: 1px solid #8c7851;

    &:hover {
        color: #8c7851;
    }
`
const Image = styled.img `
    width: 100%;
    height; 100%;
    object-fit: contain;
`