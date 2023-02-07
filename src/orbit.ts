//轨道控制器：可以使得相机围绕目标进行轨道运动
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

const controls = new OrbitControls(camera, renderer.domElement);

//设置控制器阻尼，让控制器更真实（必须在动画循环时调用update）
controls.enableDamping = true

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);

}

animate()

//监听画面变化，更新渲染画面
window.addEventListener("resize", () => {
  //更新camera
  camera.aspect = window.innerWidth / window.innerHeight
  //更新摄像机投影矩阵
  camera.updateMatrix()
  //更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);
  //设置渲染器的像素比
  renderer.setPixelRatio(window.devicePixelRatio)
})

//双击控制切换全屏
window.addEventListener('dblclick', () => {
  //将画布dom全屏
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else
    renderer.domElement.requestFullscreen()
})


