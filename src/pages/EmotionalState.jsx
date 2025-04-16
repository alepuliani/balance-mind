import Card from "../components/Card"
import { Link } from "react-router-dom"
import { FaCloud } from "react-icons/fa"
import { MdSunny } from "react-icons/md"
import { BsMoonStarsFill } from "react-icons/bs"

const EmotionalState = function () {
  const emotions = [
    {
      title: "I need calm",
      text: "Feeling overwhelmed? Let’s find your peace.",
      icon: <FaCloud className="text-6xl" />,
      color: "greenColor"
    },
    {
      title: "I want energy",
      text: "Need a boost of vitality? Recharge your energy.",
      icon: <MdSunny className="text-7xl" />,
      color: "yellowColor"
    },
    {
      title: "I can’t sleep",
      text: "Trouble sleeping? Let’s prepare your mind for rest.",
      icon: <BsMoonStarsFill className="text-5xl" />,
      color: "lilacColor"
    }
  ]
  return (
    <div>
      <h1>How do you feel?</h1>
      <p>
        Welcome to your personal meditation journey. <br /> Choose one of the
        options below, and let’s start your practice.
      </p>

      {emotions.map((emotion) => {
        return (
          <Link key={emotion.title}>
            <Card color={emotion.color}>
              {emotion.icon}
              <h2>{emotion.title}</h2>
              <p>{emotion.text}</p>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}

export default EmotionalState
