import { Forma } from "forma-embedded-view-sdk/auto";
import { useEffect, useState } from "preact/hooks";

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
    console.log(colorArray);
  }
  return colorArray;
};

export default function ColourBuildings() {
  const [buildingPaths, setBuildingPaths] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      Forma.geometry.getPathsByCategory({ category: "building" }).then(setBuildingPaths);
    };
    fetchData();
  }, []);

  const superClick = async () => {
    buildingPaths.forEach(async (path) => {
      const position = await Forma.geometry.getTriangles({ path });
      const color = getColorArray(position.length);
      Forma.render.updateMesh({ id: path, geometryData: { position, color } });
    });
  };

  return (
    <div class="row">
      <weave-button variant={"solid"} onClick={superClick}>
        Super button
      </weave-button>
    </div>
  );
}
