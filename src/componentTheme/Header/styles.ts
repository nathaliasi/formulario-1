import styled from "styled-components";


export const Container = styled.div`
@media(min-width: 800px) and (max-width: 930px){
  width: 100%;
  
  .search{
    display: none;
  }
  input{
    display: none;
  }
  .entrarCarrinho{
    display: flex;
    gap: 10px;
    margin-right: 30px;
   
   
  }
}

@media(min-width: 800px){
  background: #00C8FF;
  width: 100%;
  height: 120px;

  .dropDown,
  .alinhaHeader{
    display: none;
  }

  .container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    margin-top: 20px;
  }

  .logo{
    margin-left: 40px;
  }

  .search{
    display: flex;
    flex-direction: row;
    background: #FFF;
    width: 100%;
    max-width: 230px;
    border-radius: 4px;
    align-items: center;
    margin-left: 150px;
   
  }

  input{
   border:  none;
   outline: 0;
   width: 100%;
   max-width: 230px;
   padding: 5px;
   border-radius: 4px ;
  }

  .buttonSearch{
    background: #FFFFFF;
    border: none;
    margin-bottom: 3px;
    border-radius: 4px;
    margin-right: 0px;
  }

  .entrar,
  .cursos,
  .saibamais
  {
    text-decoration: none;
    color: #FFF;
    font-family: roboto;
    text-transform: uppercase;
    font-size: .8em;  
  }

  .carrinho{
    margin-bottom: 10px;
    margin-right: 20px;
  }

  .entrarCarrinho{
    display: flex;
    gap: 30px;
    align-items: flex-end;
    margin-left: 450px;
  }

  .cursoSaibamais{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px;
    margin-left: 40px;
    wrap: wrap;
    margin-top: 20px;
  }
}

  @media(max-width: 500px){
    width: 100%;
    height: 130px;
    margin-top: -10px;

    background: #00C8FF;

    .cursoSaibamais{
      display: none;
    }

    .entrar{
      display: none;
    }

    .dropDown{
      display: flex;
      background: #00C8FF; 
      margin-top: 10px;
               
    }

  
    
    #check{
      display: none;
    }

    #icone{
      cursor: pointer;
      padding: 15px;
    }
      

      .barra{
        background-color: #00C8FF;
        height: ;
        width: 20px;
        position: absolute;
        transition: all .3s linear;
       
      }
      nav{
        width: 100%;
        position: relative;
        top: 30px;
        background-color: #FFF;
        padding-left: 20px;
        padding-right: 40px;
        border: 1px solid #00C8FF;
        border-radius: 2px; 
      }

      

    .link p, a{
      text-decoration: none;
      color: #000;
      text-align: center;
    }    
      
      

        #check:not(checked) ~ .barra{
          visibility: hidden;
        }
      
        #check:checked ~ .barra{
          visibility: visible;
          transform: translateY(10px);
        }

        .logo{
          display: flex;          
          margin-top: -40px;
          margin-left: auto;
          margin-right: auto;
        }
      
        .search{
          display: flex;
          flex-direction: row;
          background: #FFF;
          width: 100%;
          max-width: 330px;
          padding: 1px;
          border-radius: 4px;
          align-items: center;
          margin-left: auto;
          margin-right: auto;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        input{
          border:  none;
          outline: 0;
          width: 100%;
          max-width: 330px;
          padding: 5px;
          border-radius: 4px ;
         }
       
         .buttonSearch{
          background: #FFFFFF;
          border: none;
          margin-bottom: 3px;
          border-radius: 4px;
          margin-right: 0px;
        }

        .carrinho{
          display: flex;
          position: relative;
          float: right;
          top: -80px;
          right: 25px;
        }
    }
  }





 
`;