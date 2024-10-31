import { setInLocalStorage } from "./src/persistence/localStorage";
import { renderCatergories } from "./src/services/categories";
import "./style.css";

renderCatergories();

// ===== PRODUCTOS =====

const buttonAdd = document.getElementById('buttonAddElement');
buttonAdd.addEventListener('click',()=>{
    openModal();
});

// ===== POPUP =====

const cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click',()=>{
    handleCancelButton();
});

const handleCancelButton = ()=>{
    closeModal();
}

//Función para abrir y cerrar el modal
const openModal = ()=>{
    const modal = document.getElementById('modalPopUp');
    modal.style.display = "flex";
}

const closeModal = ()=>{
    const modal = document.getElementById('modalPopUp');
    modal.style.display = "none";
}

//Guardar o modificar elementos
const acceptButton = document.getElementById('acceptButton');
acceptButton.addEventListener('click',()=>{
    handleSaveOrModifyElements();
});

const handleSaveOrModifyElements = ()=>{
    const nombre = document.getElementById('nombre').value,
        imagen = document.getElementById('imagen').value,
        precio = document.getElementById('precio').value,
        categoria = document.getElementById('categoria').value;

    let object = {
        id: new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categoria
    };
    setInLocalStorage(object);

    closeModal();
}