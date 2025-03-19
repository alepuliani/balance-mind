import homeImg from "../assets/images/meditation1-home.png"
import BaseButton from "../components/BaseButton"
import Card from "../components/Card"
import { Link } from "react-router-dom"
import { meditationBenefits } from "../data/meditationsData"

const Home = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center">
        {" "}
        <img src={homeImg} alt="" className="w-[70%]" />
        <h1>Find your inner peace</h1>
        <p>
          Through guided meditations, calming sounds, and personalized routines,
          we help you <strong>create a balanced, peaceful life</strong>.
        </p>
        <Link to="/meditations">
          <BaseButton>Start now</BaseButton>
        </Link>
      </div>

      <div className="text-start">
        <h2>Why Meditate?</h2>
        <p>
          Meditation is more than just a practice; it’s a way to find strong,
          clarity, and balance in the midst of life’s chaos. Whether you’re
          looking to <strong>reduce stress</strong>,{" "}
          <strong>improve focus</strong>, or enhance your{" "}
          <strong>emotional well-being</strong>, meditation offers numerous
          benefits for both your mind and body.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 my-8 ">
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
