const mainList = document.querySelector(".main-list")
const allCigars = document.querySelector(".all-cigars")
const allStyles = document.querySelector(".all-styles")
const newCigar = document.querySelector(".new-cigar")

const cardItem = document.getElementsByClassName("nav-link")
const styleDropdown = document.querySelector("#style-dropdown")


document.addEventListener('DOMContentLoaded', (e) => {
    getStyles()
    getCigars()
    
    renderWelcome()

})

const renderWelcome = function(){
    mainList.innerHTML = `
        <li class="list-group-item">Welcome to Cigar Bar</li>
        <li class="list-group-item">You must be 18 or older to use this app</li>
        <li class="list-group-item">Click A Menu Option to Begin</li>
    `
}

const listInstructionsText = function(str){
    const listInstructions = document.querySelector(".instructions")
    listInstructions.innerText = str
}

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

// render main-list
const renderAllItems = function(classObj){
    mainList.innerHTML = ""
    classObj.all_items.forEach(classItem => {
        mainList.innerHTML += classItem.renderSingleItem()
    });
}

// All Cigar Tab
const cigarDetails = function(){
    const cigarLi = document.querySelectorAll(".list-group-item")
    cigarLi.forEach(li =>{
        li.addEventListener('click', function(){            
            const cigarDIV = document.createElement('div')
            cigarDIV.classList.add('cigar-div')
            const allCigarDivs = document.querySelectorAll('.cigar-div')
            allCigarDivs.forEach(div => div.remove())
            li.appendChild(cigarDIV)            
            // findCigar(li)
            renderCigarDetails(findCigar(li),li)
        })        
    })
}

const findCigar = function(obj){
    return Cigar.all_items.find( function(s) { return s.name === obj.innerText })       
}

const renderCigarDetails = function(data, obj){
    const cigarDiv = document.querySelector(".cigar-div")
    const cigarUl = document.createElement('ul')
    const cigarLi = `
        <li>-Style: ${data.styleName} </li>
        <li>-Price: $${data.price}</li>
        <li>-Description: ${data.description}</li>
        <button type="button" data-id=${data.id} class="btn btn-danger btn-sm"><i class="far fa-trash-alt"></i></button>
    `
    cigarUl.innerHTML = cigarLi
    cigarDiv.appendChild(cigarUl)    
    obj.appendChild(cigarDiv)
    deleteCigar()
}

allCigars.addEventListener("click",(e) =>{
    e.preventDefault()
    listInstructionsText("Click Cigar For Details")
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
    const list =  Cigar.all_items.filter ( i => i.styleName == obj.textContent)
    renderStyleList(list, obj)
}

const renderStyleList = function(data, obj){
    data.forEach(cigar =>{
        const cigarList = document.querySelector(".cigar-list")        
        const cigarItem = document.createElement('li')
        cigarItem.innerText = `-${cigar.name}`
        obj.appendChild(cigarList)
        cigarList.appendChild(cigarItem)
    })
}

allStyles.addEventListener("click",(e) =>{
    e.preventDefault()
    renderAllItems(Style)
    cigarStyleList()
    listInstructionsText("Click Style To View Cigars")
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
        styleDropdown.innerHTML += `<option value='${style.id}'>${style.name}</option>` 
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
            style_id: e.target.style.value,
            styleName: Style.all_items[e.target.style.value - 1].name
        }
        submitCigar(formData)
    })
    listInstructionsText("")
})











