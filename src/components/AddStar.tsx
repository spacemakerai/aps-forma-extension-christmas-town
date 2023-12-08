import { Forma } from "forma-embedded-view-sdk/auto";
import { Transform } from "forma-embedded-view-sdk/dist/internal/scene/render";
import * as THREE from "three";
import styles from "../styles.module.css";
const CHRISTMAS_PALETT = ["#faab01", "#faf201"];

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

function AddStar() {
  const superClick = async () => {
    const starShape = new THREE.Shape();
    starShape.moveTo(0, 0);
    for (let i = 0; i < 10; i++) {
      const radius = i % 2 === 0 ? 2 : 5;
      const angle = (i / 10) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      i === 0 ? starShape.moveTo(x, y) : starShape.lineTo(x, y);
    }
    starShape.closePath();

    const extrusionSettings = {
      steps: 1,
      depth: 0.2,
      bevelEnabled: false,
    };

    const starGeometry = new THREE.ExtrudeGeometry(starShape, extrusionSettings);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const starMesh = new THREE.Mesh(starGeometry, starMaterial);

    const position = starMesh.geometry.attributes.position.array as Float32Array;
    const color = getColorArray(position.length);
    const x = 250 - Math.random() * 500;
    const y = 250 - Math.random() * 500;
    const elevation = await Forma.terrain.getElevationAt({ x, y });
    const translationMatrix = new THREE.Matrix4().makeTranslation(
      x,
      y,
      elevation + 50 + 40 * Math.random(),
    );
    const rotationMatrix = new THREE.Matrix4().makeRotationX(-Math.PI / 2);
    translationMatrix.multiply(rotationMatrix);
    Forma.render.addMesh({
      geometryData: { position, color },
      transform: translationMatrix.elements as Transform,
    });
  };

  return (
    <button onClick={superClick} className={styles.christmasButton}>
      Add star
    </button>
  );
}

export default AddStar;
