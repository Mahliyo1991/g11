import styled from "styled-components";

const Container=styled.div`
width: 100%;
height: 100px;
background-color: azure;
`
const Wrap=styled.div`
width: 100%;
height: 56px;
background-color: #212121;
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`
const InputWrap=styled.div`

`
InputWrap.Input=styled.input`
background-color: #000000;
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 2px 0px 0px 2px;
color:  rgba(255, 255, 255, 0.2);
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: none;
outline: none;

`

export {Container, Wrap, InputWrap};