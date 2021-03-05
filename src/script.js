//nom de la const API est tjrs response
//const response = "https://character-database.becode.xyz/characters"

const tpl = document.querySelector("#tpl") ;
const target = document.querySelector("#target");
let idArray = [];
let image = "";

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

        Array.from(document.querySelectorAll(".button-delete")).forEach((btn, i) => {
            clone.querySelector(".modal-name").innerHTML = name;
            clone.querySelector(".card-img").setAttribute("src", "data:image/png;base64," +image);
            clone.querySelector(".modal-shortDescription").innerHTML = shortDescription;
            clone.querySelector(".modal-description").innerHTML = description;
        })
       

        target.appendChild(clone);

        //Tableau avec les id des card


        idArray.push(id);
        console.log(idArray)



        //---------------------delete a character---------------------------


        Array.from(document.querySelectorAll(".button-delete")).forEach((btn, i) => { // tableau des button /!\

            btn.addEventListener("click", async () =>{

                const id = idArray[i];
                console.log(id);


                try{ 
                    const delreponse = await fetch(`https://character-database.becode.xyz/characters/${id}`,{
                        method: "DELETE",
                        header : {
                            "content-Type": "application/json",
                        },
                    });

                        const character = await response.json();


                }catch (err){
                    console.error(`Unknown character whith id:${id}`);
                } 
            }) 

        }); 

        //------------------------edit a character--------------------------
        //document.querySelector(".button-edit").addEventListener("click", async () =>{});

    });








});


//------------------------------add a character-------------------------------
const modal = ()  => {

   // document.querySelector(".button-modal").addEventListener("click",  () =>{

        document.querySelector(".button-create").addEventListener("click",
        async () =>{

            const name = document.getElementById("name").value;
            console.log(name);

            const shortDescription = document.getElementById("shortDescription").value;
            console.log(shortDescription);

            const description = document.getElementById("description").value;
            console.log(description);



            //const [name, shortDescription, description,id] = values;


            const response = await fetch("https://character-database.becode.xyz/characters", {
                method: "POST",
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    shortDescription: shortDescription,
                    description : description,
                    image,


                })
            })
         })

    //});
}

modal();


//function convert image
document.querySelector("#file").addEventListener("change",(e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        image = reader.result.replace('data:', '').replace(/^.+,/, '');
    };
    reader.readAsDataURL(file)
});