
import { header } from "./componentes/header";
import { series } from "./datos/series";
import home from "./vistas/home";


document.querySelector('main').innerHTML = home.template;
home.script();

document.querySelector('header').innerHTML = header.template;
header.script();






