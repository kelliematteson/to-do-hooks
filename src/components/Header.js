import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 3em;
    text-align: center;
    color: palevioletred;
`;

function Header() {
    return (
        <Title>To Do List</Title>
    )
}

export default Header
