const main = document.getElementById('main')


fetch('http://localhost:3000/cigars')
    .then(res => res.json())
    .then((data) => renderCigars(data))

const renderCigars = function(cigars){
    
    console.log(cigars)
    console.log(cigars.data)

    cigars.data.forEach((cigar) => {

        main.innerHTML += `<h3>${cigar.attributes.name} - $${cigar.attributes.price}</h3>`
    });
}