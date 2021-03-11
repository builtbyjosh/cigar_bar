const mainList = document.querySelector(".main-list")
const allCigars = document.querySelector(".all-cigars")
const allStyles = document.querySelector(".all-styles")
const newCigar = document.querySelector(".new-cigar")
const cardHeader = document.querySelector(".card-header")
const cardItem = document.getElementsByClassName("nav-link")

document.addEventListener('DOMContentLoaded', (e) => {
    getCigars()
    getStyles()
    renderAllItems(Cigar)
})

const getCigars = () => {
    fetch('http://localhost:3000/cigars')
    .then(res => res.json())
    .then((cigarData) => {
        cigarData.data.forEach(cigarObj => {
            const newCigar = new Cigar(cigarObj.attributes)
            renderAllItems(Cigar)
        })
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

function renderSingleItem(item){
    return `<li class="list-group-item">${item.name}</li>`
}  
const renderAllItems = function(classObj){
    mainList.innerHTML = ""
    classObj.all_items.forEach(classItem => {
        mainList.innerHTML += renderSingleItem(classItem)
    });
}

allCigars.addEventListener("click",(e) =>{
    e.preventDefault
    renderAllItems(Cigar)
})

allStyles.addEventListener("click",(e) =>{
    e.preventDefault
    renderAllItems(Style)    
})

newCigar.addEventListener("click",(e) =>{
    e.preventDefault
    renderForm()
})


