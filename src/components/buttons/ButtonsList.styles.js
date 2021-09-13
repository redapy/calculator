import styled from "styled-components";

export const Grid = styled.div`
width: 100%;
height: 300px;
display: grid;
grid-template-areas: 
    'clear clear clear add'
    'one two three subtract'
    'four five six multiply'
    'seven eight nine divide'
    'zero decimal equals equals';
grid-gap: 1px;

`;

export const Button = styled.button`
padding: 6px;
grid-area: ${props => props.id};
border: none;
background: ${props => (props.type ==="opertor" || props.type ==="equal") ? "#055F51": "#262626" };
color: white;
`;

