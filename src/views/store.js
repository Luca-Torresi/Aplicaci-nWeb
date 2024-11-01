import { handleGetProductLocalStorage } from "../persistence/localStorage";

export const handleGetProductosToStore = ()=>{
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
}

export const handleRenderList = (productsIn)=>{
    const hamburguesas = productsIn.filter((el)=> el.categoria === "hamburguesas");
    const papas = productsIn.filter((el)=> el.categoria === "papas");
    const gaseosas = productsIn.filter((el)=> el.categoria === "gaseosas");

    const renderProductGroup = (products,title)=>{
        if(products.length>0){
            const productsHTML = products.map((product,index)=>{
                return `<div>
                            <div>
                                <img src=${product.imagen}></img>
                                <div>
                                    <h2>${product.nombre}</h2>                                    
                                </div>
                                <div>
                                    <p><b>Precio:</b> $ ${product.precio}</p>
                                    <p><b>Categoría:</b> $ ${product.categoria}</p>
                                </div>
                            </div>
                        </div>`
            }); 

            return `<section>
                        <h3>${title}</h3>
                        <div>
                            ${productsHTML.join()}
                        </div>
                    </section>`
        }else{
            return "";
        }
    }
    //Renderizar cada uno de los productos dentro de su categoría
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
        ${renderProductGroup(hamburguesas,"Hamburguesas")}
        ${renderProductGroup(papas,"Papas")}
        ${renderProductGroup(gaseosas,"Gaseosas")}
    `
}