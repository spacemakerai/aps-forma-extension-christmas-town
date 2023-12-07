import { Forma } from "forma-embedded-view-sdk/auto";
import { useEffect, useState } from "preact/hooks";
import styles from "../styles.module.css";

const getColorArray = (position: Float32Array) => {
  const colorArray = new Uint8Array((position.length / 3) * 4);
  const zCoordinates = position.filter((_, index) => index % 3 === 2);
  const maxZ = Math.max(...zCoordinates);
  const minZ = Math.min(...zCoordinates);

  for (let i = 0; i < colorArray.length; i += 4) {
    const zValue = position[(i / 4) * 3 + 2];
    const ratio = (zValue - minZ) / (maxZ - minZ);
    const colour = [180 + 65 * ratio, 180 + 65 * ratio, 180 + 65 * ratio, 255];
    colorArray.set(colour, i);
  }
  return colorArray;
};

const ColourTerrain = () => {
  const [buildingPaths, setBuildingPaths] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      Forma.geometry.getPathsByCategory({ category: "terrain" }).then(setBuildingPaths);
    };
    fetchData();
  }, []);

  const superClick = async () => {
    buildingPaths.forEach(async (path) => {
      const position = await Forma.geometry.getTriangles({ path });
      const color = getColorArray(position);
      Forma.render.updateMesh({ id: path, geometryData: { position, color } });
    });
  };

  return (
    <button onClick={superClick} className={styles.christmasButton}>
      Make it snow
    </button>
  );
};

export default ColourTerrain;
