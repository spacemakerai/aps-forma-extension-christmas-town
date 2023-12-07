import AddMesh from "./components/AddMesh";
import AddStar from "./components/AddStar";
import ColourBuildings from "./components/ColourBuildings";
import ColourTerrain from "./components/ColourTerrain";
import styles from "./styles.module.css";

export default function App() {
  return (
    <>
      <h1 className={styles.header}>Try Santa Mode</h1>
      <ColourBuildings />
      <ColourTerrain />
      <AddMesh />
      <AddStar />
      <div className={styles.iframe}>
        <iframe
          src="https://player.vimeo.com/external/390553111.sd.mp4?s=28d0df90491d635000f2ecad8468a855b1b33ce8&amp;profile_id=164&amp;oauth2_token_id=57447761"
          width="100%"
          height="100%"
          style="position:absolute"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
          allow="autoplay"
        ></iframe>
      </div>
    </>
  );
}
