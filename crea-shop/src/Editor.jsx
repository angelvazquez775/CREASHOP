import { useState } from "react"
import FormProducto from "./FormProducto"
import ProductCard from "./ProductCard"
function Editor ({setFormProducto, formProducto}) {
    const [title, setTitle] = useState('Mi Tienda')
    const [productos, setProductos] = useState([])
    const [isEditingTitle, setIsEditingTitle] = useState(false)
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        stock: ''
      })
    
      const handleTitleClick = () => {
        setIsEditingTitle(!isEditingTitle)
      }
    
      const handleTitleChange = (e) => {
        setTitle(e.target.value)
      }
    
      const handleSaveTitle = () => {
        setIsEditingTitle(false)
      }

    return(
        <>  
            <h1 className="title">VISTA PREVIA</h1>
            <div className="editor">
                <h2 className="editor-title" onClick={handleTitleClick}>{
                    isEditingTitle ? (
                        <>
                          <input type="text" value={title} onChange={handleTitleChange} />
                          <button onClick={handleSaveTitle}>Guardar</button>
                        </>
                      ) : (
                        title
                      )
                }</h2>
                <div className="productos-principales">
                    {productos.map((producto, index) => (
                        <ProductCard key={index} producto={producto} productos={productos} setProductos={setProductos} />
                    ))}
                </div>
            </div>
            <div className="editor-btn-cont" onClick={() => setFormProducto(true)}>
                <h1 className="editor-btn-txt">Cargar producto +</h1>
            </div>
            {formProducto === true && <FormProducto
                setFormProducto={setFormProducto}
                setProductos={setProductos}
                productos={productos}
                producto={producto}
                setProducto={setProducto}
            ></FormProducto>}
        </>
    )
}

export default Editor