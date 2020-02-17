import React from "react";
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import yordleImage from '../assets/YORDLE-WATCH.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${yordleImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 200px;
        position:relative;
        z-index: -2;
    }

    h1 {
        color:white;
    }
`;


export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <Container>
                <h1> Welcome on my website </h1>
                <p> On my journey to the react graal </p>
            </Container>
        </Jumbo>
    </Styles>
)