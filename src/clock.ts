//跟踪时间
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
scene.add(cube);

//添加辅助坐标系轴
const axesHelper = new THREE.AxesHelper(10)
scene.add(axesHelper)

//初始化渲染器
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera)

document.body.appendChild(renderer.domElement)


//设置时钟
const clock = new THREE.Clock();

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  //时钟运行的总时长
  const time = clock.getElapsedTime();
  //两次获取时间的间隔时间
  // const delta = clock.getDelta()

  cube.position.x = time % 5
  requestAnimationFrame(animate);

  renderer.render(scene, camera);

}

animate()

