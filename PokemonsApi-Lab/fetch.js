let IDpoke = null;

async function getData (IDpoke){
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${IDpoke}`)
    data = await res.json();
    console.log(data);
    render();
}


document.getElementById("bulbasaur").addEventListener('click', function(){
    IDpoke = 1;
    getData(IDpoke);
});

document.getElementById("charmander").addEventListener('click', function(){
    IDpoke = 4;
    getData(IDpoke);
});

document.getElementById("squirtle").addEventListener('click', function(){
    IDpoke = 7;
    getData(IDpoke);
});


function render(){
    document.getElementById('PokeView').innerHTML = ``;
    const Datapoke = document.createElement('div');
    Datapoke.innerHTML =
    `  <img alt="gif poke" src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}">
                            <div class="Datapoke">
                                <h3>${data.name}</h3>
                                <div class="Infopoke">
                                    <div>
                                        <h4>Height</h4>
                                        <p>${data.height} m</p>
                                    </div>
                                    <div>
                                        <h4>Weight</h4>
                                        <p>${data.weight} kg</p>
                                    </div>
                                    <div>
                                        <h4>Type</h4>
                                        <p>${data.types[0].type.name}</p>
                                    </div>
                                </div>
                                <button onclick="Involve()" class="InvolveBoton">Involve</button>
                                <button onclick="Evolve()" class="EvolveBoton"">Evolve</button>
                            </div>
                        `;
    document.getElementById('PokeView').appendChild(Datapoke);

}

    function Evolve() {
        if(IDpoke == 1 || IDpoke == 2 || IDpoke == 4 || IDpoke == 5 || IDpoke == 7 || IDpoke == 8){
            getData(++IDpoke);
        }
    }
    
    function Involve() {
        if(IDpoke == 2 || IDpoke == 3 || IDpoke == 5 || IDpoke == 6 || IDpoke == 8 || IDpoke == 9){
            getData(--IDpoke);
        }
    }