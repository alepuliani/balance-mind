import homeImg from "../assets/images/meditation1-home.png"
import BaseButton from "../components/BaseButton"
import Card from "../components/Card"
import { Link } from "react-router-dom"
import { meditationBenefits } from "../data/meditationsData"
import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="text-center">
      <div className="flex flex-col items-center">
        {" "}
        <img src={homeImg} alt="" className="w-[70%]" />
        <h1>Find your inner peace</h1>
        <p>
          Discover calm through guided meditations, soothing sounds, and
          personalized breathwork.
        </p>
        <Link to="/personalmeditations">
          <BaseButton>Start now</BaseButton>
        </Link>
      </div>

      <div className="text-start">
        <h2>Why Meditate?</h2>
        <p>
          Meditation is more than just a practice — it’s a powerful tool for
          creating space in your mind, calming your emotions, and reconnecting
          with yourself. Whether you’re seeking to{" "}
          <strong>reduce stress</strong>, <strong>improve focus</strong>, or
          simply <strong>breathe more deeply</strong>, meditation supports both
          mental and physical well-being.
        </p>
      </div>
      <div className="grid grid-cols-2 my-8 ">
        {meditationBenefits.map((benefit) => (
          <Card key={benefit.id} color={benefit.color}>
            <div className="flex flex-col items-center justify-center">
              <img src={benefit.img} alt="Benefit Image" className="h-30" />
              <h3>{benefit.title}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default Home
