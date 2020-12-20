// List of Cat Errors `https://http.cat/${status-code}`

const getOptions = async () => {
  const URL = "https://http.cat/[status_code]"
  try {
    const response = await axios.get(URL)
    const list = Object.keys(response.data.message)
    optionValue(list)
  } catch (error) {

  }
}

getOptions() 

function optionValue(list) {
  const select = document.querySelector('#codes')
  return list.forEach(code) => {
    const option = document.createElement('option')
    option.value = `${status - code}`
    option.textContent = `${status - code}`
    select.append(option)

  }
  
} 

// Get value from form

function getValue(e) => {
  e.preventDefault()
  const optionValue = document.querySelector('#codes').value
  getCode(optionValue)
}

// Event handler for the form
const form = document.querySelector('form')
form.addEventListener('submit', getValue)

//Request by error code
async function getCode(code) {
  const codeURL = `https://http.cat/[status_code]`
  try {
  const response = await axios.get(codeURL)
  } catch(error)
}

//Create img element, set src and append to DOM
function catPic(code) {
  let image = document.createElement('img')
  img.src = code
  document.append(img)

}



// const getData = async () => {

// const URL = `https://http.cat/`
// const response = await axios.get(URL, headers)
// const axiosData = response.data 

// }
// getData()

// // Another getData function 

// function getThatData(status-code) {
//   const URL = https://http.cat/[status_code]
//     axios.get(URL)
//       .then((res) => {
    
//       })
//       .catch((error) => {
    
//   })
// }


