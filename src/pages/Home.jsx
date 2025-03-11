import homeImg from "../assets/images/meditation1-home.png"
import BaseButton from "../components/BaseButton"
import peaceImg from "../assets/images/graphics/peace-img.png"
import selfImg from "../assets/images/graphics/self-img.png"
import sleepImg from "../assets/images/graphics/sleep-img.png"
import workImg from "../assets/images/graphics/work-img.png"
import Card from "../components/Card"
import { Link } from "react-router-dom"

const Home = () => {
  const meditationBenefits = [
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
  ]
  return (
    <div className="text-center">
      <img src={homeImg} alt="" className="mb-10" />
      <h1>Find your inner peace</h1>
      <p>
        Through guided meditations, calming sounds, and personalized routines,
        we help you <strong>create a balanced, peaceful life</strong>.
      </p>

      <Link to="/meditations">
        <BaseButton>Start now</BaseButton>
      </Link>

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
