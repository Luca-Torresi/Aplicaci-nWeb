//Traer productos localStorage
export const handleGetProductLocalStorage = ()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products;
    }else{
        return [];
    }
}

//Guardar en localStorage
export const setInLocalStorage = (productIn)=>{

    //Traer los elementos
    let productsInLocal = handleGetProductLocalStorage();
    const existingIndex = productsInLocal.findIndex((productLocal)=>
        productLocal.id === productIn
    );

    if(existingIndex !== -1){
        productsInLocal[existingIndex] = productIn;
    }else{
        productsInLocal.push(productIn);
    }

    localStorage.setItem("products", JSON.stringify(productsInLocal));
}
