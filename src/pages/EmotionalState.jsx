import Card from "../components/Card"
import { Link } from "react-router-dom"
import { emotions } from "../data/meditationsData"
import { FaCloud } from "react-icons/fa"
import { PiSunFill } from "react-icons/pi"
import { BsMoonStarsFill } from "react-icons/bs"

const EmotionalState = function () {
  const iconsMap = {
    calm: <FaCloud className="text-6xl" />,
    energy: <PiSunFill className="text-7xl" />,
    sleep: <BsMoonStarsFill className="text-5xl" />
  }

  return (
    <div>
      <h1>How do you feel?</h1>
      <p>
        Welcome to your personal meditation journey. <br /> Choose one of the
        options below, and let’s start your practice.
      </p>
      <div className="grid grid-cols-1 gap-6 m-10">
        {emotions.map((emotion) => {
          return (
            <Link
              key={emotion.title}
              to={`/personalmeditations/${emotion.name}`}
            >
              <Card color={emotion.color} className="card-button">
                {iconsMap[emotion.name]}
                <h2>{emotion.title}</h2>
                <p>{emotion.text}</p>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default EmotionalState
