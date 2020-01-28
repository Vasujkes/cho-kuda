import React from "react";
import { CategoryFilters } from "../../actions/events";
import FilterEvent from "../../containers/FilterEvent";
import classNames from "classnames";
import {
  Dropdown,
  InputGroup,
  Button,
  FormControl,
  ButtonGroup
} from "react-bootstrap";

const Filter = ({ categories, loading, sortEvents, sort, fav }) => {
  console.log(fav);
  return (
    <div className="filter">
      <InputGroup className="mb-3 container">
        <FormControl
          placeholder="Найти событие"
          aria-label="Найти событие"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

      <div className="container d-flex justify-content-start">
        <FilterEvent filter={CategoryFilters.SHOW_ALL} category="test">
          <Button
            variant="btn btn-outline-info btn-rounded waves-effect"
            size="sm"
            className="mr-2 mb-3"
          >
            Сбросить фильтры
          </Button>
        </FilterEvent>
        <FilterEvent filter={CategoryFilters.SHOW_FAVORITE} category="test2">
          <Button
            variant="btn btn-outline-info btn-rounded waves-effect"
            size="sm"
            className={classNames({ invisible: fav === 0 })}
          >
            Избранное: <span className="badge badge--info">{fav}</span>
          </Button>
        </FilterEvent>
      </div>

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
          <Button
            variant="outline-primary "
            className={classNames("mr-2", { active: sort === "asc" })}
            onClick={() => sortEvents("asc")}
          >
            Дешевые
          </Button>
          <Button
            variant="outline-primary"
            className={classNames({ active: sort === "desc" })}
            onClick={() => sortEvents("desc")}
          >
            Дорогие
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Filter;
