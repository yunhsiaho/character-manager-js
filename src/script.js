//nom de la const API est tjrs response

const tpl = document.querySelector("#tpl") ;
const target = document.querySelector("#target");

document.querySelector(".btn").addEventListener("click", async () =>{
    
   
    const response = await fetch("https://character-database.becode.xyz/characters");
    const character = await response.json();

   // console.log(tableau);
    console.log(character);

    character.forEach(({name, shortDescription, image, description, id}) => { 

        const clone = tpl.cloneNode(true).content; // image du template clone du template

        clone.querySelector(".card-title").innerHTML = name;
        clone.querySelector(".card-img-top").setAttribute("src", "data:image/png;base64," +image);
        clone.querySelector(".card-text").innerHTML = shortDescription;
        clone.querySelector(".card-body").innerHTML = description;
        

        target.appendChild(clone);
        
        
    });

  




});

//add a character test


const modal = ()  => {
    document.querySelector("#BtnUP").addEventListener("click", async () =>{
        const name = document.getElementById("name").value;
        console.log(name);

        const description = document.getElementById("description").value;
        console.log(description);
        
        const imageInput = document.getElementById("image");
        const image = imageInput.files[0];
        console.log(image);
        // ("src", "data:image/png;base64," +image);
        
        

        
       


    

        
       
    
       // const [name, shortDescription, image, description,id] = values;

        //console.log(name);
    
        const response = await fetch(`https://character-database.becode.xyz/characters`,{
            method: "POST",
            headers : {
                "Content-Type ": "application/json",
            },
            tpl: JSON.stringify( {
                name, shortDescription, image ,description, 
            })
        })
    });
}

modal();


