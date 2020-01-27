import React from "react";
import {
  Dropdown,
  InputGroup,
  Button,
  FormControl,
  ButtonGroup
} from "react-bootstrap";

const Filter = ({ categories }) => {
  console.log(categories);
  return (
    <div className="filter">
      <InputGroup className="mb-3 container">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
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
              <Dropdown.Item key={category.index}>{category} </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-primary">Больше</Button>
          <Button variant="outline-primary">Меньше</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Filter;
