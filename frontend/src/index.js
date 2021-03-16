const mainList = document.querySelector(".main-list")
const allCigars = document.querySelector(".all-cigars")
const allStyles = document.querySelector(".all-styles")
const newCigar = document.querySelector(".new-cigar")
const cardHeader = document.querySelector(".card-header")
const cardItem = document.getElementsByClassName("nav-link")
const styleDropdown = document.querySelector("#style-dropdown")


document.addEventListener('DOMContentLoaded', (e) => {
    getCigars()
    getStyles()
    renderAllItems(Cigar)
    cigarDetails()
})

// navbar logic
for (let i = 0; i < cardItem.length; i++) {
    cardItem[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active")
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "")
      }
      this.className += " active"
    });
}

// render cigars and styles
function renderSingleItem(item){
    return `<li class="list-group-item">${item.name}</ul></li>`
}
  
const renderAllItems = function(classObj){
    mainList.innerHTML = ""
    classObj.all_items.forEach(classItem => {
        mainList.innerHTML += renderSingleItem(classItem)
    });
}



// All Cigar Tab
const cigarDetails = function(){
    const cigarLi = document.querySelectorAll(".list-group-item")
    cigarLi.forEach(li =>{
        li.addEventListener('click', function(){
            const cigarUL = "<ul class='cigar-list'></ul>"
            const allCigarUl = document.querySelectorAll('.cigar-list')        
            li.innerHTML += cigarUL
            allCigarUl.forEach(li => li.innerHTML = "")            
            findCigar(li)
        })        
    })
}

const findCigar = function(obj){
    const singleCigar = Cigar.all_items.find( function(s) { return s.name === obj.innerText })
    renderCigarDetails(singleCigar, obj)        
}

const renderCigarDetails = function(data, obj){
    console.log(`Cigar name is ${obj.innerText}`)
    console.log(`${data.description} - ${data.price}`)
    
}

allCigars.addEventListener("click",(e) =>{
    e.preventDefault()
    renderAllItems(Cigar)
    cigarDetails()
})



// Cigar Styles Tab
const cigarStyleList = function() {
    const styleLi = document.querySelectorAll(".list-group-item")
    styleLi.forEach(li =>{
        li.addEventListener('click', function(){            
            const cigarUL = "<ul class='cigar-list'></ul>"
            const allCigarUl = document.querySelectorAll('.cigar-list')        
            li.innerHTML += cigarUL
            allCigarUl.forEach(li => li.innerHTML = "")
            findStyleCigars(li)
        })
    })
}

const findStyleCigars = function(obj){
    const list =  Cigar.all_items.filter ( i => i.style == obj.textContent)
    renderStyleList(list, obj)
}

const renderStyleList = function(data, obj){
    data.forEach(cigar =>{
        const cigarList = document.querySelector(".cigar-list")        
        const cigarItem = document.createElement('li')
        cigarItem.innerText = cigar.name
        obj.appendChild(cigarList)
        cigarList.appendChild(cigarItem)
    })
}

allStyles.addEventListener("click",(e) =>{
    e.preventDefault()
    renderAllItems(Style)
    cigarStyleList()
  
})



// form creation
const renderForm = function(){
    mainList.innerHTML = `
    <form id="new-cigar">
        <div class="mb-3">            
            <input type="text" class="form-control" id="name" placeholder="Name" name="name">          
        </div>
        <div class="mb-3">            
            <input type="text" class="form-control" id="description" placeholder="Description" name="description">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="price" placeholder="Price" name="price">            
        </div>
        <div class="mb-3">
            <label for="style-dropdown" class="form-label">Select Style</label>
            <select id="style-dropdown" class="form-select" name="style">
            <option value="">--Please choose an Style--</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `
    populateDropdown()    
}

const populateDropdown = function(){
    const styleDropdown = document.querySelector("#style-dropdown")
    Style.all_items.forEach(style => {      
        styleDropdown.innerHTML += `<option value='${style.style_id}'>${style.name}</option>` 
    })    
}

newCigar.addEventListener("click",(e) =>{
    e.preventDefault()
    renderForm()
    const cigarSubmit = document.querySelector("#new-cigar")    
    cigarSubmit.addEventListener("submit", (e) =>{
        e.preventDefault()
        const formData = {
            name: e.target.name.value,
            description: e.target.description.value,
            price: e.target.price.value,
            style_id: e.target.style.value
        }
        submitCigar(formData)
    })
})











