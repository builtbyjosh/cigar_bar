const cigarList = document.querySelector(".cigar-list")
const allCigars = document.querySelector(".all-cigars")
const allStyles = document.querySelector(".all-styles")
const newCigar = document.querySelector(".new-cigar")
const cardHeader = document.querySelector(".card-header")
const cardItem = cardHeader.getElementsByClassName("nav-link")

document.addEventListener('DOMContentLoaded', (e) => {
    fetch('http://localhost:3000/cigars')
    .then(res => res.json())
    .then((data) => renderCigars(data))

    fetch('http://localhost:3000/styles')
    .then(res => res.json())
    .then((data) => console.log(data))
})




const renderCigars = function(cigars){
    cigars.data.forEach((cigar) => {
        // const cigarLi = document.createElement('li')
        // cigarLi.className = 'list-group-item'
        // cigarLi.innerText += `${cigar.attributes.name} - $${cigar.attributes.price}`
        // cigarList.appendChild(cigarLi)
        cigarList.innerHTML += `<li class="list-group-item">${cigar.attributes.name} - $${cigar.attributes.price}</li>`
    });
}

const renderForm = function(){
    cigarList.innerHTML = `
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


