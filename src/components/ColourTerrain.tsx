import { Forma } from "forma-embedded-view-sdk/auto";
import styles from "../styles.module.css";

const ColourTerrain = () => {
  const superClick = async () => {
    // Create canvas
    const canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 1000;

    // Fill canvas with white color (snow)
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, 1000, 1000);

      // Add canvas as ground texture to position (0, 0) in the local coordinate system.
      // The texture will cover a 100x100 meter square area on the terrain,
      // with lower left corner in (x: -50, y: -50) and upper right corner in (x: 50, y: 50).
      await Forma.terrain.groundTexture.add({
        name: "addSnow",
        canvas,
        position: { x: 0, y: 0, z: 1 },
        scale: { x: 1, y: 1 },
      });
    }
  };

  return (
    <button onClick={superClick} className={styles.christmasButton}>
      Make it snow
    </button>
  );
};

export default ColourTerrain;
