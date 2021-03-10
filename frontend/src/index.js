const cigarList = document.querySelector(".cigar-list")
const allCigars = document.querySelector(".all-cigars")
const allStyles = document.querySelector(".all-styles")
const newCigar = document.querySelector(".new-cigar")
const cardHeader = document.querySelector(".card-header")
const cardItem = cardHeader.getElementsByClassName("nav-link")

fetch('http://localhost:3000/cigars')
    .then(res => res.json())
    .then((data) => renderCigars(data))


const renderCigars = function(cigars){
    
    console.log(cigars)
    console.log(cigars.data)

    cigars.data.forEach((cigar) => {
        const cigarLi = document.createElement('li')
        cigarLi.className = 'list-group-item'
        cigarLi.innerText += `${cigar.attributes.name} - $${cigar.attributes.price}`
        cigarList.appendChild(cigarLi)
    });
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
    console.log("new cigar form clicked")
})


