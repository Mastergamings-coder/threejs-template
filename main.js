import * as THREE from "three";
function main() {
  const canvas = document.querySelector("#MyCanvas");
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 4;

  const scene = new THREE.Scene();

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const boxWidth1 = 2;
  const boxHeight1 = 2;
  const boxDepth1 = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  const geometry1 = new THREE.BoxGeometry(boxWidth1, boxHeight1, boxDepth1);
  const material = new THREE.MeshPhongMaterial({ color: 0x00ffff });
  const material1 = new THREE.MeshPhongMaterial({ color: 0xff0000 });

  const cube = new THREE.Mesh(geometry, material);
  const cube1 = new THREE.Mesh(geometry1, material1);
  cube1.position.x = -3;

  const color = 0xffffff;
  const intensity = 3;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 3, 4);
  scene.add(light);
  scene.add(cube);
  scene.add(cube1);

  requestAnimationFrame(render);

  function render(time) {
    time *= 0.001; // convert time to seconds

    cube.rotation.x = time;
    cube.rotation.y = time;
    cube1.rotation.x = -1 * time;
    cube1.rotation.y = -1 * time;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
}

main();
