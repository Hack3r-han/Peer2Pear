
function Form () {
    return (
      <div>
        <h1>Form</h1>
       <form>
        <label> Nombre del Producto:</label>
          <input type="text"/>
        <label> Precio del Producto:</label>
        <input type="text"/>
        <button type="submit">Agregar Producto</button>
        <label> Descripción del Producto:</label>
        <label>Image</label>
        <input type="file" />
      </form>
      </div>
    )
  }

  export default Form