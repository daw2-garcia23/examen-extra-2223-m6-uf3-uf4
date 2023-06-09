import { series } from "../datos/series"
import { header } from "./header";

export const fitxes={
    template: `<div id="mostrarCards">
    </div>`,
    script: ()=>{
        let html = ''
        series.forEach(element => {
            html += `
        <div class="card shadow mt-2">
            <img src="${element.imagen_url}" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-center">${element.nombre}</h5>
            </div>
        </div>
   `
     }
     );
     document.querySelector('#mostrarCards').innerHTML = html
        
    }
}