// DOM Manipulation
const mainScreen = document.querySelector('.main-screen')
const pokeNumber = document.querySelector('.poke-number')
const pokeName = document.querySelector('.poke-name')
const frontImg = document.querySelector('.front-image')
const backImg = document.querySelector('.back-image')
const firstType = document.querySelector('.first-type')
const secondType = document.querySelector('.second-type')
const pokeList = document.querySelector('.poke-list')
const prevButton = document.querySelector('.previous-button')
const nextButton = document.querySelector('.next-button')
const inputSearch = document.querySelector('.input')
const randButton = document.querySelector('.lucky-button')
const searchButton = document.querySelector('.search-button')
const hpStat = document.querySelector('.poke-hp')
const attkStat = document.querySelector('.poke-attack')
const defStat = document.querySelector('.poke-defense')
const spAttkStat = document.querySelector('.poke-spec-attack')
const spDefStat = document.querySelector('.poke-spec-defense')
const speedStat = document.querySelector('.poke-speed')

//Variables

let pokeApi = `https://pokeapi.co/api/v2/pokemon/`

const pokeTypes = [
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'grass',
  'ghost',
  'ground',
  'ice',
  'normal',
  'water',
  'poision',
  'psychic',
  'rock',
  'steel'
]

//Calling the API with Axios

const getPokeApi = () => {
  let input = inputSearch.value
  axios.get(pokeApi + input).then((response) => {
    displayPoke(response)
  })
}

//Displaying the correct Pokémon on the main screen

displayPoke = (response) => {
  pokeName.innerHTML = response.data.forms[0].name
  frontImg.src = response.data.sprites.front_default
  backImg.src = response.data.sprites.back_default
  firstType.innerHTML = response.data.types[0].type.name
  secondType.innerHTML = response.data.types[1].type.name
  hpStat.innerHTML = response.data.stats[0].base_stat
  attkStat.innerHTML = response.data.stats[1].base_stat
  defStat.innerHTML = response.data.stats[2].base_stat
  spAttkStat.innerHTML = response.data.stats[3].base_stat
  spDefStat.innerHTML = response.data.stats[4].base_stat
  speedStat.innerHTML = response.data.stats[5].base_stat
}
//Event Listeners
searchButton.addEventListener('click', getPokeApi)
