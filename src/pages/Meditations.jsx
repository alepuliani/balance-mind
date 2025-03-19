import Card from "../components/Card"
import { meditationsData } from "../data/meditationsData"
import { Link } from "react-router-dom"
import { FaPlay } from "react-icons/fa"
import styled from "styled-components"
import { useEffect } from "react"

const CardPlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.3);
  display: none;
`

const Meditations = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <h1>Meditations</h1>
      <div className="grid grid-cols-1 gap-10 place-items-center">
        {meditationsData.map((meditation) => {
          return (
            <Link
              key={meditation.id}
              className="w-[350px]"
              to={`/meditations/${encodeURIComponent(meditation.title)}`}
            >
              <Card color={meditation.color}>
                <div className="flex flex-col items-center">
                  <img
                    src={meditation.image}
                    alt="meditation image"
                    className="rounded-xl w-[310px] h-[310px] object-cover"
                  />
                  <h2 className="text-white">{meditation.title}</h2>
                  <p>{meditation.description}</p>
                </div>
                <CardPlay className="card-play">
                  <FaPlay className="size-14 mb-17" />
                </CardPlay>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Meditations
