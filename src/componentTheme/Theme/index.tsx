import { ReactNode } from 'react';
import * as C from './style';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { NavLink } from 'react-router-dom';
import Home from '../../img/Vector.png';
import Seta from '../../img/setinha.png';
import Face from '../../img/facebook.png';
import Insta from '../../img/instagram.png';
import Twitter from '../../img/twitter.png';
import Youtube from '../../img/youtube.png';
import Linkedin from '../../img/linkedin.png';
import Master from '../../img/Master.png';
import Visa from '../../img/Visa.png';
import Diners from '../../img/Diners.png';
import Elo from '../../img/Elo.png';
import Hiper from '../../img/Hiper.png';
import Paypal from '../../img/Pagseguro.png';
import Boleto from '../../img/Boleto.png';
import Vtex from '../../img/vtex-pci-200.png';
import PowredV from '../../img/Group21.png';
import Whatsapp from '../../img/whatsapp.png';
import Topo from '../../img/topo.png';
import Plus from '../../img/mais.png';

import { useForm } from '../../contexts/FormContext';

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state } = useForm();
  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Inst>
          <div className="home">
            <NavLink to="#home">
              <img className="casinha" src={Home} />
            </NavLink>
            <NavLink to="/">
              <img src={Seta} />
            </NavLink>
            <p className="txt-inst">INSTITUCIONAL</p>
          </div>
          <div className="institucional">
            <h2 className="h2-inst">INSTITUCIONAL</h2>
          </div>
        </C.Inst>
        <C.Steps>
          <C.Sidebar>
            <SidebarItem
              title="sobre"
              path="/"
              active={state.CurrentStep == 1}
            />
            <SidebarItem
              title="forma de pagamento"
              path="/step2"
              active={state.CurrentStep === 2}
            />
            <SidebarItem
              title="entrega"
              path="/step3"
              active={state.CurrentStep === 3}
            />
            <SidebarItem
              title="Troca Devolução"
              path="/step4"
              active={state.CurrentStep === 4}
            />
            <SidebarItem
              title="Segurança e Privacidade"
              path="/step5"
              active={state.CurrentStep === 5}
            />
            <SidebarItem
              title="Contato"
              path="/step6"
              active={state.CurrentStep === 6}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
      <C.Section>
        <div className="linha">
          <div className="inputlabel">
            <label htmlFor="" className="label">
              <h3>Assine nossa newsletter</h3>
            </label>
            <input className="input" placeholder="E-mail" type="text" />
            <button>Enviar</button>
          </div>
        </div>
      </C.Section>
      <C.Footer1>
        <div className="footer1">
          <div className="footer1-institucional">
            <ul>
              <h4>
                Institucional <img src={Plus} className="plus" />
              </h4>
              <li>
                <a href="#">Quem Somos</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#"> Segurança</a>
              </li>
              <li>
                <a href="#">Seja um Revendedor</a>
              </li>
            </ul>
          </div>
          <div className="footer1-duvidas">
            <ul>
              <h4>Dúvidas</h4>
              <li>
                <a href="#">Entrega</a>
              </li>
              <li>
                <a href="#">Pagamento</a>
              </li>
              <li>
                <a href="#">Trocas e Devoluções</a>
              </li>
              <li>
                <a href="#">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>
          <div className="footer1-faleconosco">
            <ul>
              <h4>FALE CONOSCO</h4>
              <li>
                <a href="#">Atendimento ao Consumidor</a>
              </li>
              <li>
                <a href="#">(11)4159-9504</a>
              </li>
              <li>
                <a href="#"> Atendimento Online</a>
              </li>
              <li>
                <a href="#">(11)99488-8825</a>
              </li>
            </ul>
          </div>
          <div className="footer1-redes">
            <a href="#">
              <img src={Face} />
            </a>
            <a href="#">
              <img src={Insta} />
            </a>
            <a href="#">
              <img src={Twitter} />
            </a>
            <a href="#">
              <img src={Youtube} />
            </a>
            <a href="#">
              <img src={Linkedin} />
            </a>
            <p>www.loremipusu.com</p>
          </div>

          <div className="footer1-mobile">
            <div className="dropDown2">
              <input type="checkbox" id="check2" />
              <label htmlFor="check2" id="icone2">
                <h4>
                  Institucional <img src={Plus} />
                </h4>
              </label>
              <div className="barra2">
                <nav className="nav2">
                  <NavLink className="cursos link" to="#">
                    <p>Quem Somos</p>
                  </NavLink>
                  <NavLink className="saibamais link" to="#">
                    <p>política de Privacidade</p>
                  </NavLink>
                  <NavLink className="cursos link" to="#">
                    <p>Segurança</p>
                  </NavLink>
                  <NavLink className="saibamais link" to="#">
                    <p>Seja um Revendedor</p>
                  </NavLink>
                </nav>
              </div>
            </div>
            <div className="dropDown3">
              <input type="checkbox" id="check3" />
              <label htmlFor="check3" id="icone3">
                <h4>
                  Dúvidas <img src={Plus} className="plus" />
                </h4>
              </label>
              <div className="barra3">
                <nav className="nav3">
                  <NavLink className="cursos link" to="#">
                    <p>Entrega</p>
                  </NavLink>
                  <NavLink className="saibamais link" to="#">
                    <p>Pagamento</p>
                  </NavLink>
                  <NavLink className="cursos link" to="#">
                    <p>Troca e Devolução</p>
                  </NavLink>
                  <NavLink className="saibamais link" to="#">
                    <p>Dúvidas Frequentes</p>
                  </NavLink>
                </nav>
              </div>
            </div>
            <div className="dropDown4">
              <input type="checkbox" id="check4" />
              <label htmlFor="check4" id="icone4">
                <h4>
                  fale conosco <img src={Plus} className="plus" />
                </h4>
              </label>
              <div className="barra4">
                <nav className="nav4">
                  <NavLink className="cursos link" to="#">
                    <p>Atendimento ao consumidor</p>
                  </NavLink>
                  <NavLink className="saibamais link" to="#">
                    <p>(11)4159-9504</p>
                  </NavLink>
                  <NavLink className="cursos link" to="#">
                    <p>Atendimento online</p>
                  </NavLink>
                  <NavLink className="saibamais link" to="#">
                    <p>(11)7159-9508</p>
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
          <div className="footer1-redes2">
            <a href="#">
              <img src={Face} />
            </a>
            <a href="#">
              <img src={Insta} />
            </a>
            <a href="#">
              <img src={Twitter} />
            </a>
            <a href="#">
              <img src={Youtube} />
            </a>
            <a href="#">
              <img src={Linkedin} />
            </a>
          </div>
        </div>
      </C.Footer1>
      <C.Footer2>
        <div className="footer2-mobile">
          <div className="pagamentos2">
            <a href="#">
              <img src={Master} />
            </a>
            <a href="#">
              <img src={Visa} />
            </a>
            <a href="#">
              <img src={Diners} />
            </a>
            <a href="#">
              <img src={Elo} />
            </a>
            <a href="#">
              <img src={Hiper} />
            </a>
            <a href="#">
              <img src={Paypal} />
            </a>
            <a href="#">
              <img src={Boleto} />
            </a>
            <a href="#">
              <img src={Vtex} />
            </a>
          </div>
          <div className="div-txt2">
            <p className="txt2">Lorem ipsum, dolor sit amet consectetur</p>
          </div>
          <div className="powred2">
            <a href="#">
              <img src={PowredV} />
            </a>
          </div>
        </div>

        <div className="footer2">
          <div className="div-txt">
            <p className="txt">
              Lorem ipsum, dolor sit amet consectetur adipisicing
              elit.ksdhsdkhds ijdlclwjeAHBScjhbdC
            </p>
            <div className="pagamentos">
              <a href="#">
                <img src={Master} />
              </a>
              <a href="#">
                <img src={Visa} />
              </a>
              <a href="#">
                <img src={Diners} />
              </a>
              <a href="#">
                <img src={Elo} />
              </a>
              <a href="#">
                <img src={Hiper} />
              </a>
              <a href="#">
                <img src={Paypal} />
              </a>
              <a href="#">
                <img src={Boleto} />
              </a>
              <div>
                <a href="#">
                  <img src={Vtex} />
                </a>
              </div>
            </div>
            <div className="powred">
              <a href="#">
                <img src={PowredV} />
              </a>
            </div>
          </div>
        </div>
      </C.Footer2>
      <div className="topoWpp">
        <a
          href="https://api.whatsapp.com/send/?phone=55000000&text&type=phone_number&app_absent=0"
          target="blank"
        >
          <img className="wpp" src={Whatsapp} />
        </a>
        <div className="bola">
          <a href="#topo">
            <img className="topo" src={Topo} />
          </a>
        </div>
      </div>
    </C.Container>
  );
};

/**/
