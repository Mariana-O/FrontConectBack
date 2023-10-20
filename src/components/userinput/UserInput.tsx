import React from "react";
import axios from "axios";
import './UserInput.css'

async function userData(){
    var userNameInput = document.getElementById("userName") as HTMLInputElement || null;
    var userLastNameInput = document.getElementById("userLastName") as HTMLInputElement || null;
    var userEmailInput = document.getElementById("userEmail") as HTMLInputElement || null;
    var userCpfInput = document.getElementById("userCpf") as HTMLInputElement || null;
    // var newDiv = document.getElementById("newDiv") as HTMLDivElement;
    var userUrl = "http://localhost:4000/api/user";
    
    var userDataJson = {
        "name" : userNameInput.value.toString(),
        "lastName" : userLastNameInput.value.toString(),
        "email" : userEmailInput.value.toString(),
        "cpf" : userCpfInput.value.toString()
    }

await axios.get(userUrl)
.then((response) => {
 const dataUser: Record<string, {name: String, cpf:String, 
    last_name: String, email: String}> = response.data;

    const dataUserArray = Object.entries(dataUser).map(
        ([key, value]) => ({
        key,
         ...value

}));
console.log(dataUserArray);
dataUserArray.forEach((i) => {
const newDiv = document.createElement("div");
 newDiv.innerHTML = `${i.name}
  <br/> ${i.cpf}
  <br/> ${i.last_name}
  <br/> ${i.email} <br/><br/></br>` 
document.body.appendChild(newDiv);
});
})
}

async function userDataPost(){
    const userUrl = "http://localhost:4000/api/user";
    var userJson = {"name": "maria",
    "cpf": "12345678",
    "last_name": "Camargo",
    "email": "teste@gmail.com"}

    await axios.post(userUrl, userJson,
    {
        headers: { "Content-Type": "application/json" }
    }
    
    ).then((response) => {
        console.log(response);
    })
}

       

function UserInput(){
    return(
<div className="userInputMain">
    <div className="userInputBody">
      <label>Nome: </label>
         <input type="text" id="userName"/>
   </div>    
   
    <div className="userInputBody"> 
      <label>Sobrenome: </label>
          <input type="text" id="userLastName"/>
    </div>

    <div className="userInputBody"> 
      <label>Email: </label>
          <input type="text" id="userEmail"/>
    </div>

    <div className="userInputBody">
      <label>CPF: </label>
          <input type="text" id="userCpf"/>
   </div>

    <div>
    <button onClick={userDataPost} id="sndBtn">Enviar</button>
    <button onClick={userData} id="sndBtn">Obter</button>
    </div>

    <br/><br/><br/><br/>

    {/* <div id = "newDiv"></div> */}
     
</div>
    )
}
export default UserInput;