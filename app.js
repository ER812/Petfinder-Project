// GET TOKEN
const getToken = async () => {
  const response = await axios.post(
    "https://api.petfinder.com/v2/oauth2/token",
    {
      client_id: "8EQVC2RX7zH6RQbABW1DCwl90RIJM9pYKh9n3S6ruo9iFOdVI5",
      client_secret: "JDoN4QpPMbqaXjQOfQTPZl1L9CyrZHW3LXeMaEkm",
      grant_type: "client_credentials",
    }
  );
  return response.data.access_token;
};

// CREATE select menu from types endpoint. This function creates the select menu that users select. Occurs on page load.
const createSelectMenu = async () => {
  const token = await getToken();
  const animalOptionArray = await axios.get(
    "https://api.petfinder.com/v2/types",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  let data = animalOptionArray.data.types;
  let selectMenuHtml = document.querySelectorAll(".select-menu");
  let selectMenu = document.createElement("select");
  selectMenuHtml[0].append(selectMenu);

  let defaultOption = document.createElement("option");
  defaultOption.value = "none";
  defaultOption.innerText = "Choose Rescue Animal";
  selectMenu.appendChild(defaultOption);

  for (i = 0; i < data.length; i++) {
    let option = document.createElement("option");
    if (
      data[i].name !== "Scales, Fins & Other" &&
      data[i].name !== "Small & Furry"
    ) {
      option.value = data[i].name;
      option.innerText = data[i].name;
      selectMenu.appendChild(option);
    }
  }

  selectMenu.addEventListener("change", () => {
    getAnimalsByType(selectMenu.value);
  });
};

createSelectMenu();

const getAnimalsByType = async (type) => {
  const token = await getToken();
  const speciesChoice = await axios.get(
    `https://api.petfinder.com/v2/animals?type=${type}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = speciesChoice.data.animals;
  await renderAnimals(data);
};

const renderAnimals = (data) => {
  let renderPets = document.querySelector(".render-pets");
  renderPets.innerHTML = "";

  data.forEach((animal) => {
    let petInfo = document.createElement("div");
    petInfo.className = "pet-info";

    let petName = document.createElement("p");
    petName.innerText = animal.name;
    petInfo.appendChild(petName);

    let petAge = document.createElement("p");
    petAge.innerText = animal.age;
    petInfo.appendChild(petAge);

    let petImage = document.createElement("img");
    petInfo.appendChild(petImage);
    if (animal.photos.length !== 0) {
      petImage.src = animal.photos[0].small;
    } else {
      petImage.src = "./imagenotfound2.png";
    }

    renderPets.appendChild(petInfo);
    petInfo.addEventListener("click", () => {
      getSingleAnimal(animal.id);
    });
  });
  // for (i = 0; i < data.length; i++) {
};

const getSingleAnimal = async (id) => {
  const token = await getToken();
  const response = await axios.get(
    `https://api.petfinder.com/v2/animals/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  renderSingleAnimal(response.data.animal);
};

const renderSingleAnimal = (animalObject) => {
  let renderPets = document.querySelector(".render-pets");
  renderPets.innerHTML = " ";

  let name = document.createElement("p");
  name.innerText = animalObject.name;
  renderPets.appendChild(name);

  if (animalObject.photos.length !== 0) {
    let petImage = document.createElement("img");
    petImage.src = animalObject.photos[0].small;
    renderPets.appendChild(petImage);
  }

  let shots = document.createElement("p");
  shots.innerText = animalObject.attributes.shots_current;
  renderPets.appendChild(`Vaccinated: ${shots}`);
};

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
