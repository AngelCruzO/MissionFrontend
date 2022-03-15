//funcion para extraer pokemons
const fecthPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => { //promesas y consulta
        //manejo de errores
        if(res.status != "200"){
            console.log(res);
            pokeImage("https://media.comicbook.com/2017/04/pokemon-sad-moments-pikachu-crying-990351.jpg");
        }else{
            return res.json();
        }
        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        const abilitys = () =>{
            var arrayAbilitys;
            for(var i=0;i<data.abilities.length;i++){
                arrayAbilitys += data.abilities[i].ability.name;
            }
            return arrayAbilitys;
        }
        console.log(abilitys());
        console.log(pokeImg);
        pokeImage(pokeImg);
    })
}

//fecthPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

//pokeImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png");

//imprime el resultado del valor de un input
const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("Hola " + pokeInput);
}