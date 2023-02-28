import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { listContext } from '../../../context/listContext';
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const New = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();

  const onSubmit = (data) => {
    // Check if the new Pokemon is already present in pokemonList
    const pokemonAlreadyInList = pokemonList.find(
      (pokemon) => pokemon.name.toLowerCase() === data.name.toLowerCase()
    );
    if (!pokemonAlreadyInList) {
      // Add the new Pokemon to the list if it's not already present
      const types = [{ slot: 1, type: { name: data.typeOne } }, { slot: 2, type: { name: data.typeTwo } }];
      setPokemonList((prevPokemonList) => [...prevPokemonList, { id: data.id, name: data.name, sprites: data.image, types },]);
      reset();
    } else {
      alert("This Pokemon is already in your list!");
    }
  };

  const typeOne = watch("typeOne");
  const typeTwo = watch("typeTwo");

  const isSameType = typeOne && typeTwo && typeOne === typeTwo;

  const { pokemonList, setPokemonList } = useContext(listContext);

  return (
    <div className="formatForm-container">
      <h1>Create your own pokemon!!</h1>
      <form className="formatForm" onSubmit={handleSubmit(onSubmit)}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="id-addon">ID</InputGroup.Text>
          <Form.Control
            type="number"
            name="id"
            {...register("id", { required: true })}
            placeholder="Enter ID"
            aria-label="ID"
            aria-describedby="id-addon"
          />
          {errors.id && <p>This field is required</p>}
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="name-addon">Name</InputGroup.Text>
          <Form.Control
            type="text"
            name="name"
            {...register("name", { required: true, minLength: 3 })}
            placeholder="Enter name"
            aria-label="Name"
            aria-describedby="name-addon"
          />
          {errors.name?.type === "required" && <p>This field is required</p>}
          {errors.name?.type === "minLength" && (
            <p>The name must be at least 3 characters long</p>
          )}
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="image-addon">Image URL</InputGroup.Text>
          <Form.Control
            type="text"
            name="image"
            {...register("image", { required: true })}
            placeholder="Enter image URL"
            aria-label="Image URL"
            aria-describedby="image-addon"
          />
          {errors.image && <p>This field is required</p>}
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="typeOne-addon">Type 1</InputGroup.Text>
          <Form.Select
            name="typeOne"
            {...register("typeOne", { required: true })}
            aria-label="Type 1"
            aria-describedby="typeOne-addon"
          >
            <option value=""></option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
          </Form.Select>
          {errors.typeOne && <p>This field is required</p>}
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="typeTwo-addon">Type 2</InputGroup.Text>
          <Form.Select
            name="typeTwo"
            {...register("typeTwo")}
            aria-label="Type 2"
            aria-describedby="typeTwo-addon"
          >
            <option value=""></option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
          </Form.Select>
          {errors.typeTwo && <p>This field is required</p>}
          {isSameType && <p>Type 1 and Type 2 cannot be the same</p>}
        </InputGroup>
        <Button variant="info" type="submit" disabled={isSameType}>
          Create a Pokemon!
        </Button>
      </form>
    </div>
  );
};

export default New;

