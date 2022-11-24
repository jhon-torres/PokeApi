"use strict"
const consultarPokemon = (id,number) => 
{
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      //console.log(data);
      pintarPokemon(data,number)
    })

    .catch((error) => {
      console.log(error);
    });
};

const btnSeleccionar = () => 
{
  let primerPokemon = Math.round(Math.random() * 150);
  let segundoPokemon = Math.round(Math.random() * 150);
  consultarPokemon(primerPokemon,1);
  consultarPokemon(segundoPokemon,2);
};

btnSeleccionar()

const lista = document.getElementById("listarpokemon")

const pintarPokemon = (data, id) => {
    let item = lista.querySelector(`#img-pok-${id}`);
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.other.dream_world.front_default)

    item = lista.querySelector(`#card-profile-${id}`)
    item.getElementsByClassName("name")[0].innerHTML = `${data.name} <span>${data.stats[0].base_stat}hp</span>`;
    item.getElementsByClassName("exp")[0].innerHTML = `${data.base_experience} exp`

    item = lista.querySelector(`#stats-${id}`);
    item.getElementsByClassName("value")[0].innerHTML = `${data.stats[1].base_stat} K`
    item.getElementsByClassName("value")[1].innerHTML = `${data.stats[3].base_stat} K`
    item.getElementsByClassName("value")[2].innerHTML = `${data.stats[2].base_stat} K`
    //console.log(item)
}