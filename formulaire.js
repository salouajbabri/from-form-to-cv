import React from "react";


function Formulaire (){
    return (
        <div>
            <span class="text"> <h1>Formulaire des données personnelles </h1></span>
    <div>
        <div class="container">
            <span class="headline" ><h3>Coordonnées du candidat </h3></span>
        <form action = "?" id ='myform'>
            <div class="body1">
            <div class="leftsplit">
                <br/><br/>
                <label for="text1 " class="item">Insérez votre photo :</label><br/>
        
        <img src="picanonyme.png"/><br/>
        <label></label>
        <input type="file"/><br/>
            <label> Nom :</label>
            <input type ="text" id ='lname' placeholder = 'ex : JBAbr/I '/><br/>
            <span id="errorln"></span><br/><br/>
            <span id="rightln"></span><br/><br/>

            <label> Prénom :</label>
            <input type ="text" id ='fname' placeholder = 'ex : Saloua '/><br/>
            <span id="errorfn"></span><br/><br/>
        

            <label> Age :</label>
            <input type ="text" id ='age' placeholder = 'ex : 19 '/><br/>
            <span id="errorage"></span><br/><br/>
            <span id="rightage"></span><br/><br/>
        

            <label> Email :</label>
            <input type ="email" id ='email' placeholder = 'ex :xxx@gmail.com '/><br/>
            <span id = "erroremail"></span><br/><br/>

            <label> Adresse  :</label>
            <input type ="text" id ='adresse' placeholder = 'saisissez votre adresse actuelle'/><br/>
            <span id ="erroradresse"></span><br/><br/>
            

        <input type ="submit" value ='valider'/>
        </div>
        <div class="rightsplit">
            <div class="container">
                <span class="headline" ><h3>Objectif professionnel </h3></span>
                </div>
                <div class="forme">
                  <textarea type="text" id="obj" rows="5" cols="120"></textarea>
                  <span id = "errorobj"></span><br/><br/>
                  
                </div>
              
                <div class="container">
                <span class="headline" ><h3>Cursus des études  </h3></span>
              </div> 
                <div class="forme">
                  <label for="lname" class ="item1">Année </label><br/>
                  <textarea type="text" id="ann" rows="2" cols="120"></textarea><br/>
                  <label for="lname" class ="item1">Année </label><br/>
                  <textarea type="text" id="ann" rows="2" cols="120"></textarea><br/>
                  <button > Ajouter  </button>
                </div>
                <div class="container">
                  <span class="headline" ><h3>Cursus professionnel  </h3></span>
                </div>
                <label for="lname" class ="item1">Année </label><br/>
                  <textarea type="text" id="formation" rows="2" cols="120"></textarea><br/>
                  <label for="lname" class ="item1">Année </label><br/>
                  <textarea type="text" id="formation" rows="2" cols="120"></textarea><br/>
                  
                  <button > Ajouter  </button>
              
                <div class="container">
                  <span class="headline" ><h3>Loisirs et interets </h3></span>
                  </div>
                  <div class="forme">
                    <textarea type="text" id="loisirs" rows="5" cols="120"></textarea>
                  </div>
                  <input type = "submit" value = "enregistrer"></input>
                  
                
            </div>
            <footer>
                <p>Edité par Jbabr/i Saloua </p>
              </footer>
              <footer class="foot">
                <p >© 09/10/2022 Copyright </p>
              </footer>
        </div>
        </form>
    </div>
    </div>

</div>

        
    )
}
export default Formulaire
