import PropTypes from "prop-types"
import styled from "styled-components"

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.lilacColor};
  color: #ffffff;
  padding: 10px 20px;
  margin: 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-weight: 700;
  font-size: 13px;
  &:hover {
    transform: scale(1.05);
  }
`

const BaseButton = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>
}

BaseButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired // Aggiungi questa prop
}
export default BaseButton
