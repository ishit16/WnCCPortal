import { Container } from "postcss";
import { FaRProject } from "react-icons/fa";
import { device } from "../../styles/mediaQuery";
import styled from "styled-components";
import { MenuItem } from "./menuItem";
import "./menu.css";
import StyledDivider from "../shared/Divider";

const Menu = () => {
  const iconSize = `1.125rem`;

  return (
    <Containerr>
      <MenuItem title="Home" icon={FaRProject} iconSize={iconSize} to="/" />
      <MenuItem
        title="All Projects"
        icon={FaRProject}
        iconSize={iconSize}
        to="/error"
      />
      <MenuItem
        title="Calender"
        icon={FaRProject}
        iconSize={iconSize}
        to="/error"
      />
      <hr className="hr-class"></hr>
    </Containerr>
  );
};
export default Menu;
const Containerr = styled.nav`
  position: sticky;
  top: 3rem;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  padding: 0 0.75rem;
  background: #2b273b;
  box-shadow: 0 0 0.5rem rgb(0 0 0 / 50%);

  @media ${device.min.md} {
    position: fixed;
    top: 3rem;
    z-index: 8; /* For shadow effects */
    flex-direction: column;
    justify-content: initial;
    width: 9rem;
    height: calc(100% - 3rem);
    padding: 0;
  }
`;
