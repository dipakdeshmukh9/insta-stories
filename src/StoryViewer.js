import React, { useEffect, useState } from "react";

function StoryViewer({ story, onNext, onPrev, onClose }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          onNext();
          return 0;
        }
        return p + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [story]);

  return (
    <div className="story-viewer">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <img src={story.content} alt="story" />
      <div className="controls">
        <button onClick={onPrev}>◀</button>
        <button onClick={onClose}>✖</button>
        <button onClick={onNext}>▶</button>
      </div>
    </div>
  );
}

export default StoryViewer;