// DOM Manipulation
const mainScreen = document.querySelector('.main-screen')
const mainScreenInner = document.querySelector('.left-main-screen-inner')
const shinyPoke = document.querySelector('.poke-image-shiny')
const pokeNumber = document.querySelector('.poke-number')
const pokeName = document.querySelector('.poke-name')
const frontImg = document.querySelector('.front-image')
const backImg = document.querySelector('.back-image')
const frontImgShiny = document.querySelector('.front-image-shiny')
const backImgShiny = document.querySelector('.back-image-shiny')
const firstType = document.querySelector('.first-type')
const secondType = document.querySelector('.second-type')
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
let isShow = true

//Pokémon types and colors for background
let normal = '#A8A77A'
let fire = '#EE8130'
let water = '#6390F0'
let electric = '#F7D02C'
let grass = '#7AC74C'
let ice = '#96D9D6'
let fighting = '#C22E28'
let poison = '#A33EA1'
let ground = '#E2BF65'
let flying = '#A98FF3'
let psychic = '#F95587'
let bug = '#A6B91A'
let rock = '#B6A136'
let ghost = '#735797'
let dragon = '#6F35FC'
let dark = '#705746'
let steel = '#B7B7CE'
let fairy = '#D685AD'

//Function to show the hidden classes once you press a button to display info (on click in HTML)
showPoke = () => {
  if (isShow) {
    ;(mainScreen.style.display = 'block')((shinyPoke.style.display = 'block'))
    isShow = true
  }
}

//Calling the API with Axios for the input
const getPokeApi = () => {
  let input = inputSearch.value
  axios.get(pokeApi + input).then((response) => {
    displayPoke(response)
  })
}

//Displaying the correct Pokémon/informaiton on the screens for input
displayPoke = (response) => {
  secondType.innerHTML = ''
  pokeName.innerHTML = response.data.forms[0].name
  pokeNumber.innerHTML = response.data.id
  frontImg.src = response.data.sprites.front_default
  backImg.src = response.data.sprites.back_default
  frontImgShiny.src = response.data.sprites.front_shiny
  backImgShiny.src = response.data.sprites.back_shiny
  hpStat.innerHTML = response.data.stats[0].base_stat
  attkStat.innerHTML = response.data.stats[1].base_stat
  defStat.innerHTML = response.data.stats[2].base_stat
  spAttkStat.innerHTML = response.data.stats[3].base_stat
  spDefStat.innerHTML = response.data.stats[4].base_stat
  speedStat.innerHTML = response.data.stats[5].base_stat
  firstType.innerHTML = response.data.types[0].type.name
  //If statements to set the background color of the Pokédex to whatever the first type is
  if (response.data.types[0].type.name === 'normal') {
    mainScreenInner.style.background = normal
  }
  if (response.data.types[0].type.name === 'fire') {
    mainScreenInner.style.backgroundColor = fire
  }
  if (response.data.types[0].type.name === 'water') {
    mainScreenInner.style.backgroundColor = water
  }
  if (response.data.types[0].type.name === 'electric') {
    mainScreenInner.style.backgroundColor = electric
  }
  if (response.data.types[0].type.name === 'grass') {
    mainScreenInner.style.backgroundColor = grass
  }
  if (response.data.types[0].type.name === 'ice') {
    mainScreenInner.style.backgroundColor = ice
  }
  if (response.data.types[0].type.name === 'fighting') {
    mainScreenInner.style.backgroundColor = fighting
  }
  if (response.data.types[0].type.name === 'poison') {
    mainScreenInner.style.backgroundColor = poison
  }
  if (response.data.types[0].type.name === 'ground') {
    mainScreenInner.style.backgroundColor = ground
  }
  if (response.data.types[0].type.name === 'flying') {
    mainScreenInner.style.backgroundColor = flying
  }
  if (response.data.types[0].type.name === 'psychic') {
    mainScreenInner.style.backgroundColor = psychic
  }
  if (response.data.types[0].type.name === 'bug') {
    mainScreenInner.style.backgroundColor = bug
  }
  if (response.data.types[0].type.name === 'rock') {
    mainScreenInner.style.backgroundColor = rock
  }
  if (response.data.types[0].type.name === 'ghost') {
    mainScreenInner.style.backgroundColor = ghost
  }
  if (response.data.types[0].type.name === 'dragon') {
    mainScreenInner.style.backgroundColor = dragon
  }
  if (response.data.types[0].type.name === 'dark') {
    mainScreenInner.style.backgroundColor = dark
  }
  if (response.data.types[0].type.name === 'steel') {
    mainScreenInner.style.backgroundColor = steel
  }
  if (response.data.types[0].type.name === 'fairy') {
    mainScreenInner.style.backgroundColor = fairy
  }
  secondType.innerHTML = response.data.types[1].type.name
}
//Getting the 'Feeling Chansey?' button to work

