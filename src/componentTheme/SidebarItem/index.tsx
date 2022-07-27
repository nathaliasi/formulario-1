import { NavLink } from 'react-router-dom';
import * as C from './style';

type Props = {
  title: string;
  path: string;
  active: boolean;
};

export const SidebarItem = ({ title, path,active}: Props) => {
  return (
    <C.Container>
      <NavLink to={path}
        className={({isActive})=> (isActive ? "link-active" : "link")}
      >
        <C.Info>
          <C.Title 
          active={active}>{title}
          </C.Title>
        </C.Info>
      </NavLink>
    </C.Container>
  );
};
