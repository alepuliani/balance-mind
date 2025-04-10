import { useParams } from "react-router-dom"
import { meditationsData } from "../data/meditationsData"
import { useRef, useState, useEffect } from "react"
import { FaPlayCircle, FaPauseCircle, FaStop } from "react-icons/fa"
import { RxLoop } from "react-icons/rx"
import styled from "styled-components"

const LoopBtn = styled.button`
  color: ${(props) => (props.loop ? "black" : "white")};
  background-color: ${(props) => (props.loop ? "white" : "transparent")};
  border-radius: 5px;
  padding: 2px 4px;
  cursor: pointer;
`

const MeditationAudio = () => {
  const [playing, setPlaying] = useState(false)
  const [loop, setLoop] = useState(false)
  const { name } = useParams()
  const audioRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const audio = audioRef.current
  const meditation = meditationsData.find(
    (meditation) => meditation.title === decodeURIComponent(name)
  )

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const updateTime = () => setCurrentTime(audio.currentTime)
    const setAudioDuration = () => setDuration(audio.duration)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", setAudioDuration)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", setAudioDuration)
    }
  }, [audio])

  useEffect(() => {
    setPlaying(false)
  }, [meditation])

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const toggleLoop = () => {
    if (!loop) {
      audio.loop = true
      setLoop(true)
    } else {
      audio.loop = false
      setLoop(false)
    }
  }

  const togglePlay = () => {
    if (!playing) {
      audio.play()
      setPlaying(true)
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  const stop = () => {
    audio.load()
    setPlaying(false)
  }

  return (
    <div className="flex flex-col items-center px-5">
      <img
        src={meditation.image}
        alt="meditation image"
        className="rounded-xl w-[310px] h-[310px] object-cover"
      />
      <h1>{meditation.title}</h1>
      <p className="text-black">{meditation.description}</p>
      <audio src={meditation.soundSrc} ref={audioRef}></audio>
      <div className="text-black text-3xl font-bold mt-4">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>

      <div className="bg-zinc-700 py-2 px-6 flex items-center justify-between text-l w-[150px] rounded-3xl my-3.5 text-white">
        <button className="hover:cursor-pointer" onClick={() => stop()}>
          <FaStop />
        </button>
        <button
          className="text-3xl cursor-pointer"
          onClick={() => togglePlay()}
        >
          {!playing ? <FaPlayCircle /> : <FaPauseCircle />}
        </button>
        <LoopBtn loop={loop} onClick={() => toggleLoop()}>
          <RxLoop />
        </LoopBtn>
      </div>
    </div>
  )
}
export default MeditationAudio
