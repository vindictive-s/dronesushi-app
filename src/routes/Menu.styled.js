import styled from "styled-components";

export const MenuContainer = styled.div`
  align-items: center;
  justify-content: center;
`;

export const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) );
  padding: 30px;
  align-items: center;
  justify-content: center;
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
`;

export const MenuItem = styled.div`
  height: 300px;
  width: 200px;
  border: 2px solid #2d2d2d;
  border-radius: 10px;
  padding: 10px;
  display: block;
  background: #fefefe;
`;

export const MenuImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 50%;
  border-radius: 5px;
  border: 1px solid #2d2d2d;
`;

export const MenuTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: left;
`;

export const MenuPrice = styled.h2`
  font-size: 1rem;
  background: #2d2d2d;
  padding: 5px;
  border-radius: 5px;
  color: #e2e2e2;
  margin-bottom: 5px;
  text-align: center;

  &:hover {
    background: #4d4d4d;
    cursor: pointer;
  }
`;

export const MenuDeal = styled.p`
  font-size: 0.8rem;
  color: #2d2d2d;
  text-align: center;
`;
