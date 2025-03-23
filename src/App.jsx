import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { GlobalStyles } from "./styles/globalStyles"
import Home from "./pages/Home"
import AppHeader from "./components/AppHeader"
import Meditations from "./pages/Meditations"
import MeditationAudio from "./pages/MeditationAudio"
import BreathWork from "./pages/BreathWork"
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meditations" element={<Meditations />} />
            <Route path="/meditations/:name" element={<MeditationAudio />} />
            <Route path="/breathwork" element={<BreathWork />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
