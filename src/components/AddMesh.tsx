import { Forma } from "forma-embedded-view-sdk/auto";
import * as THREE from "three";
const CHRISTMAS_PALETT = ["#D11919", "#CC0000", "#800000", "#228B22", "#008000", "#006400"];

function hexColorToRGB(color: string) {
  return [
    parseInt(color.slice(1, 3), 16),
    parseInt(color.slice(3, 5), 16),
    parseInt(color.slice(5, 7), 16),
    255,
  ];
}

const getColorArray = (triangleLength: number) => {
  const colorArray = new Uint8Array((triangleLength / 3) * 4);
  const color = hexColorToRGB(
    CHRISTMAS_PALETT[Math.floor(Math.random() * CHRISTMAS_PALETT.length)],
  );
  for (let i = 0; i < colorArray.length; i += 4) {
    colorArray.set(color, i);
  }
  return colorArray;
};

function AddMesh() {
  const superClick = async () => {
    // Create a Christmas tree
    const treeGeometry = new THREE.ConeGeometry(5, 20, 32);
    const treeMaterial = new THREE.MeshBasicMaterial({ color: 0x008000 });
    const tree = new THREE.Mesh(treeGeometry, treeMaterial);

    const bufferGeo = new THREE.BufferGeometry();
    bufferGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(tree.geometry.attributes.position.array, 3),
    );

    const geometry = new THREE.BoxGeometry(1, 1, 1); // Set the width, height, and depth of the box
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Set the color or other properties

    const mesh = new THREE.Mesh(bufferGeo, material);

    const position = mesh.geometry.attributes.position.array as Float32Array;
    const color = getColorArray(position.length);
    console.log(position, color, position.length / 3, color.length / 4);
    Forma.render.addMesh({
      geometryData: { position, color },
    });
  };
  return (
    <div class="row">
      <weave-button variant={"solid"} onClick={superClick}>
        Add mesh
      </weave-button>
    </div>
  );
}

export default AddMesh;
