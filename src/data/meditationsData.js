import rainforestAudio from "../assets/audio/rainforest-audio.mp3"
import wavesAudio from "../assets/audio/waves-sound.wav"
import birdsAudio from "../assets/audio/forest-birds-sound.wav"
import chimesAudio from "../assets/audio/chimes-sound.mp3"
import musicAudio from "../assets/audio/music-sound.mp3"

import forestImg from "../assets/images/meditations/forest-photo.jpg"
import relaxImg from "../assets/images/meditations/relax-photo.jpg"
import meditationImg from "../assets/images/meditations/meditation-photo.jpg"
import rainImg from "../assets/images/meditations/rain-photo.jpg"
import seaImg from "../assets/images/meditations/sea-photo.jpg"

import peaceImg from "../assets/images/graphics/peace-img.png"
import selfImg from "../assets/images/graphics/self-img.png"
import sleepImg from "../assets/images/graphics/sleep-img.png"
import workImg from "../assets/images/graphics/work-img.png"

export const meditationsData = [
  {
    id: 1,
    title: "Birdsong in the Forest",
    description:
      "Immerse yourself in the peaceful sounds of birdsong in the forest.",
    sound: "Birds chirping, gentle rustling of leaves, soft breeze.",
    soundSrc: birdsAudio,
    image: forestImg,
    color: "greenColor"
  },
  {
    id: 2,
    title: "Waves of Serenity",
    description: "A relaxing journey on the ocean waves.",
    sound: "Sound of waves, sea breeze.",
    soundSrc: wavesAudio,
    image: seaImg,
    color: "lightBlueColor"
  },
  {
    id: 3,
    title: "Tropical Rainforest Sounds",
    description:
      "Immerse yourself in the soothing sounds of a tropical rainforest.",
    sound: "Tropical rain, distant thunder, chirping birds.",
    soundSrc: rainforestAudio,
    image: rainImg,
    color: "darkBlueColor"
  },
  {
    id: 4,
    title: "Chimes and Birds in Harmony",
    description:
      "Let the soothing sounds of meditation chimes and birdsong guide you to inner peace.",
    sound: "Meditation chimes, soft birdsong, gentle breeze.",
    soundSrc: chimesAudio,
    image: meditationImg,
    color: "lilacColor"
  },
  {
    id: 5,
    title: "Meditative Harmony",
    description:
      "Allow the soothing sounds to gently calm your mind and bring a sense of deep relaxation.",
    sound: "Soothing melodies, calming tones, peaceful ambiance.",
    audio: musicAudio,
    image: relaxImg,
    color: "brownColor"
  }
]

export const meditationBenefits = [
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
