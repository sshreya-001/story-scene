function SceneCard({ scene }) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h3>{scene.text}</h3>
      {scene.image && (
        <img
          src={scene.image}
          alt="Generated Scene"
          style={{ width: "100%", marginTop: "10px", borderRadius: "10px" }}
        />
      )}
    </div>
  );
}

export default SceneCard;
