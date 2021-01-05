// Placeholder images for null photo values: 
const randomPicsArrayDogs = ["https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50113590/1/?bust=1608665556&width=300",
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
  "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
  "https://images.unsplash.com/photo-1546491764-67a5b8d5b3ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"]

const randomPicsArrayCats = ["https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50113861/4/?bust=1608667064&width=300",]

const randomPicsArrayRabbits = ["https://images.unsplash.com/photo-1518796745738-41048802f99a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80", "https://images.unsplash.com/photo-1591382386627-349b692688ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2848&q=80"]

const randomPicsArraySmalls = ["https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2900&q=80", "https://images.unsplash.com/photo-1592159371936-61a70cbeb5f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"]

const randomPicsArrayHorses = ["https://images.unsplash.com/photo-1534773728080-33d31da27ae5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3034&q=80"]

const randomPicsArrayBirds = ["https://images.unsplash.com/photo-1563278689-3519903a3e97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3067&q=80"]

const randomPicsArrayScales = ["https://images.unsplash.com/photo-1575551808321-fca0cf0b051a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80"]

const randomPicsArrayBarnyard = ["https://images.unsplash.com/photo-1567201080580-bfcc97dae346?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"]

// GET TOKEN
const getToken = async () => {
  const response = await axios.post("https://api.petfinder.com/v2/oauth2/token",
    {
      client_id: '8EQVC2RX7zH6RQbABW1DCwl90RIJM9pYKh9n3S6ruo9iFOdVI5',
      client_secret: 'JDoN4QpPMbqaXjQOfQTPZl1L9CyrZHW3LXeMaEkm',
      grant_type: "client_credentials"
    })
  return response.data.access_token 
}

// CREATE select menu from types endpoint. This function creates the select menu that users select. Occurs on page load. 
const createSelectMenu = async () => {
  const token = await getToken()
  const animalOptionArray = await axios.get("https://api.petfinder.com/v2/types",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  let data = animalOptionArray.data.types
  let selectMenuHtml = document.querySelectorAll(".select-menu")
  let selectMenu = document.createElement("select")
  selectMenuHtml[0].append(selectMenu) 

  let defaultOption = document.createElement("option")
  defaultOption.value = "none"
  defaultOption.innerText = "Choose Rescue Animal"
  selectMenu.appendChild(defaultOption)

  for (i = 0; i < data.length; i++) {
    let option = document.createElement("option")
    option.value = data[i].name;
    option.innerText = data[i].name;
    selectMenu.appendChild(option)
  }
 
  selectMenu.addEventListener("change", () => {
    getAnimalsByType(selectMenu.value)

  }) 
}

createSelectMenu()


const getAnimalsByType = async (type) => {
  const token = await getToken()
  const speciesChoice = await axios.get(`https://api.petfinder.com/v2/animals?type=${type}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
  let data = speciesChoice.data.animals
  await renderAnimals(data)

}

const renderAnimals = (data) => {
  let renderPets = document.querySelector(".render-pets")
  renderPets.innerHTML = ""
  for (i = 0; i < data.length; i++) {
    let petInfo = document.createElement('div')
    petInfo.className = "pet-info"

    let petName = document.createElement('p')
    petName.innerText = data[i].name
    petInfo.appendChild(petName)

    let petAge = document.createElement('p')
    petAge.innerText = data[i].age
    petInfo.appendChild(petAge)

    if (data[i].photos.length !== 0) { 
      let petImage = document.createElement('img')
      petImage.src = data[i].photos[0].small
      petInfo.appendChild(petImage)

      petInfo.addEventListener("click", () => {
        // getSingleAnimal(data[i].id)
console.log(data[i])
      })

    }
    renderPets.appendChild(petInfo)
  }
}


const getSingleAnimal = async (id) => {
  const token = await getToken()
  const response = await axios.get(`https://api.petfinder.com/v2/animals/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
    }
  }) 
renderSingleAnimal(response.data.animal)
}

const renderSingleAnimal = (animalObject) => {
  let renderPets = document.querySelectorAll(".render-pets")
  renderPets.innerHTML = " "
  let name = document.createElement('p')
  name.innerText = animalObject.name
}


// const getAnimals = async () => {
//   const token = await getToken()
//   const response = await axios.get("https://api.petfinder.com/v2/animals",
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//     }
//   })
//   randomPet(response.data.animals)
// }

// // Random pet id on page load: 
// const randomPet = async (animalData) => {
//   console.log(animalData)
//   const randomIndex = Math.floor(Math.random() * animalData.length)
//   const randomPet = animalData[randomIndex]
//   const randomImage = document.createElement("img")
//   if (randomPet.photos.length === 0) {
//     let randomArrayPic 
//     if (randomPet.type === "Dog") {
//       const randomIndexPic = Math.floor(Math.random() * randomPicsArrayDogs.length)
//       randomArrayPic = randomPicsArrayDogs[randomIndexPic]
//     } else if (randomPet.type === "Cat") {
//       const randomIndexPic = Math.floor(Math.random() * randomPicsArrayCats.length)
//       randomArrayPic = randomPicsArrayCats[randomIndexPic]
//     } else if (randomPet.type === "Rabbit") {
//       const randomIndexPic = Math.floor(Math.random() * randomPicsArrayRabbits.length)
//       randomArrayPic = randomPicsArrayRabbits[randomIndexPic]
//     } else if (randomPet.type === "Small & Furry") {
//       const randomIndexPic = Math.floor(Math.random() * randomPicsArraySmalls.length)
//       randomArrayPic = randomPicsArraySmalls[randomIndexPic]
//     } else if (randomPet.type === "Horse") {
//       const randomIndexPic = Math.floor(Math.random() * randomPicsArrayHorses.length)
//       randomArrayPic = randomPicsArrayHorses[randomIndexPic]
//     } else if (randomPet.type === "Bird") {
//       const randomIndexPic = Math.floor(Math.random() * randomPicsArrayBirds.length)
//       randomArrayPic = randomPicsArrayBirds[randomIndexPic]
//     } else if (randomPet.type === "Scales,Fins & Other") {
//       const randomIndexPic = Math.floor(Math.random() * randomPicsArrayScales.length)
//       randomArrayPic = randomPicsArrayScales[randomIndexPic]
//     } else if (randomPet.type === "Barnyard") {
//       const randomIndexPic = Math.floor(Math.random() * randomPicsArrayBarnyard.length)
//       randomArrayPic = randomPicsArrayBarnyard[randomIndexPic]
//     }
//     randomImage.setAttribute('src', randomArrayPic)
//   } else {
//     randomImage.setAttribute('src', randomPet.photos[0].medium)
//   }
//   document.body.appendChild(randomImage)

// }

// getAnimals()








