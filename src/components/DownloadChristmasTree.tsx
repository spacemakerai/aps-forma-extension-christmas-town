
const onClick = () => {
  // Create a Christmas tree
/*   const treeGeometry = new THREE.ConeGeometry(5, 10, 8);
  const treeMaterial = new THREE.MeshBasicMaterial({ color: 0x008000 });
  const tree = new THREE.Mesh(treeGeometry, treeMaterial);

  // Create a scene and add the tree to it
  const scene = new THREE.Scene();
  scene.add(tree);

  // Export the scene as GLB
  const exporter = new GLTFExporter();
  exporter.parse(scene, function (gltf) {
    const glbData = JSON.stringify(gltf);
    const glbBlob = new Blob([glbData], { type: "application/octet-stream" });
    const glbUrl = URL.createObjectURL(glbBlob);

    // Download the GLB file
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = glbUrl;
    link.download = "christmas_tree.glb";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(glbUrl);
  });
};
 */
const DownloadChristmasTree = () => {
  return (
    <div class="row">
      <weave-button variant={"solid"} onClick={onClick}>
        Download Christmas tree
      </weave-button>
    </div>
  );
};

export default DownloadChristmasTree;
