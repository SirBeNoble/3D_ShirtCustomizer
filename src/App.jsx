import Canvas from "./Canvas/index.canvas"
import Customizer from "./Pages/Customizer.page"
import Home from "./Pages/Home.page"

function App() {
  
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
