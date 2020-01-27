import React from "react";
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
      <div className="container d-flex justify-content-between">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Категории
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {categories.map((category, index) => (
              <Dropdown.Item key={index}>{category} </Dropdown.Item>
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
