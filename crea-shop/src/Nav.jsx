function Nav ({setEditor}) {
    return(
        <>
            <div className="nav-container">
                <h1 className="main-title">CREASHOP</h1>
                <div className="btn-container">
                    <h2 className="btn-text"
                        onClick={() => setEditor(true)}
                    >Crear tienda</h2>
                </div>
            </div>
        </>
    )
}

export default Nav