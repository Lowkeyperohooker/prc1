// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// Used for creating complex animations and transitions
import gsap from "https://cdn.skypack.dev/gsap@3.12.5";
// Lightweight GUI for web development
import * as dat from "https://cdn.skypack.dev/lil-gui@0.16.0";

// console.log(THREE);

const scene = new THREE.Scene();

// Object
const sphereGeometry = new THREE.SphereGeometry(1.5,32,32);
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( {color: 'red'} );
const mesh = new THREE.Mesh(geometry, material);

console.log(mesh.position.length());
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600
}

// Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 1, 1000);
// const aspectRatio = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera( -1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100)
camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);

// Cursor 
const cursor = {
  x:0,
  y:0
}

window.addEventListener('mousemove', (event) => {
  cursor.x = - (event.clientX / sizes.width - 0.5);
  cursor.y = event.clientY / sizes.height - 0.5;

  console.log(cursor.x, cursor.y);
})

// console.log(mesh.position.distanceTo(camera.postion));

/**
 * Axws Helper
 */
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// mesh.position.set(0.7,-0.6,1);
// mesh.scale.x = 2;
// mesh.scale.y = 0.25;
// mesh.scale.z = 0.5;

mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

// camera.lookAt(new THREE.Vector3(0,-1,0));
// camera.lookAt(mesh.position);

/**
 * Objects
 */
// const group = new THREE.Group();
// group.scale.y = 2;
// group.rotation.y = 0.2;
// scene.add(group);

// const cube1 = new THREE.Mesh(
//   new THREE.BoxGeometry(1,1,1),
//   new THREE.MeshBasicMaterial({color:0xff0000})
// );
// cube1.position.x = - 1.5;
// group.add(cube1);

// const cube2 = new THREE.Mesh(
//   new THREE.BoxGeometry(1,1,1),
//   new THREE.MeshBasicMaterial({color:0xff0000})
// );
// cube2.position.x = 0;
// group.add(cube2);

// const cube3 = new THREE.Mesh(
//   new THREE.BoxGeometry(1,1,1),
//   new THREE.MeshBasicMaterial({color:0xff0000})
// );
// cube3.position.x = 1.5;
// group.add(cube3);

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.target.y = 2;
// controls.update();

// ...

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas:canvas
})

renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene,camera);

// const tick = () => {
//   // Update camera 
//   camera.position.x = cursor.x*5;
//   camera.position.y = cursor.y*5;
//   camera.lookAt(mesh.position);

//   renderer.render(scene, camera);

//   window.requestAnimationFrame(tick);
// }

// tick();

const tick = () => {
  controls.target.x = Math.sin(cursor.x * Math.PI * 2) * 2;
  // controls.target.z = Math.cos(cursor.x * Math.PI * 2) * 2;
  controls.target.y = cursor.y *3;
  controls.update();
  // camera.lookAt(mesh.position);

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
}

tick();

// const tick = () => {
//   camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
//   camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
//   camera.position.y = cursor.y * 3;
//   camera.lookAt(mesh.position);

//   renderer.render(scene, camera);

//   window.requestAnimationFrame(tick);
  
// };

// tick();

// const tick = () => {
//   // Update objects
//   mesh.rotation.y += 0.01;
//   mesh.rotation.x += 0.01;

//   // Render
//   renderer.render(scene,camera);

//   window.requestAnimationFrame(tick);
// };

// tick();

// const clock = new THREE.Clock();

// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();
//   // console.log(elapsedTime);

//   // Update objects 
//   mesh.position.x = Math.cos(elapsedTime);
//   mesh.position.y = Math.sin(elapsedTime);
  
//   mesh.rotation.y += 0.01;
//   mesh.rotation.x += 0.01;

//   // Render
//   renderer.render(scene, camera);

//   // Call tick again on the next Frame
//   window.requestAnimationFrame(tick);
// };

// tick();

// const clock = new THREE.Clock();

// const tick = () => {
//   const elapsedTIme = clock.getElapsedTime();

//   // Update objects
//   camera.position.x = Math.cos(elapsedTIme);
//   camera.position.y = Math.sin(elapsedTIme);

//   mesh.rotation.y += 0.01;
//   mesh.rotation.x += 0.01;

//   // Render
//   renderer.render(scene,camera);

//   // call tick again on the next frame
//   window.requestAnimationFrame(tick);
// };

// tick();

/**
 * Animate
 */
// gsap.to(mesh.position, {duration:1, delay:1,x:2});

// const tick = () => {
//   // Render
//   renderer.render(scene, camera);

//   // Call tick again on the next frame
//   window.requestAnimationFrame(tick);
// }

// tick();
