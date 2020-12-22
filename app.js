const randomPicsArrayDogs = ["https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50113590/1/?bust=1608665556&width=300",
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
  "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
  "https://images.unsplash.com/photo-1546491764-67a5b8d5b3ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"]

const randomPicsArrayCats = ["https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50113861/4/?bust=1608667064&width=300",]

// Conecting API to webpage:

const getToken = async () => {
  const response = await axios.post("https://api.petfinder.com/v2/oauth2/token",
    {
      client_id: '8EQVC2RX7zH6RQbABW1DCwl90RIJM9pYKh9n3S6ruo9iFOdVI5',
      client_secret: 'JDoN4QpPMbqaXjQOfQTPZl1L9CyrZHW3LXeMaEkm',
      grant_type: "client_credentials"
    })
  return response.data.access_token 
}

const getAnimals = async () => {
  const token = await getToken()
  const response = await axios.get("https://api.petfinder.com/v2/animals",
    {
      headers: {
        Authorization: `Bearer ${token}`
    }
  })
  console.log(response.data.animals)
  randomPet(response.data.animals)
}



// Random pet id on page load: 


const randomPet = async (animalData) => {
  console.log(animalData)
  const randomIndex = Math.floor(Math.random() * animalData.length)
  const randomPet = animalData[randomIndex]
  console.log(randomPet)
  const randomImage = document.createElement("img")
  if (randomPet.photos.length === 0) {
    let randomArrayPic 
    if (randomPet.type === "Dog") {
      const randomIndexPic = Math.floor(Math.random() * randomPicsArrayDogs.length)
      randomArrayPic = randomPicsArrayDogs[randomIndexPic]
    } else if (randomPet.type === "Cat") {
      const randomIndexPic = Math.floor(Math.random() * randomPicsArrayCats.length)
      randomArrayPic = randomPicsArrayCats[randomIndexPic]
    }
    randomImage.setAttribute('src', randomArrayPic)
  } else {
    randomImage.setAttribute('src', randomPet.photos[0].medium)
  }
  document.body.appendChild(randomImage)
  

  
}

getAnimals()



// append this to a div document.querySelector- id or class - make sure images are no bigger than a specific size. 

// // Choose dog or cat: 


// // Search for Breed:

//   // Get value from form

// function getValue(e) => {
//   e.preventDefault()
//   const optionValue = document.querySelector('').value
//   getBreed(optionValue)
// }

//   // Event handler for the form

// const form = document.querySelector('form')
// form.addEventListener('submit', getValue)

// List horizontal bar of five animals. 

const getTokenTwo = async () => {
  const responseTwo = await axios.post("https://api.petfinder.com/v2/oauth2/token",
    {
      client_id: 'yAC018OvAyikVLKUG5NCmgpEDaERQXmK0B4T1QOGyO93FsTPFr',
      client_secret: 'paZRb1lOhSXBp2gY97UHWOtJwOpISekFzsTbiTb7',
      grant_type: "client_credentials"
    })
  return responseTwo.data.access_token 
}

const getAnimalsTwo = async () => {
  const tokenTwo = await getTokenTwo()
  const responseTwo = await axios.get("https://api.petfinder.com/v2/animals",
    {
      headers: {
        Authorization: `Bearer ${tokenTwo}`
      }
    })
  console.log(responseTwo.data.animals)
  randomPet2(responseTwo.data.animals)
}

// const callOne = callOne
const randomPet2 = async (animalDataTwo) => {
    console.log(randomPet2)
  // let animalTwoLength = animalDataTwo.length
  const randomIndexTwo = Math.floor(Math.random() * animalDataTwo.length)
  const randomPetTwo = animalDataTwo[randomIndexTwo]
  console.log(randomPetTwo)
  const randomImageTwo = document.createElement("img")
  if (randomPetTwo.photos[0].length === null) {
    console.log("is this working?")
    randomImageTwo.setAttribute('src', "./imagenotfound2.png")
  } else {
    randomImageTwo.setAttribute('src', randomPetTwo.photos[0].small)
  }
  document.body.appendChild(randomImageTwo)
  

  
}

// getAnimalsTwo(randomPet2())


// Left and right arrows for navigation. 






