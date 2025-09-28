import React, { useState } from "react";
import { stories } from "./storiesData";
import StoryBar from "./StoryBar";
import StoryViewer from "./StoryViewer";
import "./App.css";

function App() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  return (
    <div className="app">
      <h2>Stories</h2>
      <StoryBar stories={stories} onSelect={setActiveStoryIndex} />
      {activeStoryIndex !== null && (
        <StoryViewer
          story={stories[activeStoryIndex]}
          onNext={() => setActiveStoryIndex((i) => (i + 1) % stories.length)}
          onPrev={() => setActiveStoryIndex((i) => (i - 1 + stories.length) % stories.length)}
          onClose={() => setActiveStoryIndex(null)}
        />
      )}
    </div>
  );
}

export default App;