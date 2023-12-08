import AddMesh from "./components/AddMesh";
import AddStar from "./components/AddStar";
import ColourBuildings from "./components/ColourBuildings";
import ColourTerrain from "./components/ColourTerrain";
import styles from "./styles.module.css";
import video from "./FireplaceMute.mp4";

export default function App() {
  return (
    <>
      <h1 className={styles.header}>Try Santa Mode</h1>
      <ColourBuildings />
      <ColourTerrain />
      <AddMesh />
      <AddStar />
      <video autoplay loop className={styles.video}>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}