//Logic to choose a random number between 1-898 (amount of pokemon in national dex as of this project) plus API call with axios to tie it all together
const getRandPoke = () => {
  let randomNum = Math.floor(Math.random() * 898)
  axios.get(pokeApi + randomNum).then((response) => {
    displayRandPoke(response)
  })
}

//Displaying the correct Pokemon/information on the screens for the 'Feeling Chansey?' button
displayRandPoke = (response) => {
  secondType.innerHTML = ''
  pokeName.innerHTML = response.data.forms[0].name
  pokeNumber.innerHTML = response.data.id
  frontImg.src = response.data.sprites.front_default
  backImg.src = response.data.sprites.back_default
  frontImgShiny.src = response.data.sprites.front_shiny
  backImgShiny.src = response.data.sprites.back_shiny
  hpStat.innerHTML = response.data.stats[0].base_stat
  attkStat.innerHTML = response.data.stats[1].base_stat
  defStat.innerHTML = response.data.stats[2].base_stat
  spAttkStat.innerHTML = response.data.stats[3].base_stat
  spDefStat.innerHTML = response.data.stats[4].base_stat
  speedStat.innerHTML = response.data.stats[5].base_stat
  firstType.innerHTML = response.data.types[0].type.name
  //If statements to set the background color of the Pokédex to whatever the first type is
  if (response.data.types[0].type.name === 'normal') {
    mainScreenInner.style.background = normal
  }
  if (response.data.types[0].type.name === 'fire') {
    mainScreenInner.style.backgroundColor = fire
  }
  if (response.data.types[0].type.name === 'water') {
    mainScreenInner.style.backgroundColor = water
  }
  if (response.data.types[0].type.name === 'electric') {
    mainScreenInner.style.backgroundColor = electric
  }
  if (response.data.types[0].type.name === 'grass') {
    mainScreenInner.style.backgroundColor = grass
  }
  if (response.data.types[0].type.name === 'ice') {
    mainScreenInner.style.backgroundColor = ice
  }
  if (response.data.types[0].type.name === 'fighting') {
    mainScreenInner.style.backgroundColor = fighting
  }
  if (response.data.types[0].type.name === 'poison') {
    mainScreenInner.style.backgroundColor = poison
  }
  if (response.data.types[0].type.name === 'ground') {
    mainScreenInner.style.backgroundColor = ground
  }
  if (response.data.types[0].type.name === 'flying') {
    mainScreenInner.style.backgroundColor = flying
  }
  if (response.data.types[0].type.name === 'psychic') {
    mainScreenInner.style.backgroundColor = psychic
  }
  if (response.data.types[0].type.name === 'bug') {
    mainScreenInner.style.backgroundColor = bug
  }
  if (response.data.types[0].type.name === 'rock') {
    mainScreenInner.style.backgroundColor = rock
  }
  if (response.data.types[0].type.name === 'ghost') {
    mainScreenInner.style.backgroundColor = ghost
  }
  if (response.data.types[0].type.name === 'dragon') {
    mainScreenInner.style.backgroundColor = dragon
  }
  if (response.data.types[0].type.name === 'dark') {
    mainScreenInner.style.backgroundColor = dark
  }
  if (response.data.types[0].type.name === 'steel') {
    mainScreenInner.style.backgroundColor = steel
  }
  if (response.data.types[0].type.name === 'fairy') {
    mainScreenInner.style.backgroundColor = fairy
  }
  secondType.innerHTML = response.data.types[1].type.name
}

//Event Listeners
searchButton.addEventListener('click', getPokeApi)

//being able to press enter once you put an input to search
inputSearch.addEventListener(
  'keydown',
  (enter) => {
    let keyCode = enter.keyCode || enter.which
    if (keyCode === 13) {
      getPokeApi()
    }
  },
  false
)

randButton.addEventListener('click', getRandPoke)
