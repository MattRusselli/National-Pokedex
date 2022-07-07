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

//Displaying the correct Pokémon/informaiton on the screens
displayPoke = (response) => {
  secondType.innerHTML = ''
  pokeName.innerHTML = response.data.forms[0].name
  pokeNumber.innerHTML = response.data.id
  frontImg.src = response.data.sprites.front_default
  backImg.src = response.data.sprites.back_default
  frontImgShiny.src = response.data.sprites.front_shiny
  backImgShiny.src = response.data.sprites.back_shiny
  firstType.innerHTML = response.data.types[0].type.name
  hpStat.innerHTML = response.data.stats[0].base_stat
  attkStat.innerHTML = response.data.stats[1].base_stat
  defStat.innerHTML = response.data.stats[2].base_stat
  spAttkStat.innerHTML = response.data.stats[3].base_stat
  spDefStat.innerHTML = response.data.stats[4].base_stat
  speedStat.innerHTML = response.data.stats[5].base_stat
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

//Displaying the correct Pokemon/information on the screens
displayRandPoke = (response) => {
  secondType.innerHTML = ''
  pokeName.innerHTML = response.data.forms[0].name
  pokeNumber.innerHTML = response.data.id
  frontImg.src = response.data.sprites.front_default
  backImg.src = response.data.sprites.back_default
  frontImgShiny.src = response.data.sprites.front_shiny
  backImgShiny.src = response.data.sprites.back_shiny
  firstType.innerHTML = response.data.types[0].type.name
  hpStat.innerHTML = response.data.stats[0].base_stat
  attkStat.innerHTML = response.data.stats[1].base_stat
  defStat.innerHTML = response.data.stats[2].base_stat
  spAttkStat.innerHTML = response.data.stats[3].base_stat
  spDefStat.innerHTML = response.data.stats[4].base_stat
  speedStat.innerHTML = response.data.stats[5].base_stat
  secondType.innerHTML = response.data.types[1].type.name
}

//Event Listeners
searchButton.addEventListener('click', getPokeApi)

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
