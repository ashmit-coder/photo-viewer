import { styled } from "styled-components";
import Navbar from "../component/Navbar";
import SearchResult from "../component/SearchResult";
const Gallery = () => {
  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "5 Star",
      type: "5",
    },
    {
      name: "4 Star",
      type: "4",
    },
    {
      name: "3 Star",
      type: "3",
    },
    {
      name: "2 Star",
      type: "2",
    },
    {
      name: "1 Star",
      type: "1",
    },
  ];

  return (
    <>
      <Navbar />
      <FilterContainer>
        {filterBtns.map((value) => (
          <button key={value.name}>{value.name}</button>
        ))}
      </FilterContainer>
      <SearchResult />
    </>
  );
};

export default Gallery;

const FilterContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-top: 18px;

    button {
      padding: 6px 18px;
      font-size: 18px;
    }
`;
