import styled from "styled-components";

const Box = styled.div`
display: block;
height: 100%;
margin: 0 auto;
padding: 9.9px 32px;
max-width: 1200px;
color: #616568;
font-weight: 400;
font-size: 14px;
`;

export default function Container(props){
  return(
    <Box> {props.name} </Box>
  );
}