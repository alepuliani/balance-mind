import PropTypes from "prop-types"
import styled from "styled-components"

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.lilacColor};
  color: #ffffff;
  padding: 10px;
  margin: 30px;
  width: 250px;
  border: none;
  border-radius: 22px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  &:hover {
    transform: scale(1.05);
  }
`

const BaseButton = ({ children }) => {
  return <Button>{children}</Button>
}
export default BaseButton

BaseButton.propTypes = {
  children: PropTypes.string.isRequired
}
