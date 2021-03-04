//nom de la const API est tjrs response
//const response = "https://character-database.becode.xyz/characters"

const tpl = document.querySelector("#tpl") ;
const target = document.querySelector("#target");

document.querySelector(".btn").addEventListener("click", async () =>{
    
   
    const response = await fetch("https://character-database.becode.xyz/characters");
    const character = await response.json();

    console.log(character);

    character.forEach(({name, shortDescription, image, description, id}) => { 

        const clone = tpl.cloneNode(true).content; // image du template clone du template

        clone.querySelector(".card-name").innerHTML = name;
        clone.querySelector(".card-img").setAttribute("src", "data:image/png;base64," +image);
        clone.querySelector(".card-shortDescription").innerHTML = shortDescription;
        clone.querySelector(".card-description").innerHTML = description;
        

        target.appendChild(clone);    
        
    });

});


//add a character test
const modal = ()  => {

   // document.querySelector(".button-modal").addEventListener("click",  () =>{

        document.querySelector(".button-create").addEventListener("click", async () =>{

            const name = document.getElementById("name").value;
            console.log(name);
    
            const shortDescription = document.getElementById("shortDescription").value;
            console.log(shortDescription);
    
            const description = document.getElementById("description").value;
            console.log(description);
            
            /*const imageInput = document.getElementByClass("image");
            const image = imageInput.files[0];
            console.log(image);
            // ("src", "data:image/png;base64," +image);   converter img    */ 
           
        
            //const [name, shortDescription, description,id] = values;
            
        
            const response = await fetch('https://character-database.becode.xyz/characters', {
                method: "POST",
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    shortDescription: shortDescription,
                    description : description,
                   
                })
            })

        

         })

    //});
}

modal();

