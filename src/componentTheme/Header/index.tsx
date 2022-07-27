import * as C from './styles';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/logo.png';
import Lupa from '../../img/lupa.png';
import Carrinho from '../../img/carrinho.png';
import Menu from '../../img/menu-mobile.png';

export const Header = () => {
  return (
    <C.Container className="header">
      <div className="container" id="topo">
        <div className="dropDown">
          <input type="checkbox" id="check" />
          <label htmlFor="check" id="icone">
            <img src={Menu} />
          </label>
          <div className="barra">
            <nav>
              <NavLink className="cursos link" to="#">
                <p>Cursos</p>
              </NavLink>
              <NavLink className="saibamais link" to="#">
                <p>Saiba Mais</p>
              </NavLink>
            </nav>
          </div>
        </div>
        <NavLink to="/">
          <img className="logo" src={Logo} />
        </NavLink>
        <div className="search">
          <input type="text" placeholder="Buscar" />
          <button className="buttonSearch">
            <img src={Lupa} />
          </button>
        </div>
        <div className="entrarCarrinho">
          <NavLink className="entrar" to="#">
            <p>Entrar</p>
          </NavLink>
          <NavLink className="carrinho" to="/">
            <img src={Carrinho} />
          </NavLink>
        </div>
        <div className="cursoSaibamais">
          <NavLink className="cursos" to="#">
            <p>Cursos</p>
          </NavLink>
          <NavLink className="saibamais" to="#">
            <p>Saiba Mais</p>
          </NavLink>
        </div>
      </div>
    </C.Container>
  );
};
