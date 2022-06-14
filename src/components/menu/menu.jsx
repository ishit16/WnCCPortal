import { Container } from "postcss";
import {
  FaRProject,
  FaHome,
  FaDev,
  FaQuestionCircle,
  FaPeopleArrows,
} from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { device } from "../../styles/mediaQuery";
import styled from "styled-components";
import { MenuItem } from "./menuItem";
import "./menu.css";
import StyledDivider from "../shared/Divider";

const Menu = () => {
  const iconSize = `1.125rem`;
  console.log(window.innerWidth);
  return (
    <Containerr>
      <MenuItem title="Home" icon={FaHome} iconSize={iconSize} to="/" />
      <MenuItem
        title="Discussions"
        icon={FaPeopleArrows}
        iconSize={iconSize}
        to="/error"
      />
      <MenuItem
        title="FAQ"
        icon={FaQuestionCircle}
        iconSize={iconSize}
        to="/error"
      />
      {window.innerWidth > 800 ? <hr className="hr-class" /> : <></>}
      <MenuItem
        title="All Projects"
        icon={FaRProject}
        iconSize={iconSize}
        to="/projects"
      />
      <MenuItem title="Dev" icon={FaDev} iconSize={iconSize} to="/error" />
      <MenuItem
        title="AI/ML"
        icon={GiArtificialIntelligence}
        iconSize={iconSize}
        to="/error"
      />
      <MenuItem
        title={"Blockchain"}
        icon={SiHiveBlockchain}
        iconSize={iconSize}
        to="/error"
      />
      {window.innerWidth > 800 ? <hr className="hr-class" /> : <></>}
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
  padding: 0;
  background: #2b273b;
  box-shadow: 0 0 0.5rem rgb(0 0 0 / 50%);

  @media ${device.min.md} {
    position: fixed;
    top: 3rem;
    z-index: 100; /* For shadow effects */
    flex-direction: column;
    justify-content: initial;
    width: 9rem;
    height: calc(100% - 3rem);
    padding: 0;
  }
`;
