import AddChristmasTree from "./components/AddChristmasTree";
import AddMesh from "./components/AddMesh";
import ColourBuildings from "./components/ColourBuildings";
import ColourTerrain from "./components/ColourTerrain";
import styles from "./styles.module.css";
// import DownloadChristmasTree from "./components/DownloadChristmasTree";

export default function App() {
  return (
    <>
      <h1 className={styles.header}>Try a Christmas town</h1>
      <ColourBuildings />
      {/* <DownloadChristmasTree /> */}
      <AddChristmasTree />
      <ColourTerrain />
      <AddMesh />
      <div style="width:100%;height:0;padding-bottom:56%;position:relative;">
        <iframe
          src="https://giphy.com/embed/ZHXz9MZbJI1YA"
          width="100%"
          height="100%"
          style="position:absolute"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p></p>
      {/* <FireplaceSVG /> */}
    </>
  );
}
