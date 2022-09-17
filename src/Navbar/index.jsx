import React from 'react'
import { Container, InputWrap, Wrap} from './style'

export default function Navbar() {
    return(
        <Container>
            <Wrap>
                <InputWrap>
                <InputWrap.Input type='text' placeholder='name'/>
                </InputWrap>
            </Wrap>
            <Wrap>2</Wrap>
        </Container>
    )
}
