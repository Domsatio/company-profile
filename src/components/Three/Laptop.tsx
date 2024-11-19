'use client'
import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import {
  Canvas,
  useFrame,
  GroupProps
} from '@react-three/fiber'
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'
import HeroPage from './HeroPage'

function Model(props: JSX.IntrinsicAttributes & GroupProps) {
    const group = useRef<THREE.Group>(null!)
  // Load model
  const { nodes, materials } = useGLTF('/mac-draco.glb')
  // Make it float
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (group.current) {
      const current = group.current as THREE.Group
      current.rotation.x = THREE.MathUtils.lerp(current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
      current.rotation.y = THREE.MathUtils.lerp(current.rotation.y, Math.sin(t / 4) / 20, 0.1) 
      current.rotation.z = THREE.MathUtils.lerp(current.rotation.z, Math.sin(t / 8) / 20, 0.1)
      current.position.y = THREE.MathUtils.lerp(current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1)
    }
  })
  // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} {...props}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={(nodes['Cube008'] as THREE.Mesh).geometry} />
          <mesh material={materials['matte.001']} geometry={(nodes['Cube008_1'] as THREE.Mesh).geometry} />
          <mesh geometry={(nodes['Cube008_2'] as THREE.Mesh).geometry}>
            {/* Drei's HTML component can "hide behind" canvas geometry */}
            <Html className="content overflow-hidden" rotation-x={-Math.PI / 2} position={[0.17, 0.08, -0.1]} transform occlude>
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                <HeroPage />
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh material={materials.keys} geometry={(nodes.keyboard as THREE.Mesh).geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={(nodes['Cube002'] as THREE.Mesh).geometry} />
        <mesh material={materials.trackpad} geometry={(nodes['Cube002_1'] as THREE.Mesh).geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={(nodes.touchbar as THREE.Mesh).geometry} position={[0, -0.03, 1.2]} />
    </group>
  )
}

export default function Laptop() {
  return (
    <Canvas camera={{ position: [-5, 0, -15], fov: 65 }} style={{ width: '100%', height: '300px', cursor: "grabbing" }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
          <Model scale={1} />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
  )
}