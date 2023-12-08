import { Forma } from "forma-embedded-view-sdk/auto";
import { Transform } from "forma-embedded-view-sdk/dist/internal/scene/render";
import * as THREE from "three";
import styles from "../styles.module.css";
const CHRISTMAS_PALETT = ["#228B22", "#008000", "#006400"];

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
    const treeGeometry = new THREE.ConeGeometry(6, 24, 32).toNonIndexed();
    const treeMaterial = new THREE.MeshBasicMaterial({ color: 0x008000 });
    const tree = new THREE.Mesh(treeGeometry, treeMaterial);

    const position = tree.geometry.attributes.position.array as Float32Array;
    const color = getColorArray(position.length);
    const x = 250 - Math.random() * 500;
    const y = 250 - Math.random() * 500;
    const elevation = await Forma.terrain.getElevationAt({ x, y });
    const translationMatrix = new THREE.Matrix4().makeTranslation(x, y, elevation + 12);
    const rotationMatrix = new THREE.Matrix4().makeRotationX(Math.PI / 2);
    const result = translationMatrix.multiply(rotationMatrix);
    Forma.render.addMesh({
      geometryData: { position, color },
      transform: result.elements as Transform,
    });
  };

  return (
    <button onClick={superClick} className={styles.christmasButton}>
      Add christmas tree
    </button>
  );
}

export default AddMesh;
