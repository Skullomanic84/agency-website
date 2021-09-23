import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (
        <Container>
            <Wrap>
                <span>
                    logo
                </span>
                <Button>

                </Button>
            </Wrap>
        </Container>
    )
}

export default Navbar

const Container = styled.div `
    height: 60px;
    background: #000;
`
const Wrap = styled.div `
    padding: 10px 20px;
`
const Button = styled.button ``