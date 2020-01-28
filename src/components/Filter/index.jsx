import React from "react";
import { CategoryFilters } from "../../actions/events";
import FilterEvent from "../../containers/FilterEvent";
import {
  Dropdown,
  InputGroup,
  Button,
  FormControl,
  ButtonGroup
} from "react-bootstrap";

const Filter = ({ categories }) => {
 
  return (
    <div className="filter">
      <InputGroup className="mb-3 container">
        <FormControl
          placeholder="Найти событие"
          aria-label="Найти событие"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <FilterEvent filter={CategoryFilters.SHOW_ALL} category="test">
        Сбросить фильтры
      </FilterEvent>
      <FilterEvent filter={CategoryFilters.SHOW_FAVORITE} category="test2">
        Избранные
      </FilterEvent>
      <div className="container d-flex justify-content-between">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Категории
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {categories.map((category, index) => (
              <Dropdown.Item key={index}>
                <FilterEvent
                  filter={CategoryFilters.SHOW_ACTIVE}
                  category={category}
                >
                  <Button className="button-hide " size="sm">
                    {category}
                  </Button>
                </FilterEvent>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-primary">Дешевые</Button>
          <Button variant="outline-primary">Дорогие</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Filter;
