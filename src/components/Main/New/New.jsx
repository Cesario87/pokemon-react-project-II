import React from "react";
import { useForm } from "react-hook-form";

const PokemonForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const typeOne = watch("typeOne");
  const typeTwo = watch("typeTwo");

  const isSameType = typeOne && typeTwo && typeOne === typeTwo;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="id">ID</label>
      <input id="id" type="number" {...register("id", { required: true })} />
      {errors.id && <p>This field is required</p>}

      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        {...register("name", { required: true, minLength: 3 })}
      />
      {errors.name?.type === "required" && <p>This field is required</p>}
      {errors.name?.type === "minLength" && (
        <p>The name must be at least 3 characters long</p>
      )}

      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        type="text"
        {...register("image", { required: true })}
      />
      {errors.image && <p>This field is required</p>}

      <label htmlFor="typeOne">Type 1</label>
      <select id="typeOne" {...register("typeOne", { required: true })}>
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
      </select>
      {errors.typeOne && <p>This field is required</p>}

      <label htmlFor="typeTwo">Type 2</label>
      <select id="typeTwo" {...register("typeTwo")}>
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
      </select>
      {errors.typeTwo && <p>This field is required</p>}
      {isSameType && <p>Type 1 and Type 2 cannot be the same</p>}
      <button type="submit" disabled={isSameType}>
        Create Pokemon
      </button>
    </form>
  );
};

export default PokemonForm;

