
// Métodos de propiedad
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    },
    pausar: function() {
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    },
    sgteCancion: function(nombreSGTE){
        console.log(`pasando a la siguiente cancion: ${nombreSGTE}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`)
}
reproductor.anteriorCancion= function(nombreANT){
    console.log(`pasanado a la anterior cancion: ${nombreANT}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');
reproductor.sgteCancion('helena-my chemical romance');
reproductor.anteriorCancion('this fire- killswitch engage');