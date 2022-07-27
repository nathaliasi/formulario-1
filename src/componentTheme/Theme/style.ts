import styled from "styled-components";

export const Container = styled.div`
@media(min-width: 1000px) and (max-width: 1030px) {
  .powred{
   display: flex;
   position: relative;
   left: -50px;
  }
  
  .topoWpp{
    position: fixed;
    min-height: 150px;
    bottom: 60px;
    right: 50px;
  }
}

@media(min-width: 800px) and (max-width: 930px) {
  *{
    max-width: 1000px;
    max-height: auto;
  
  }
}

@media(min-width: 700px){
  min-width: 100%;
  .bola{
    display: flex;
    background: #c4c4c4;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  .topo{
    align-item: center;
    margin-left: 10px;
    margin-top: 13px;
  }

  .topoWpp{
    position: fixed;
    right: 20px;
    height: 60px;
    bottom: 60px;

  }
}
@media(max-width: 500px){
  .bola{
    display: flex;
    background: #c4c4c4;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  .topo{
    align-item: center;
    margin-left: 10px;
    margin-top: 13px;
  }

  .topoWpp{
    position: fixed;
    right: 10px;
    height: 300px;
    bottom: 60px;
  }
}
@media(max-width: 300px){
  .topoWpp{
    position: fixed;
    left: 230px;
    height: 300px;
    bottom: 60px;
  }
      
}
`;

export const Area = styled.div`
@media(min-width: 800px){
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}
`;

export const Steps = styled.div`
@media(min-width: 800px){
flex: 1;
display: flex;
background: #FFFFFF;
}
`;

export const Inst = styled.div`

@media(min-width: 800px){
  .institucional{
    display: flex;
   
  }
  .h2-inst{
    font-weight: 100;
    text-transsform: uppercase;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    margin-bottom: 0px;
  }
   .home{
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 20px;
    margin-left: 50px;
   }

   .txt-inst{
    margin-top: 6px;
    font-weight: 20;
    font-size: 0.7em;
    color: #C4C4C4;
    font-family: roboto;
   }

   .casinha{
    margin-top: 4px;
   }
  }

  @media(max-width: 500px){

    .home{
      display: flex;
      flex-direction: row;
      gap: 10px;
      margin-top: 20px;
      margin-left: 10px;
     }
     .txt-inst{
      margin-top: 6px;
      font-weight: 20;
      font-size: 0.7em;
      color: #C4C4C4;
      font-family: roboto;
     }

     h2{
      margin-left: 5px;
     }
  }

`;

export const Sidebar = styled.div`
@media(min-width: 800px){
  width: 250px;
  margin-left: 40px;
}
`;



export const Page = styled.div`

@media(min-width: 1000px) and (max-width: 1030px) {
  p{
    margin-right: 20px;
  }

}
@media(min-width: 800px){
  flex: 1;
  padding-left: 20px;
  width: 100%;
  max-width: 70%;
  //background: #D2691E;
}

@media(max-width: 500px){
  h1,
  {
    margin-left: 5px;
  }

  p{
    margin-left: 5px;
  }
}

`;

export const Section =  styled.div`
@media(min-width: 1000px) and (max-width: 1030px) {
  .inputlabel{
   position: relative;
    right: 130px;
    
   }
}
@media(min-width: 800px){
  .plus >img{
    display: none;
  }
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px
  width:100%;
  height: 130px;
  border-top: 1px solid #C4C4C4;
  border-bottom: 1px solid #C4C4C4;
   .inputlabel{
    margin-left: 500px;        
   }

   .input{
    padding: 8px;
    width: 300px;
   }

   button{
    padding: 10px;
    width: 100px;
    margin-left: 5px;
    background: #00C8FF;
    border: none;
    border-radius: 3px;
    color: #FFF;
    cursor: pointer;
   }

   .input,
   button{
    margin-bottom: 30px;
   } 
  }
  @media(max-width: 500px){
    display: flex;
    margin-top: 100px;
    margin-bottom: 100px;
    width:100%;
    height: 180px;
    border-top: 1px solid #C4C4C4;
    border-bottom: 1px solid #C4C4C4;

    .inputlabel{
      display: flex;
      flex-direction: column;
     }

     .label{
      margin-left: 15px;
     }
  
     .input{
      padding: 10px;
      width: 300px;
      margin-left: 15px;
      border: 1px solid #c4c4c4;
      border-radius: 3px;
     }
  
     button{
      max-content: content;
      max-width: 100%;
      padding: 10px;
      margin-left: 15px;
      margin-top: -15px;
      background: #00C8FF;
      border: none;
      border-radius: 3px;
      color: #FFF;
      cursor: pointer;
     }
  
     .input,
     button{
      margin-bottom: 30px;
     } 
  }
  @media(max-width: 300px){
    .inputlabel,
    .label,
    .input{
      width: 100%;
    }

    .footer1-mobile{
      margin-left: 10px;
    }
      
  }
`;

