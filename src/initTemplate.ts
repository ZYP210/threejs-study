import * as THREE from 'three';

//创建一个场景
const scene = new THREE.Scene();

//创建一个相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

//设置相机的位置并添加到场景中
camera.position.set(0, 0, 10)
scene.add(camera);

//创建物体

//创建几何体类型
const geometry = new THREE.BoxGeometry(1, 1, 1);
//创建几何体材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//根据几何体和材质创建物体
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//初始化渲染器
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera)

document.body.appendChild(renderer.domElement)

//添加辅助坐标系轴
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)


