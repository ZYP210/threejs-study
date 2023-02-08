//轨道控制器：可以使得相机围绕目标进行轨道运动
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//创建一个场景
const scene = new THREE.Scene();

//创建一个相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//设置相机的位置并添加到场景中
camera.position.set(0, 0, 10);
scene.add(camera);
//导入纹理
const textureLoader = new THREE.TextureLoader();
const picTexture = textureLoader.load("/public/little.png");

//纹理属性

//纹理偏移量
// picTexture.offset.x = 0.5;
//旋转原点
// picTexture.center.set(0.5, 0.5);

//纹理的显示算法
//当一个纹素覆盖大于一个像素时，贴图将如何采样。默认值为THREE.LinearFilter， 它将获取四个最接近的纹素，并在他们之间进行双线性插值。 另一个选项是THREE.NearestFilter，它将使用最接近的纹素的值。
picTexture.minFilter = THREE.NearestFilter;
picTexture.magFilter = THREE.NearestFilter;

//创建物体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#fff000",
  map: picTexture,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//添加辅助坐标系轴
const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

//初始化渲染器
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();
