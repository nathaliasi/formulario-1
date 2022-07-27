import styled from "styled-components";

export const Container = styled.div `
  a{
    text-decoration: none;
    color: #000;
    
  }

  .link{
    background: #000;
  }

  .link-active{
    color: #00C8FF;
  }
  


  
`;

export const Info = styled.div `
  flex: 1;
  border: 1px solid #C4C4C4;
  padding: 10px;
  border-left: none;
  border-top: none;
  border-bottom: none;
 

`;

export const Title = styled.div<{active:boolean;}> `





`;

