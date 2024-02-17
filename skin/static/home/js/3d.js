import * as THREE from '../../../node_modules/three/build/three.module.js'
// スクロールやドラッグで視点を操作できるように
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// 3dファイルを読み込めるように
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'



// canvas読み込み
const canvas = document.querySelector('canvas.project')


// シーンを定義
const scene = new THREE.Scene()


// 3dオブジェクトファイルを読み込むローダーを定義
const gltfLoader = new GLTFLoader()



// 3dファイルから3dオブジェクトを読み込む
gltfLoader.load(
    'home/models/alex.glb',
    (gltf) => {
        scene.add(gltf.scene)
        const portal = gltf.scene.children.find((child) => child.name === 'alex')
        portal.material = portalShader

    }
)


// ユーザー側でドラッグ等でカメラを動かせるようにする
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


// レンダリング
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    // 物体の輪郭がガクガクするのを抑える
    antialias: true
})


// loopという関数を各フレームで実行する無限ループ。
// モニターのフレームレートに関与せず、1フレームごとにレンダリングを行う関数を実行する。
const clock = new THREE.Clock()
const loop = () => {
    // シェーダーを動かす
    const elapsedTime = clock.getElapsedTime()
    portalShader.uniforms.uTime.value = elapsedTime
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
}


loop()