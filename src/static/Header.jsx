import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";
import SideBar from "./SideBar";
import { MdOutlineMenu } from "react-icons/md";
import styled from "styled-components";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const getMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Holder>
            <p>FABRICS-STORE</p>
          </Holder>
          <IconHold>
            <nav>
              <IoSearchOutline />
            </nav>
            <nav>
              <CiHeart />
            </nav>
            <nav>
              <GoPerson />
            </nav>

            <nav>
              {" "}
              <IoLockClosedOutline />
            </nav>

            <nav>0</nav>
          </IconHold>
          <SideNav onClick={getMenu}>
            <MdOutlineMenu />
          </SideNav>
        </Wrapper>
      </Container>

      <div> {menu ? <SideBar /> : null}</div>
    </div>
  );
};

export default Header;
const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  background-color: #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Holder = styled.div`
  p {
    font-size: 25px;
  }
`;
const IconHold = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;

  nav {
    margin: 5px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const SideNav = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    font-size: 25px;
  }
`;
