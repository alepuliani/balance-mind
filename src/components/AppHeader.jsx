import styled from "styled-components"
import mobileLogo from "../assets/images/balancemind-logo-mobile.png"
import { FiMenu } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// Definizione dello Header con Styled Components
const Header = styled.header`
  background-color: ${(props) => props.theme.colors.creamColor};
  padding: 0 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
`

const MenuIcon = styled(FiMenu)`
  color: ${(props) => props.theme.colors.brownColor};
  font-size: 30px;
`
const NavBar = styled.nav`
  background-color: ${(props) => props.theme.colors.creamColor};
  display: ${(props) => (props.$menuOpen ? "flex" : "none")};
  align-items: center;
  justify-content: start;
  padding: 0 60px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  color: ${(props) => props.theme.colors.brownColor};
`
const Li = styled.li`
  font-size: 2rem;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    menuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto")
  }, [menuOpen])

  return (
    <>
      {" "}
      <Header>
        <Link to="/">
          <img
            src={mobileLogo}
            alt="Logo"
            className="h-12 w-auto hover:cursor-pointer"
          />
        </Link>
        <button
          className="hover:cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon />
        </button>
      </Header>
      <NavBar $menuOpen={menuOpen}>
        <img
          src={mobileLogo}
          alt="Logo"
          className="h-12 w-auto fixed top-3.5 left-3.5"
        />
        <IoMdClose
          className="fixed right-4 top-4 size-10 hover:cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
        <ul className="w-[50%] flex flex-col  justify-center">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <Li>Home</Li>
          </Link>
          <Link to="/meditations" onClick={() => setMenuOpen(false)}>
            <Li>Meditations</Li>
          </Link>
          <Li>About us</Li>
        </ul>
      </NavBar>
    </>
  )
}

export default AppHeader
