import React, { useState } from "react";
const ListaCategorias = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const categorias = [
    "Ropa",
    "Electrónica",
    "Hogar",
    "Deportes",
    "Jardin",
    "Escolar",
  ];

  const handleClickCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div>
      <h2>Economic Mer</h2>
      <ul>
        {categorias.map((categoria, index) => (
          <li
            key={index}
            onClick={() => handleClickCategoria(categoria)}
            className={
              categoria === categoriaSeleccionada ? "seleccionada" : ""
            }
          >
            {categoria}
          </li>
        ))}
      </ul>
      <p>Categoría seleccionada: {categoriaSeleccionada || "Ninguna"}</p>
    </div>
  );
};

export default ListaCategorias;
