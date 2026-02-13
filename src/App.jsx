// import React, { useState } from "react";
// import "./App.css";
// import logo from "./assets/eLogo.png";

// function App() {
//   const [story, setStory] = useState("");
//   const [genre, setGenre] = useState("Fantasy");
//   const [language, setLanguage] = useState("english");
//   const [enhancedStory, setEnhancedStory] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const enhanceStory = async () => {
//     if (!story.trim()) return;

//     try {
//       setLoading(true);
//       setEnhancedStory("");
//       const response=await fetch("https://story-scene.onrender.com",{
//       // const response = await fetch("http://localhost:5000/enhance-story", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           story: story,
//           tone: genre,
//           language: language,
//         }),
//       });

//       const reader = response.body.getReader();
//       const decoder = new TextDecoder("utf-8");

//       while (true) {
//         const { done, value } = await reader.read();
//         if (done) break;

//         const chunk = decoder.decode(value);
//         setEnhancedStory((prev) => prev + chunk);
//       }
//     } catch (error) {
//       console.error("Frontend Error:", error);
//       setEnhancedStory("Failed to connect to server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(enhancedStory);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="app-container">
//       <div className="light-wave wave1"></div>
//       <div className="light-wave wave2"></div>

//       <header className="header">
//         <div className="header-title-wrapper">
//           <img src={logo} alt="Enhancer Logo" className="header-logo" />
//         </div>
//       </header>

//       <div className="main-wrapper">
//         <div className="card-container">

//           {/* INPUT CARD */}
//           <div className="card input-card">
//             <h2>WRITE YOUR IDEAS✒️</h2>

//             {/* DROPDOWN ROW */}
//             <div className="dropdown-row">

//               <select
//                 className="genre-select"
//                 value={genre}
//                 onChange={(e) => setGenre(e.target.value)}
//               >
//                 <option value="Fantasy">Fantasy</option>
//                 <option value="Horror">Horror</option>
//                 <option value="Romance">Romance</option>
//                 <option value="Sci-Fi">Sci-Fi</option>
//                 <option value="Mystery">Mystery</option>
//               </select>

//               <select
//                 className="genre-select"
//                 value={language}
//                 onChange={(e) => setLanguage(e.target.value)}
//               >
//                 <option value="english">English</option>
//                 <option value="hindi">Hindi</option>
//                 <option value="hinglish">Hinglish</option>
//                 <option value="auto">Auto Detect</option>
//               </select>

//             </div>

//             <textarea
//               placeholder="Enter your thoughts and ideas here..."
//               value={story}
//               onChange={(e) => setStory(e.target.value)}
//             />

//             <button onClick={enhanceStory}>
//               {loading ? "Enhancing..." : "Enhance Story"}
//             </button>
//           </div>

//           <div className="divider"></div>

//           {/* OUTPUT CARD */}
//           <div className="card output-card">
//             <h2>✨ENHANCED VERSION✨</h2>

//             <div className="output-content">
//               {enhancedStory ||
//                 (loading ? "" : "Your enhanced story will appear here...")}
//             </div>

//             {enhancedStory && (
//               <button
//                 onClick={copyToClipboard}
//                 style={{ marginTop: "15px" }}
//               >
//                 {copied ? "Copied!" : "Copy Story"}
//               </button>
//             )}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



























































import React, { useState } from "react";
import "./App.css";
import logo from "./assets/eLogo.png";

function App() {
  const [story, setStory] = useState("");
  const [genre, setGenre] = useState("Fantasy");
  const [language, setLanguage] = useState("english");
  const [enhancedStory, setEnhancedStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const enhanceStory = async () => {
    if (!story.trim()) return;

    try {
      setLoading(true);
      setEnhancedStory("");

      const response = await fetch(
        "https://story-scene.onrender.com/enhance-story",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ story, tone: genre, language }),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        setEnhancedStory((prev) => prev + chunk);
      }
    } catch (error) {
      console.error("Frontend Error:", error);
      setEnhancedStory("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(enhancedStory);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="app-container">
      <div className="light-wave wave1"></div>
      <div className="light-wave wave2"></div>

      {/* HEADER */}
      <header className="header">
        <div className="header-title-wrapper">
          <img src={logo} alt="Enhancer Logo" className="header-logo" />
        </div>
      </header>

      {/* MAIN */}
      <div className="main-wrapper">
        <div className="card-container">

          {/* INPUT CARD */}
          <div className="card input-card">
            <h2>WRITE YOUR IDEAS ✒️</h2>

            {/* DROPDOWN ROW */}
            <div className="dropdown-row">
              <select
                className="genre-select"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Mystery">Mystery</option>
              </select>

              <select
                className="genre-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="hinglish">Hinglish</option>
                <option value="auto">Auto Detect</option>
              </select>
            </div>

            {/* TEXTAREA */}
            <textarea
              placeholder="Enter your thoughts and ideas here..."
              value={story}
              onChange={(e) => setStory(e.target.value)}
            />

            <button onClick={enhanceStory}>
              {loading ? "Enhancing..." : "Enhance Story"}
            </button>
          </div>

          <div className="divider"></div>

          {/* OUTPUT CARD */}
          <div className="card output-card">
            <h2>✨ ENHANCED VERSION ✨</h2>

            <div className="output-content">
              {enhancedStory || (loading ? "" : "Your enhanced story will appear here...")}
            </div>

            {enhancedStory && (
              <button onClick={copyToClipboard} style={{ marginTop: "15px" }}>
                {copied ? "Copied!" : "Copy Story"}
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;