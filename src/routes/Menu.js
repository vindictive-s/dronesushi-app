import React from "react";
import { useState } from "react";
import Filter from "../components/Filter";
import {
  MenuContainer,
  MenuWrapper,
  MenuItem,
  MenuImg,
  MenuTitle,
  MenuPrice,
  MenuDeal,
} from "./Menu.styled";
import { Data } from "./MenuData";

const Menu = () => {
  const [category, setCategory] = useState(Data);
  const [filtered, setFiltered] = useState(Data);
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="menu">
      <Filter
        category={category}
        setFiltered={setFiltered}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <MenuContainer>
        <MenuWrapper>
          {filtered.map((item, index) => {
            return (
              <MenuItem key={index}>
                <MenuImg src={item.image} alt="" />
                <MenuTitle>{item.title}</MenuTitle>
                <MenuPrice>
                  {item.price}
                </MenuPrice>
                <MenuDeal>{item.deal}</MenuDeal>
              </MenuItem>
            );
          })}
        </MenuWrapper>
      </MenuContainer>
    </div>
  );
};

export default Menu;
