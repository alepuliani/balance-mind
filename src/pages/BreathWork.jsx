import { useState } from "react"
import styled from "styled-components"
import BaseButton from "../components/BaseButton"
import { FaRegCircle } from "react-icons/fa"
import { useLocation } from "react-router-dom"

const IntroDiv = styled.div`
  display: ${(props) => (props.started ? "none" : "flex")};
`
const BreathDiv = styled.div`
  display: ${(props) => (props.started ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  height: 80vh;
`

const Circle = styled(FaRegCircle)`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  transition: ${(props) => props.growthDuration}s ease-in-out;
  color: ${(props) => props.theme.colors.lightBlueColor};
`

const BreathWork = () => {
  const [breathingStarted, setBreathingStarted] = useState(false)
  const [timer, setTimer] = useState("")
  const [size, setSize] = useState(500)
  const [growthDuration, setGrowthDuration] = useState(4)
  const [breathePhase, setBreathePhase] = useState("")

  const location = useLocation()
  const { inhale, hold, exhale } = location.state

  const time = function (type) {
    return 1000 * type
  }
  const startBreath = () => {
    setBreathingStarted(true)
    setTimer(3)

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval)
          startCycle()
        }
        return prev - 1
      })
    }, 1000)
  }

  const startCycle = () => {
    setSize(50)
    setBreathePhase("Inhale")
    setTimeout(() => {
      setGrowthDuration(inhale)
      setSize(200)
      setTimeout(() => {
        setBreathePhase("Hold")
        setGrowthDuration(0)
        setSize(200)
        setTimeout(() => {
          setBreathePhase("Exhale")
          setGrowthDuration(exhale)
          setSize(50)
          setTimeout(() => {
            setBreathePhase("Hold")
            setGrowthDuration(0)
            setSize(50)
            setTimeout(() => {
              startCycle()
            }, time(hold))
          }, time(exhale))
        }, time(hold))
      }, time(inhale))
    }, 50)
  }

  return (
    <>
      <IntroDiv
        started={breathingStarted}
        className="flex flex-col justify-center items-center text-center h-[80vh] mx-8"
      >
        <h1> Find your breath.</h1>
        <h2>
          When you are ready, click <strong>Start</strong>. <br /> Follow the
          rhythm. <br /> <em>Inhale deeply, exhale slowly. </em>
          <br />
        </h2>
        <BaseButton onClick={() => startBreath()}>Start</BaseButton>
      </IntroDiv>

      <BreathDiv started={breathingStarted}>
        <div>
          <div>
            {timer > 0 ? (
              <p className="text-8xl">{timer}</p>
            ) : (
              <div className="flex flex-col items-center ">
                <div className="h-[300px] w-[300px] flex items-center justify-center">
                  <Circle growthDuration={growthDuration} size={size} />
                </div>
                <div>
                  <h2 className="text-center">{breathePhase}</h2>
                </div>
                <BaseButton onClick={() => setBreathingStarted(false)}>
                  Stop
                </BaseButton>
              </div>
            )}
          </div>
        </div>
      </BreathDiv>
    </>
  )
}
export default BreathWork
