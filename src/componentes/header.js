import home from "../vistas/home"
import login from "../vistas/login"
import registro from "../vistas/registro"

export const header = {
    template: `
    <header class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand mb-0"><button id="home">2223 M6 UF3/UF4 </button>- Examen extraordinaria - (Alumnno: Joel García Manjón)</span>
        <form  class="d-flex">
          <input class="form-control me-2" placeholder="email@email.com">
          <button class="btn btn-outline-success" id="login">Login</button>
          <button class="btn btn-link" id="registro">Regístrate</button>
        </form>
      </div>
    </header>
    `,
    script: ()=>{

        //cargo la vista panel y su funcionalidad
        document.querySelector('#home').addEventListener("click", (e)=>{
            e.preventDefault()
            document.querySelector('main').innerHTML = home.template
            home.script()
          })
    
          //cargo la vista login y su funcionalidad
          document.querySelector('#login').addEventListener("click", (e)=>{
            e.preventDefault()
            document.querySelector('main').innerHTML = login.template
            login.script()
          })
  
          //cargo la vista registro y su funcionalidad
          document.querySelector('#registro').addEventListener("click", (e)=>{
            e.preventDefault()
            document.querySelector('main').innerHTML = registro.template
            registro.script()
          })
    }
}