//使用控制器查看3d物体

import * as THREE from 'three';
//倒入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 0, 10)

//创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//添加控制器
const controls = new OrbitControls(camera, renderer.domElement);
renderer.render(scene, camera);
// //controls.update() 在camera发生改变后调用controls.update（）
// camera.position.set( 0, 20, 100 );
// controls.update();

function animate() {

  requestAnimationFrame(animate);

  // required if controls.enableDamping or controls.autoRotate are set to true
  // controls.autoRotate = true
  controls.update();

  renderer.render(scene, camera);

}

animate()

//添加辅助坐标系轴
const axesHelper = new THREE.AxesHelper(10)
scene.add(axesHelper)


