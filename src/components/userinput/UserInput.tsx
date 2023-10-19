import React from "react";
import axios from "axios";
import './UserInput.css'

function userData(){
    var userNameInput = document.getElementById("userName") as HTMLInputElement || null;
    var userLastNameInput = document.getElementById("userLastName") as HTMLInputElement || null;
    var userEmailInput = document.getElementById("userEmail") as HTMLInputElement || null;
    var userCpfInput = document.getElementById("userCpf") as HTMLInputElement || null;
    var newDiv = document.getElementById("newDiv") as HTMLDivElement;
    var userUrl = "http://localhost:4000/api/user";
    
    var userDataJson = {
        "name" : userNameInput.value.toString(),
        "lastName" : userLastNameInput.value.toString(),
        "email" : userEmailInput.value.toString(),
        "cpf" : userCpfInput.value.toString()
    }

//     newDiv.innerHTML = `
//   <div> 
//       Nome: ${userNameInput.value} 
//    </div>

//     <div> 
//      Sobrenome: ${userLastNameInput.value} 
//     </div>

//     <div> 
//       Email: ${userEmailInput.value} 
//     </div>

//      <div> 
//        CPF: ${userCpfInput.value} 
//     </div>
// `

axios.get(userUrl)
.then((response) => {
    Object.keys((response.data))
 newDiv.innerHTML = `${Object.keys(response.data.name[1])} <br/> ${response.data.cpf} <br/> ${response.data.last_name}  <br/> ${response.data.email}`
   
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
        <button onClick={userData} id="sndBtn">Enviar</button>
    </div>

    <br/><br/><br/><br/>

    <div id = "newDiv"></div>
     
</div>
    )
}
export default UserInput;