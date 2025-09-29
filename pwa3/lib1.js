// lib1.js
// http://localhost/pwasd25/index.html?n=1&d=4
const params = new URLSearchParams(window.location.search);
const n = params.get('n');
const d = params.get('d');
class Quickchart {
    constructor(d) {
        this.d = d;
    }
    crearCadunos() {
        // Genera tantos 1's como el valor de d (ejemplo: d=5 → "1,1,1,1,1")
        let cadunos = "";
        for (var i = 1; i <= this.d; i++) {
            cadunos += "1,";
        }
        return cadunos.slice(0, -1); // quita la última coma
    }
    generarSrcImg() {
        // Etiquetas dinámicas (1/d en cada parte)
        let etiquetas = "";
        for (var i = 1; i <= this.d; i++) {
            etiquetas += "1/" + this.d + "|";
        }
        etiquetas = etiquetas.slice(0, -1);

        // URL para Quickchart con d partes iguales
        return "https://quickchart.io/chart?cht=p&chd=t:" + this.crearCadunos()
            + "&chs=500x250&chl=" + etiquetas;
    }
}

let q = new Quickchart(d);
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';


// '<img src="https://quickchart.io/chart?cht=p3&chd=t:1,1,1,1&chs=500x250&chl=1/4">';
// q.generarSrcImg();
// "<h1>Adios</h1>";