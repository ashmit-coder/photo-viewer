import { useEffect, useState } from "react";
import { styled } from "styled-components";
import LikeButton from "./LikeButton";
import Rating from "./Rating";
import Bookmark from "./Bookmark";

const BASE_URL =
  "https://api.unsplash.com/photos/?client_id=iVi965qrhHnzaO-aw9yxicKfRTQvCGZUA5xsPlyinEY";

// eslint-disable-next-line react/prop-types
const SearchResult = () => {
  const [image, setImages] = useState(null);

  useEffect(() => {
    const FetchImages = async () => {
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setImages(json);
      } catch (error) {
        console.log(error);
      }
    };

    FetchImages();
  }, []);

  return (
    <Cards>
      {image?.map((imag) => (
        // eslint-disable-next-line react/jsx-key
        <Card>
          <img src={imag.urls.regular} alt={imag.alt_description} />
          <Buttons>
            <LikeButton />
            <Rating />
            <Bookmark />
          </Buttons>
        </Card>
      ))}
    </Cards>
  );
};

export default SearchResult;

const Cards = styled.section`
  height: calc(100vh-72px);
  margin-top: 36px;
  margin-bottom: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  width: 100%;
  justify-content: center;
`;

const Card = styled.section`
  img {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 400px;
    width: 400px;
    border: 2px solid black;
  }
`;
const Buttons = styled.section`
  display: flex;
  justify-content: space-between;
`;
