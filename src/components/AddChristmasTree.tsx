import { Forma } from "forma-embedded-view-sdk/auto";

export default function AddChristmasTree() {
  const superClick = async () => {
    // read glb file
    const blob = await fetch("./christmas_tree_(11).glb")
      .then((res) => res.blob())
      .then((blob) => blob.arrayBuffer());

    Forma.render.glb.add({ glb: blob });
  };

  return (
    <div class="row">
      <weave-button variant={"solid"} onClick={superClick}>
        Add christmas tree
      </weave-button>
    </div>
  );
}
