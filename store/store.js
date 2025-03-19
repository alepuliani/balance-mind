import { createContext, useState } from "react"

const MeditationsContext = createContext()

const MeditationsProvider = () => {
  const [meditations, setMeditations] = useState([
    {
      id: 1,
      title: "Reduce Stress",
      img: peaceImg,
      color: "lilacColor"
    },
    {
      id: 2,
      title: "Boost Mental Clarity",
      img: workImg,
      color: "grayColor"
    },
    {
      id: 3,
      title: "Increase Self-Awareness",
      img: selfImg,
      color: "brownColor"
    },
    {
      id: 4,
      title: "Improve Sleep",
      img: sleepImg,
      color: "lightBlueColor"
    }
  ])
}