export const Footer1 =  styled.div`

@media(min-width: 800px){  

  .footer1-mobile,
  .footer1-redes2{
    display: none;
  }
   .footer1{
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
     
   }
    li{
      list-style: none;
      margin-bottom: 4px;
      margin-top: 4px;
    }

    a{
      text-decoration: none;
      color: #000;
    }

    .footer1-redes{
      margin-top: 30px;   
    }
  }

  @media(max-width: 500px){

    ul,
    .footer1-redes{
      display: none;
    }

    .footer1-mobile{
      display: flex;
      flex-direction: column;
      position: relative;
      top: -100px;    
    }

    .dropDown2,
    .dropDown3,
    .dropDown4{
      display: flex;     
      margin-top: 0px;     
    }

    #check2,
    #check3,
    #check4{
      display: none;
    }

    #icone2,
    #icone3,
    #icone3{
      cursor: pointer;
      padding: 10px;
    }

    .barra2,
    .barra3,
    .barra4{
      padding-bottom: 10px;
      
    }
      
      .nav2,
      .nav3,
      .nav4{
        width: 100%;
        position: relative;
        top: 30px;
        background-color: #FFF;
        padding-left: -20px;
        padding-right: auto;
        border: 1px solid #c4c4c4;
        border-radius: 2px; 
      }

      

    .link p, a{
      text-decoration: none;
      color: #000;
      text-align: center;
    }         

        #check2:not(checked) ~ .barra2,
        #check3:not(checked) ~ .barra3,
        #check4:not(checked) ~ .barra4{
          visibility: hidden;
          position: relative;          
        }
      
        #check2:checked ~ .barra2,
        #check3:checked ~ .barra3,
        #check4:checked ~ .barra4{
          visibility: visible;         
        }

        .footer1-redes2{
          display: flex;
          margin-top: -200px;
          margin-bottom: 20px;

        }


  }
`

export const Footer2 =  styled.div`
@media(min-width: 1000px) and (max-width: 1030px) {
  .footer1-redes2{
    display: none;
  }
  .div-txt{
    display: flex;
    
  }

  .powred{
    position:relative;
    left: 60px;
  }

  .txt{
    position: absolute;
    margin-left: 20px;
    width: 20%;
    color: #FFF;
    
  }

  .pagamentos{
    display: flex;
    position: relative;
    gap: 10px;
    right: -250px;
  }
  
}
@media(min-width: 800px){
    .footer-redes2{
      display: none;
    }

    .footer2-mobile{
      display: none;
    }
    .footer2{
      background: #585858;
      display: flex;
      flex-direction: column;
      
    }

    .div-txt{
      display: flex;
      margin: 0 auto;
      width: 100%;
    }

    .txt{
      margin-left: 20px;
      max-width: 30%;
      color: #FFF;
      font-size: .9em;
    }

    .pagamentos{
      display: flex;
      margin: 0;
      gap: 10px;
      margin-top: 20px;
    }

    .powred{
      margin-left: 300px;
      margin-top: 30px;
    }
  }
  @media(max-width: 500px){

    .footer2{
      display: none;
    }
    .footer2-mobile{
      display: flex;
      flex-direction: column;
      width: 100%;
      background: #585858;
      display: flex;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 100px;
    }

    

    .txt2{
      font-size: 0.9em;
     color: #FFF;
    }

    .pagamentos2{
      width: 100%;
      display: flex;
      gap: 10px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
    }

    .powred2{
     margin-bottom: 10px;
    }
    @media(max-width: 300px){

      .pagamentos2{
        display: flex;
        margin-left: ;
        margin-right: 30px;
      }
    }
  }
`
