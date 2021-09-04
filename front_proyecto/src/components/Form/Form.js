const Form = () => {

    // const prevent = (e) => {
    //   e.preventDefault()
    //   console.log(e)
    // }
  
    return (
      <div>
        <form action="http://localhost:8000/api/products" method="POST">

          <div className="form-group">
            <label htmlFor="name">Nombre: </label>
            <input className="form-control" type="text" id='name' name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción: </label>
            <input className="form-control" type="text" id='description' name="description" required />
          </div>
  
          <div className="form-group">
            <label htmlFor="price">Precio: </label>
            <input className="form-control" type="number" id="price" name="price" required />
          </div>

          <div className="form-group">
            <label htmlFor="stock">Stock: </label>
            <input className="form-control" type="number" id="stock" name="stock" required />
          </div>
  
          <div className="form-group">
            <label htmlFor="thumbnail">Foto: </label>
            <input className="form-control" type="text" id="thumbnail" name="thumbnail" required />
          </div>

          <div className="form-group">
            <label htmlFor="code">Código: </label>
            <input className="form-control" type="number" id="code" name="code" required />
          </div>
  
          <button type="submit" className="btn btn-success">Enviar</button>
  
        </form>
      </div>
    )
  }
  
  export default Form