import * as THREE from 'https://unpkg.com/three/build/three.module.js';

// Create a Three.js scene
const scene = new THREE.Scene();

// Create a Three.js camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a Three.js renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas") });

// Add a cube to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Render the scene
renderer.render(scene, camera);