import styled from "styled-components"
import mobileLogo from "../assets/images/balancemind-logo-mobile.png"
import { FiMenu } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { meditationsData } from "../data/meditationsData"
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

const SmallLi = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 20px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [meditationsOpen, setMeditationsOpen] = useState(false)

  useEffect(() => {
    menuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto")
    setMeditationsOpen(false)
  }, [menuOpen])

  const toggleMeditations = function () {
    setMeditationsOpen(!meditationsOpen)
  }

  return (
    <>
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

          <Li onClick={() => toggleMeditations()}>Meditations</Li>

          <ul
            className={`transition-all duration-400 transform origin-top ${
              meditationsOpen
                ? "max-h-screen scale-y-100 opacity-100"
                : "max-h-0 scale-y-0 opacity-0"
            }`}
          >
            <Link to="/meditations" onClick={() => setMenuOpen(false)}>
              <SmallLi>All</SmallLi>
            </Link>
            {meditationsData.map((meditation) => {
              {
                return <SmallLi>{meditation.title}</SmallLi>
              }
            })}
          </ul>

          <Li>About us</Li>
        </ul>
      </NavBar>
    </>
  )
}

export default AppHeader
