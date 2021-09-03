import React from "react";
import { MasonryPost } from "./MasonryPost";
import { Masonry } from "./BlogContentElements";

export default function PostMasonry({ posts, columns, tagsOnTop }) {
  return (
    <Masonry
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))` }}
    >
      {posts?.map((post, index) => (
        <MasonryPost {...{ post, index, tagsOnTop, key: index }} />
      ))}
    </Masonry>
  );
}
