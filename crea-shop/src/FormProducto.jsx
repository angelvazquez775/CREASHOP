import React, { useState } from 'react';

function FormProducto({setFormProducto, setProductos, productos, producto,setProducto}) {

  const handleChange = (event) => {
    setProducto({
      ...producto,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    setFormProducto(false)
    event.preventDefault()
    setProductos([...productos, producto])
    setProducto({
      nombre: '',
      precio: '',
      descripcion: '',
      stock: ''
    })
  }

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="form">
        <h2>Agregar Producto</h2>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
        />
        <label htmlFor="precio">Precio:</label>
        <input
          type="number"
          name="precio"
          value={producto.precio}
          onChange={handleChange}
        />
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          name="descripcion"
          value={producto.descripcion}
          onChange={handleChange}
        />
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          name="stock"
          value={producto.stock}
          onChange={handleChange}
        />
        <button type="submit" onSubmit={() => handleSubmit()}>Guardar Producto</button>
      </form>
    </div>
  )
}

export default FormProducto