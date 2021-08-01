// TODO: add code here
window.addEventListener('load',function(){
    let astronautJson =[];
    responseJson = fetch(" https://handlers.education.launchcode.org/static/astronauts.json"). then (function(response){
        response.json().then (function (responseJson){
            const astroContainer = document.getElementById("container"); 
            let count = document.getElementById('count');
            //count.innerHTML += `${responseJson.length}`;
            responseJson.sort(function(a,b){return a.hoursInSpace - b.hoursInSpace}) 
            if(responseJson.active ==='true'){

            }
            let astronauts ='';
            for( astronautJson of responseJson  ) {
               
                astronauts +=  
                `<div class="astronaut"> 
                <div class ="bio">
                 <h3>astronauts ${astronautJson.id}</h3> 
                    <ul>
                        <li>First Name:${astronautJson.firstName}</li>
                        <li>Hours in space:${astronautJson.hoursInSpace}</li>
                        <li class ='${astronautJson.active ? "green" : "red"}'>Active:${astronautJson.active} </li>
                        <li>Skills: ${astronautJson.skills.join(",")}</li>
                    </ul>
                </div>
                <img class ="avatar" src =  ${astronautJson.picture} alt ="" />
             </div>` 
            }
            astroContainer.innerHTML = astronauts + `<p>Astronaut Count:${responseJson.length} </p>` ;
             //console.log(astronautJson);
                
            
        });
    });
});