import { Forma } from "forma-embedded-view-sdk/auto";
import { useEffect, useState } from "preact/hooks";

// const CHRISTMAS_PALETT = ["#ffffff"];

// function hexColorToRGB(color: string) {
//   return [
//     parseInt(color.slice(1, 3), 16),
//     parseInt(color.slice(3, 5), 16),
//     parseInt(color.slice(5, 7), 16),
//     255,
//   ];
// }

// takes in list of vertecies
// add white colours based on the z value
const getColorArray = (position: Float32Array) => {
  const colorArray = new Uint8Array((position.length / 3) * 4);
  const zCoordinates = position.filter((_, index) => index % 3 === 2);
  const maxZ = Math.max(...zCoordinates);
  const minZ = Math.min(...zCoordinates);
  //   const color = hexColorToRGB(
  //     CHRISTMAS_PALETT[Math.floor(Math.random() * CHRISTMAS_PALETT.length)],
  //   );
  for (let i = 0; i < colorArray.length; i += 4) {
    const zValue = position[(i / 4) * 3 + 2];
    const ratio = (zValue - minZ) / (maxZ - minZ);
    const colour = [200 + 55 * ratio, 200 + 55 * ratio, 200 + 55 * ratio, 255];
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
    <div style={{ background: "white", colour: "black"}}>
      <weave-button variant={"solid"} onClick={superClick} >
        Make it snow 
      </weave-button>
    </div>
  );
}

export default ColourTerrain;