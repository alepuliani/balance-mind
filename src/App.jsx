import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { GlobalStyles } from "./styles/globalStyles"
import Home from "./pages/Home"
import AppHeader from "./components/AppHeader"
import Meditations from "./pages/Meditations"

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />{" "}
        <BrowserRouter>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meditations" element={<Meditations />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
