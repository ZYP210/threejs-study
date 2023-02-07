// 用dat-gui 可视化操作栏编辑threejs图像
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from "dat.gui"
import gsap from "gsap"

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


//初始化 dat.gui
const gui = new dat.GUI()

gui.add(cube.position, "x").min(0).max(5).step(0.01).name('移动x').onChange(() => {
  console.log('值修改了');
}).onFinishChange(() => {
  console.log('完全停了');
})

//设置颜色
gui.addColor({ color: '#fff000' }, 'color').onChange((val) => {
  cube.material.color.set(val)
})

//设置选项框
gui.add(cube, 'visible').name('是否显示')

//设置按钮点击触发某个事件
const params = {
  fn() {
    gsap.to(cube.position, { x: 5, duration: 2, yoyo: true, repeat: -1 })
  }
}
gui.add(params, "fn").name('立方体运动')

//设置属性放文件夹里
const folder = gui.addFolder('设置立方体')
folder.add(cube.material, "wireframe")


console.log(cube);
