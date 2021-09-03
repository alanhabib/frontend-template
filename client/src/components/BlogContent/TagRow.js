import React from "react";
import { categoryColors, Tags, TagsContainer } from "./BlogContentElements";

export default function TagRow({ tags }) {
  return (
    <TagsContainer className="tags-container">
      {tags.map((tag, ind) => (
        <Tags key={ind} style={{ backgroundColor: categoryColors[tag] }}>
          {tag.toUpperCase()}
        </Tags>
      ))}
    </TagsContainer>
  );
}
