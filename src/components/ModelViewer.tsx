import { useRef, useState, ChangeEvent } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { Mesh } from 'three'

export function ModelViewer() {
  const meshRef = useRef<Mesh>(null)
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null)

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const contents = e.target?.result
      if (typeof contents !== 'string' && contents) {
        const loader = new STLLoader()
        const geometry = loader.parse(contents)
        setGeometry(geometry)
      }
    }
    reader.readAsArrayBuffer(file)
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <input
        type="file"
        accept=".stl"
        onChange={handleFileUpload}
        style={{ margin: '1rem' }}
      />
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Stage environment="city" intensity={0.6}>
          {geometry && (
            <mesh ref={meshRef} geometry={geometry}>
              <meshStandardMaterial color="#888888" />
            </mesh>
          )}
        </Stage>
        <OrbitControls />
      </Canvas>
    </div>
  )
} 