import PropTypes from "prop-types"
import styled from "styled-components"

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors[props.color]};
  padding: 20px;
  border-radius: 20px;
  color: #ffffff;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover .card-play {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &.card-button:hover {
    transform: scale(1.03);
  }
`

const Card = ({ color, children, className }) => {
  return (
    <CardDiv color={color} className={className}>
      {children}
    </CardDiv>
  )
}
export default Card

Card.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  meditation: PropTypes.object,
  className: PropTypes.string
}
