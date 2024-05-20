let albums = [
    {
        name: "Curiosa la cara de tu padre",
        year: "1999"
    },
    {
        name: "Noticias de Holanda",
        year: "2022"
    },
];

let NAME = undefined;
let YEAR = undefined;
let EDIT_INDEX= undefined;

function initialize() {
    const ALBUMS_FORM = document.getElementById("albums-form");
    ALBUMS_FORM.addEventListener("submit", addAlbum);
    showAlbum();
}



function addAlbum(eventForm) {
    eventForm.preventDefault();

    NAME = eventForm.target.name.value;
    YEAR = eventForm.target.year.value;

    let message = "";
    if(!validate()) {
        return;
    }

    if(EDIT_INDEX === undefined) {
        albums.push({
            name: NAME,
            year: YEAR
        }); 
        message = "Álbum añadido correctamente";
    } else {
        albums[EDIT_INDEX].name = NAME;
        albums[EDIT_INDEX].year = YEAR;
        EDIT_INDEX = undefined;
        message = "Álbum actualizado correctamente";
    }

    showAlbum();

    alert(message);    
}

function validate() {

    let isOk = true;

    let year_ERROR = document.getElementById("year-error");
    let name_ERROR = document.getElementById("name-error");

    if (NAME === undefined || NAME == "") {     
        name_ERROR.style.visibility = "visible";
        isOk= false;
    } else{
        name_ERROR.style.visibility = "hidden";
    }

    if (YEAR === undefined || YEAR == "") {        
        year_ERROR.style.visibility = "visible";
        isOk = false;
    } else {
        year_ERROR.style.visibility = "hidden";
    }

    return isOk;
}

function showAlbum() {
   
    const ALBUMS_LIST = document.getElementById("albums-list");

    let allAlbums = "";

    for (let i = 0; i < albums.length; i++) {
        allAlbums = allAlbums + `<li class="album">
                                    <div class="row">
                                        <div class="col"> 
                                            <b>name:</b> ${albums[i].name} 
                                        </div>
                                    </div>
                                    <div class="row"> 
                                        <div class="col-8">
                                            <b>Año de publicación:</b>${albums[i].year} 
                                        </div>
                                        <div class="col-4">
                                            <button onclick="editAlbum(${i})" class="btn btn-sm btn-success">EDIT</button> 
                                            <button onclick="deleteAlbum(${i})" class="btn btn-sm btn-danger">DELETE</button>
                                        </div>
                                    </div>                                    
                                </li>`;
    }

    ALBUMS_LIST.innerHTML = allAlbums;

}

function deleteAlbum(albumId) {
    if(confirm("¿Realmente desea borrar el álbum seleccionado?")){
        albums.splice(albumId, 1);
        showAlbum();
        alert("Álbum eliminado correctamente")
    }
}

function editAlbum(albumId){
    let album = albums[albumId];

    document.getElementById('name').value = album.name;
    document.getElementById('year').value = album.year;
    EDIT_INDEX = albumId;
}





initialize();
