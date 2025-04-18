import { personalizedMeditations } from "../data/meditationsData"
import { useParams } from "react-router-dom"
const PersonalizedMeditation = function () {
  const { name } = useParams()
  const meditation = personalizedMeditations.find((med) => med.name === name)
  return (
    <div>
      <h1>{meditation.title}</h1>
      <p>{meditation.text}</p>
      <h2>Breathing Exercise</h2>
      <p>
        Find a comfortable position, either lying down or sitting with your back
        straight. Focus on your breath.
      </p>

      <h2>Guided Meditation</h2>
      <p>
        Allow your thoughts to gently fade away. Imagine a calm, peaceful
        place—a place that brings you peace and serenity. Let the soothing
        sounds guide you
      </p>
    </div>
  )
}

export default PersonalizedMeditation
