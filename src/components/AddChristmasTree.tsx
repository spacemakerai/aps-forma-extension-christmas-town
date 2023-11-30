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

export default function SuperButton() {
  const superClick = async () => {
    console.log("click");
    const treeGeometry = new THREE.ConeGeometry(5, 10, 8);
    const treeMaterial = new THREE.MeshBasicMaterial({ color: 0x008000 });
    const tree = new THREE.Mesh(treeGeometry, treeMaterial);
    const position = tree.geometry.attributes.position.array as Float32Array;
    console.log(tree, tree.geometry.attributes.position.array);
    const color = getColorArray(position.length);
    Forma.render.addMesh({
      geometryData: { position, color },
    });
  };

  return (
    <div class="row">
      <weave-button variant={"solid"} onClick={superClick}>
        Add christmas tree
      </weave-button>
    </div>
  );
}
