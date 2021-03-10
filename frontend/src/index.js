const mainList = document.querySelector(".main-list")
const allCigars = document.querySelector(".all-cigars")
const allStyles = document.querySelector(".all-styles")
const newCigar = document.querySelector(".new-cigar")
const cardHeader = document.querySelector(".card-header")
const cardItem = document.getElementsByClassName("nav-link")

document.addEventListener('DOMContentLoaded', (e) => {
    getCigars()
    getStyles()
    
})

// cardHeader.addEventListener('click', (e) => {
//     console.log(e.target)
// })

const getCigars = () => {
    fetch('http://localhost:3000/cigars')
    .then(res => res.json())
    .then((cigarData) => {
        cigarData.data.forEach(cigarObj => {
            const newCigar = new Cigar(cigarObj.attributes)            
            mainList.innerHTML += newCigar.renderSingleCigar()
        })
        // renderCigars(data)
    })
}

const getStyles = () =>{
    fetch('http://localhost:3000/styles')
    .then(res => res.json())
    .then((styleData) => {
        styleData.forEach(styleObj => {
            const newStyle = new Style(styleObj)
        })
    })
}


// const renderCigars = function(cigars){
//     cigars.data.forEach((cigar) => {
//         const cigarLi = document.createElement('li')
//         cigarLi.className = 'list-group-item'
//         cigarLi.innerText += `${cigar.attributes.name} - $${cigar.attributes.price}`
//         mainList.appendChild(cigarLi)
//         mainList.innerHTML += `<li class="list-group-item">${cigar.attributes.name} - $${cigar.attributes.price}</li>`
//     });
// }

const renderAllCigars = function(){
    mainList.innerHTML = ""
    Cigar.all_cigars.forEach(cigarObj => {        
        mainList.innerHTML += cigarObj.renderSingleCigar()
    })
}

const renderStyle = function(styles){
    styles.data.forEach((style) => {
        mainList.innerHTML += `<li class="list-group-item">${style.attributes.name}</li>`
    });
}

const renderForm = function(){
    mainList.innerHTML = `
    <form >
        <div class="mb-3">            
            <input type="text" class="form-control" id="name" placeholder="Name">          
        </div>
        <div class="mb-3">            
            <input type="text" class="form-control" id="description" placeholder="Description">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="price" placeholder="Price">            
        </div>
        <div class="mb-3">
            <label for="style" class="form-label">Select Style</label>
            <select id="style" class="form-select">
                <option>Corona</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `
}

for (let i = 0; i < cardItem.length; i++) {
    cardItem[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active")
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "")
      }
      this.className += " active";
    });
  }

allCigars.addEventListener("click",(e) =>{
    e.preventDefault
    renderAllCigars()
    console.log("cigars clicked")
})

allStyles.addEventListener("click",(e) =>{
    e.preventDefault
    console.log("styles clicked")
})

newCigar.addEventListener("click",(e) =>{
    e.preventDefault
    renderForm()
    console.log("new cigar form clicked")
})


