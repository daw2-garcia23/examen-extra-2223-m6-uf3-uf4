import { fitxes } from "../componentes/fitxes"

export default {
    template: `<main class="container pt-5">
    <div class="row">
        <div class="col-12">
  <p class="text-end">Bienvenido <span>usuario@email.com</span></p>
            <h1 class="text-center mt-3 ">Series famosas de todos los tiempos</h1>
  <p class="text-center fs-4 p-3 bg-light border">Haz clic sobre cualquier ficha para mostrar toda la información en el panel derecho</p>
        </div>
        <div class="col-6">
  <div class="row" id="insertCard">
    <!-- card -->
    <div class="col-4" id="insertar">
    
    </div>

    </div>
</main>`,
    script: ()=>{
        document.querySelector('#insertar').innerHTML = fitxes.template
        fitxes.script()
    }
}