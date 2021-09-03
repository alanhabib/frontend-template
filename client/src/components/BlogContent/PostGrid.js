import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Pagination } from "antd";
import TagRow from "./TagRow";
import SvgIcon from "../Utils/SvgTool/SvgIcon";
import {
  PostGridSection,
  PostGridContainer,
  AuthorText,
  DescriptionText,
} from "./BlogContentElements";

export default function PostGrid({ posts }) {
  const [pageSize, setPageSize] = useState(9);
  const [current, setCurrent] = useState(1);

  const paginatedPosts = useMemo(() => {
    const lastIndex = current * pageSize;
    const firstIndex = lastIndex - pageSize;

    return posts.slice(firstIndex, lastIndex);
  }, [current, pageSize, posts]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [current, pageSize]);

  return (
    <section className="grid-pagination-container">
      <PostGridSection>
        {paginatedPosts.map((post, index) => {
          return (
            <PostGridContainer key={index}>
              <figure>
                <Link to={`/post/${post?.id}`}>
                  <SvgIcon Icon={post.image.type} width={200} />
                </Link>
              </figure>
              <TagRow tags={post.categories} />
              <h2>{post.title}</h2>
              <AuthorText>
                <span>
                  By:
                  <Link to={`/authors/${post.author}`}>{post.author}</Link>
                </span>
                <span>- {post.date}</span>
              </AuthorText>
              <DescriptionText>{post.description}</DescriptionText>
              <Link to={post.link}>Read More...</Link>
            </PostGridContainer>
          );
        })}
      </PostGridSection>
      {/* <Pagination
        simple
        showSizeChanger
        onShowSizeChange={setPageSize}
        pageSize={pageSize}
        total={posts.length}
        defaultCurrent={current}
        onChange={setCurrent}
      /> */}
    </section>
  );
}
