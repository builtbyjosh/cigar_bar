const cigarList = document.querySelector(".cigar-list")


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