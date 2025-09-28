import React from "react";

function StoryBar({ stories, onSelect }) {
  return (
    <div className="story-bar">
      {stories.map((story, index) => (
        <div key={story.id} className="avatar" onClick={() => onSelect(index)}>
          <img src={story.avatar} alt={story.user} />
          <span>{story.user}</span>
        </div>
      ))}
    </div>
  );
}

export default StoryBar;