import {useEffect, useRef} from 'react'
import * as THREE from "three"
import styles from '../styles/Globe.module.css'

const Globe = () => {
  const globeRef = useRef(null)

  useEffect(() => {
    // create a scene
    const scene = new THREE.Scene()

    // create a camera
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1, 
        1000
    )
    camera.position.z = 5;

    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    globeRef.current.appendChild(renderer.domElement);

    // Create a globe
    const globeGeometry = new THREE.SphereGeometry(2, 32, 32);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x2194ce,
      wireframe: true,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Add animation
    const animate = () => {
        requestAnimationFrame(animate);
  
        // Rotate the globe
        globe.rotation.x += 0.005;
        globe.rotation.y += 0.005;
        renderer.render(scene, camera);
      };
  
    animate();
  }, [])

  return (
    <div className={styles['globe-container']}>
        <div className={styles['globe-header']}>
            <h1>We are in the business of building entrepreneurs.</h1>
            <p>We are a team of dark horses who believe that technology will ignite the next industrial revolution. Our mission is to reshape the digital retail landscape by defining the future of commerce.</p>
        </div>
        <div ref={globeRef} className=''></div>
    </div>
  )
}

export default Globe