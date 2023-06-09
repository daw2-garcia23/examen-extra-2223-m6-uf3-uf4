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
    <div class="col-4">
      <div class="card shadow mt-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-center">Stranger Thinks</h5>
        </div>
      </div>
    </div>
    <!-- card -->
    <div class="col-4">
      <div class="card shadow mt-2">
        <img
          src="https://i.blogs.es/7b5613/la-casa-de-papel-temporada-5/1366_2000.jpeg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-center">La casa de papel</h5>
        </div>
      </div>
    </div>
    <!-- card -->
    <div class="col-4">
      <div class="card shadow mt-2">
        <img
          src="https://itpeers.com/wp-content/uploads/2020/10/backmirror-scaled.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-center">Black Mirrow</h5>
        </div>
      </div>
    </div>
    <!-- card -->
    <div class="col-4">
      <div class="card shadow mt-2">
        <img
          src="https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2019/10/22/breakingBad.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-center">Breaking bad</h5>
        </div>
      </div>
    </div>
    <!-- card -->
    <div class="col-4">
      <div class="card shadow mt-2">
        <img
          src="https://www.elindependiente.com/wp-content/uploads/2021/08/the-crown-serie-netflix.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-center">The Crown</h5>
        </div>
      </div>
    </div>
  </div>
            
        </div>
        <!-- ficha ampliada -->
        <div class="col-6">
            <div class="card shadow mt-2">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h3>Stranger Thinks</h3>
                    <hr />
                    <p><strong>Año: </strong><span>2017</span></p>
                    <p>
                        <strong>Descripción: </strong>
                        <span>
                            Un grupo de niños se enfrenta a fenómenos sobrenaturales en un pequeño
                            pueblo de los años 80.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</main>`,
    script: ()=>{
        document.querySelector('#insertCard').innerHtml = fitxes.template
        fitxes.script()
    }
}