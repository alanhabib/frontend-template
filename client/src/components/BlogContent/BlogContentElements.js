import styled from "styled-components";
import { lightText } from "../../assets/styles/styles";

const Main = styled.main.attrs((props) => ({
  background: props.background || undefined,
}))`
    padding: 2em 0;

h1 {
    width: 100%;
    color: $text-color;
    padding: 1.5em 0;
}

.featured-posts-container {
    display: flex;
}

.bg-white {
    background: white;
    }
}

@media screen and (max-width: 900px) {
 
    h1 {
        margin: 5;
        margin-block-start: 1.5em;
        margin-block-end: 1.5em;
    }

    .featured-posts-container {
        flex-direction: column;
    }


`;

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

const Row = styled.div`
  margin: 4em 20px;
`;

const PostGridSection = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-gap: 30px;
  grid-auto-rows: 1fr;
  padding-bottom: 50px;

  & figure {
    height: 100%;
    max-height: 280px;
  }

  & img {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    object-fit: cover;
    object-position: center center;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    max-height: 280px;
  }
`;

const PostGridContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorText = styled.p`
  color: ${lightText};

  & a {
    padding: 0 5px;
  }
`;

const DescriptionText = styled.p`
  font-size: 18px;
  font-weight: 400px;
  color: #555;
`;

const Masonry = styled.section`
  display: grid;
  grid-gap: 30px;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

const MixedStyles = styled.div`
  float: left;
  width: 100%;
  z-index: 10;
  font-weight: 300;
`;

const TagsContainer = styled(MixedStyles)`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 15px;
  margin-left: -1px;
  color: white;
`;

const Tags = styled.div`
  border-radius: 5px;
  padding: 4px 8px;
  margin-right: 5px;
`;

const MasonryPostsLink = styled.a`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  margin: 0 auto;
  min-height: 225px;

  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 10px 0;
    height: 300px;
  }
`;

const ImageText = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;

const ImageTitle = styled(MixedStyles)`
  font-size: 20px;
  margin-block-start: 0;
  margin-block-end: 10px;
  color: white;
`;

const ImageDate = styled(MixedStyles)`
  font-size: 18px;
  color: $text-light;
`;
const categoryColors = {
  "Tech Culture": "rgb(255,59,48)",
  "Tech News": "rgb(0,113,164)",
  "Brain Health": "rgb(255,45,85)",
  Vue: "rgb(52,199,89)",
  React: "rgb(64,156,255)",
  JavaScript: "rgb(255, 179, 64)",
  Cloud: "rgb(175,82,250)",
};

export {
  ImageText,
  MasonryPostsLink,
  DescriptionText,
  AuthorText,
  PostGridContainer,
  PostGridSection,
  categoryColors,
  Container,
  Row,
  Main,
  Masonry,
  TagsContainer,
  Tags,
  ImageTitle,
  ImageDate,
};
