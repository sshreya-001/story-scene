function StoryInput({ story, setStory, generateScenes }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <textarea
        rows="5"
        placeholder="Write your story here..."
        value={story}
        onChange={(e) => setStory(e.target.value)}
        style={{ width: "100%", padding: "10px" }}
      />

      <button
        onClick={generateScenes}
        style={{ marginTop: "10px", padding: "10px 20px" }}
      >
        Generate Scenes
      </button>
    </div>
  );
}

export default StoryInput;
