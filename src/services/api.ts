import React from "react";
import axios from "axios";


async function getProducts(divId:HTMLDivElement) {
//  const productName = document.getElementById("productName") as HTMLInputElement || null
//  const productDescription = document.getElementById("productDescription") as HTMLInputElement || null;
//  const productPrice = document.getElementById("productPrice ") as HTMLInputElement || null;
//divId = document.getElementById("mainCard") as HTMLDivElement;
 const productUrl= "http://localhost:4000/api/products";    


    // var userDataJson = {
    //     "name" : productName.value.toString(),
    //     "factory" : productDescription.value.toString(),
    //     "quantity" : productPrice.value.toString()
    // }
  
   await axios.get(productUrl)
    .then((response) => {
    const dataProduct: Record<string, 
    {name: String,
    description:String, 
    price: number}> = response.data;

    const dataProductArray = Object.entries(dataProduct).map(
        ([key, value]) => ({
        key,
        ...value})
    );
    
    var component = "";
     dataProductArray.forEach((product) => {
        // var newDiv = document.createElement("div");

          component += `
            <div class="CardBody">
              <img src="https://placehold.co/200/000000/FFFFFF.png"/>
                <div class="Pname">${product.name}</div> 
                <div class="Pdescription">${product.description}</div> 
                <div class="Pprice">R$${product.price}</div>
                <button >Comprar</button>
               </div>
        `

          console.log("Content", component)

    });

    divId.innerHTML = component;

    })
   .catch((error) => {
    console.log("o erro ocorrido foi", error);
   })
}

function postProducts(){
  console.log("teste")
}
  export default { getProducts, postProducts }



