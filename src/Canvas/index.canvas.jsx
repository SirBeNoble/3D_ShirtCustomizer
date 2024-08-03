import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import Shirt from "./Shirt.canvas"
import Backdrop from "./Backdrop.canvas"
import CameraRig from "./CameraRig.canvas"

const CanvasModel = () => {
  return (
    <Canvas 
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      
      <CameraRig>
        <Backdrop />
          <Shirt />
     </CameraRig>
     
    </Canvas>
  )
}

export default CanvasModel