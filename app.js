
// {"token_type":"Bearer","expires_in":3600,"access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI4RVFWQzJSWDd6SDZSUWJBQlcxREN3bDkwUklKTTlwWUtoOW4zUzZydW85aUZPZFZJNSIsImp0aSI6IjM3OGU0ZWY1ZDJkZDFkMDkzMjA1NTc4MGY5Njc0YWEzN2IyMmQyZWFiYjY1OTljM2NiMjA2ZjJkODEzNDFhOGRmYmM1MWQzOTdiYWZiYWJkIiwiaWF0IjoxNjA4NTYyNTAzLCJuYmYiOjE2MDg1NjI1MDMsImV4cCI6MTYwODU2NjEwMywic3ViIjoiIiwic2NvcGVzIjpbXX0.Bn3dqNxewbXQEevcyVBkQlK1m7FAF8cggQESCrD67yl9AJMkpALTzZ6aU8KHoU93adUUtnrqcU81RB5r85kQp9s1tUfzYASBhMy7pOONFe_240pA84cHAUbYzDtDRHNa3wcPWUi70iCMuv8VwDaB9wz_nU7gThdxnUr32JjxVk4Ury3Tb4oR2UYa-jNHE9NxArRiH2TRnyk-vv75OGQoq4aJ-W1nQq2GDl4RJHm1RIJjYuUK5YdaXETF_6WGk-M5sfhBuc5joWiGfAYUb5iJr32NZHRiYDhBDKz_jm7NTr5n6l9Ekod_tf1ldIJuWSJKGZEIvJqjg5C5P0pAfefq0A"}

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
}

getAnimals()


// // Random adoptable pet on landing: 

// // function animalPic() {
// //   let image = document.createElement('img')
// //   // img.src = 
// //   // document.append(image)

// // }

// // function optionValue() {
// //   const select = document.querySelector('')
// //   return list.forEach() => {
// //     const option = document.createElement('option')
// //     option.value = `${}`
// //     option.textContent = `${}`
// //     select.append(option)

// //   }
  
// // } 

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







