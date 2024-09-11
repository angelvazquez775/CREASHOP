function ProductCard ({producto, productos, setProductos}) {
    const handleDelete = () => {
        const productosActualizados = productos.filter(p => p !== producto)
        setProductos(productosActualizados)
      }
    return(
        <>
            <div className="producto-card">
                <h3 className="name-card">{producto.nombre}</h3>
                <p className="item-card">Precio: ${producto.precio}</p>
                <p className="item-card">Descripción: {producto.descripcion}</p>
                <p className="item-card">Stock: {producto.stock}</p>
                <button onClick={handleDelete} className="delete-btn">Eliminar</button>
            </div>
        </>
    )
}

export default ProductCard