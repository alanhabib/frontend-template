import React from "react";
import {
  ImageDate,
  ImageText,
  ImageTitle,
  MasonryPostsLink,
} from "../BlogContentElements";
import TagRow from "../TagRow";

export default function MasonryPost({ post, tagsOnTop }) {
  console.log("POST 11111: ", post.image.type);
  const windowWidth = window.innerWidth;
  const imageBackground = {
    backgroundImage: `url("${post.image.type}")`,
  };

  const style =
    windowWidth > 900 ? { ...imageBackground, ...post.style } : imageBackground;

  return (
    <MasonryPostsLink style={style} href={post.link}>
      <ImageText
        style={{ justifyContent: tagsOnTop ? "space-between" : "flex-end" }}
      >
        <TagRow tags={post.categories} />
        <div>
          <ImageTitle className="image-title">{post.title}</ImageTitle>
          <ImageDate className="image-date">{post.date}</ImageDate>
        </div>
      </ImageText>
    </MasonryPostsLink>
  );
}
