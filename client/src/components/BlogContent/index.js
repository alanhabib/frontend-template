import React from "react";
import { Container, Main, Row } from "./BlogContentElements";
import PostMasonry from "./PostMasonry";
import trending from "../../assets/mocks/trending";
import featured from "../../assets/mocks/featured";
import { MasonryPost } from "./MasonryPost";
import PostGrid from "./PostGrid";

const trendingConfig = {
  1: {
    gridArea: "1 / 2 / 3 / 3",
  },
};

const featuredConfig = {
  0: {
    gridArea: "1 / 1 / 2 / 3",
    height: "300px",
  },
  1: {
    height: "300px",
  },
  3: {
    height: "630px",
    marginLeft: "30px",
    width: "630px",
  },
};

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index];
    console.log("CONFIG: ", post.style);
    post.author = "Miguel Coder";
    post.description =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.";
  });
};

const recentPosts = [...trending, ...featured, ...featured];
mergeStyles(featured, featuredConfig);
mergeStyles(trending, trendingConfig);

const lastPost = featured.pop();
const BlogContent = () => {
  return (
    <Main>
      <Container>
        <Row>
          <h2>Blog</h2>
          <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
          <MasonryPost post={lastPost} tagsOnTop={true} />
        </Row>
      </Container>
      <Container>
        <Row>
          <h1>Recent Posts</h1>
          <PostGrid posts={recentPosts} />
        </Row>
      </Container>
      <Container>
        <Row>
          <PostMasonry posts={trending} columns={3} />
        </Row>
      </Container>
    </Main>
  );
};

export default BlogContent;
