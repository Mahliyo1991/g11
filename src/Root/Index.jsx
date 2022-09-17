import React from 'react';
import Sidebar from '../Sidebar/index';
import Navbar from '../Navbar/index';
import { Container } from './style';

export default function Root() {
    return(
        <Container>
       <Sidebar />
       <Navbar />
        </Container>
    )
}