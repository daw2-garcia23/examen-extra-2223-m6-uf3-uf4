(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const series = [
  {
    "nombre": "Stranger Things",
    "año": 2016,
    "descripcion": "Un grupo de niños se enfrenta a fenómenos sobrenaturales en un pequeño pueblo de los años 80.",
    "imagen_url": "https://upload.wikimedia.org/wikipedia/en/6/6e/Stranger_Things_characters.png"
  },
  {
    "nombre": "La Casa de Papel",
    "año": 2017,
    "descripcion": "Un enigmático personaje llamado 'El Profesor' recluta a ocho personas para llevar a cabo un ambicioso plan: atracar la Casa de la Moneda de España.",
    "imagen_url": "https://i.blogs.es/7b5613/la-casa-de-papel-temporada-5/1366_2000.jpeg"
  },
  {
    "nombre": "Black Mirror",
    "año": 2011,
    "descripcion": "Una serie antológica que explora la relación entre la tecnología y la sociedad, presentando historias oscuras y distópicas.",
    "imagen_url": "https://itpeers.com/wp-content/uploads/2020/10/backmirror-scaled.jpg"
  },
  {
    "nombre": "Breaking Bad",
    "año": 2008,
    "descripcion": "Un profesor de química diagnosticado con cáncer se convierte en un despiadado fabricante y vendedor de metanfetaminas para asegurar el futuro financiero de su familia.",
    "imagen_url": "https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2019/10/22/breakingBad.jpg"
  },
  {
    "nombre": "The Crown",
    "año": 2016,
    "descripcion": "La serie sigue la vida de la Reina Isabel II y los eventos históricos que tuvieron lugar durante su reinado.",
    "imagen_url": "https://www.elindependiente.com/wp-content/uploads/2021/08/the-crown-serie-netflix.jpg"
  }
];
const fitxes = {
  template: `<div id="mostrarCards">
    </div>`,
  script: () => {
    let html = "";
    series.forEach(
      (element) => {
        html += `
        <div class="card shadow mt-2">
            <img src="${element.imagen_url}" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-center">${element.nombre}</h5>
            </div>
        </div>
   `;
      }
    );
    document.querySelector("#mostrarCards").innerHTML = html;
  }
};
const home$1 = {
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
  script: () => {
    document.querySelector("#insertar").innerHTML = fitxes.template;
    fitxes.script();
  }
};
const login$1 = {
  template: `<div class="pt-5">
    <h1 class="w-100 text-center">Login</h1>
    <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
      <label for="email" class="mt-2 form-label">User: </label>
      <input id="inputEmail" type="text" class="form-control" placeholder="usuario@mail.com">

      <label for="pass" class="mt-2 form-label">Contraseña: </label>
      <input id="inputPassword" type="password" class="form-control">

      <input type="text" class="mt-4 w-100 btn btn-primary" value="Entrar" id="enviar">
    </form>
  </div>`,
  script: async () => {
    document.querySelector("#enviar").addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        let usuarioLogin = {
          //recojo los valores de los inputs y los guardo en un objeto 
          email: document.querySelector("#inputEmail").value,
          password: document.querySelector("#inputPassword").value
        };
        const usuarioLoggeado = await User.login(usuarioLogin);
        if (usuarioLoggeado) {
          document.querySelector("#emailUsuario").innerHTML = usuarioLoggeado.email;
          document.querySelector("#login").innerHTML = "LOGOUT";
          document.querySelector("#login").value = "logout";
        }
        alert("Bienvenido!!!");
        document.querySelector("main").innerHTML = login.template;
        login.script();
      } catch (error) {
        alert(error);
      }
    });
  }
};
const registro = {
  template: `<div class="pt-5">
                <h1 class="w-100 text-center">Registro</h1>
                <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
                <label for="email" class="mt-2 form-label">User: </label>
                <input  id="inputUsuario" type="text" class="form-control" placeholder="usuario@mail.com">

                <label for="pass" class="mt-2 form-label">Contraseña: </label>
                <input id="inputPassword" type="password" class="form-control">

                <input type="text" class="mt-4 w-100 btn btn-primary" value="Registrar" id="enviar">
                </form>
            </div>`,
  script: async () => {
    document.querySelector("#enviar").addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        let usuarioRegistro = {
          //recojo los valores de los inputs y los guardo en un objeto 
          email: document.querySelector("#inputUsuario").value,
          password: document.querySelector("#inputPassword").value
        };
        const nuevoUsuario = await User.create(usuarioRegistro);
        console.log(nuevoUsuario);
        alert("Usuario creado correctamente, antes de loggearte confirma el mail, Gracias!");
        document.querySelector("main").innerHTML = home.template;
        home.script();
      } catch (error) {
        alert(error);
      }
    });
  }
};
const header = {
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
  script: () => {
    document.querySelector("#home").addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("main").innerHTML = home$1.template;
      home$1.script();
    });
    document.querySelector("#login").addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("main").innerHTML = login$1.template;
      login$1.script();
    });
    document.querySelector("#registro").addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("main").innerHTML = registro.template;
      registro.script();
    });
  }
};
document.querySelector("main").innerHTML = home$1.template;
home$1.script();
document.querySelector("header").innerHTML = header.template;
header.script();
