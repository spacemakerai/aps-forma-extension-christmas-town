import AddChristmasTree from "./components/AddChristmasTree";
import ColourBuildings from "./components/ColourBuildings";
import ColourTerrain from "./components/ColourTerrain";
import DownloadChristmasTree from "./components/DownloadChristmasTree";

export default function App() {
  return (
    <>
      <h1>Try a fun town</h1>
      <ColourBuildings />
      <DownloadChristmasTree />
      <AddChristmasTree />
      <ColourTerrain />
    </>
  );
}
