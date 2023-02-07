//控制3d物体缩放
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//创建一个场景
const scene = new THREE.Scene();

//创建一个相机 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

//设置相机的位置并添加到场景中
camera.position.set(0, 0, 10)
scene.add(camera);

//创建物体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

//修改物体位置
// cube.position.set(3, 0, 0)
// cube.position.x = 3

//缩放物体
// cube.scale.set(3, 2, 1)
// cube.scale.x = 3

//旋转物体，绕x轴旋转 180/4 = 45°
// cube.rotation.set(Math.PI / 4, 0, 0)
// cube.rotation.x = Math.PI / 4


scene.add(cube);

//添加辅助坐标系轴
const axesHelper = new THREE.AxesHelper(10)
scene.add(axesHelper)

//初始化渲染器
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera)

document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement);

function animate(time: number) {
  //time：每一帧进来的毫秒数
  const t = time / 1000 % 5;
  cube.position.x = t;
  cube.rotation.x += Math.PI / 90

  requestAnimationFrame(animate);

  renderer.render(scene, camera);

}

animate()

