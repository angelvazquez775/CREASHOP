import { useState } from "react"
import Nav from "./Nav"
import Editor from "./Editor"

function App() {
  const [editor, setEditor] = useState(false)
  const [formProducto, setFormProducto] = useState(false)
  return (
    <>
      <Nav
        setEditor = {setEditor}
      ></Nav>
      {editor === true && <Editor
        setFormProducto = {setFormProducto}
        formProducto = {formProducto}
      ></Editor>}
    </>
  )
}

export default App
