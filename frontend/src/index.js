const main = document.getElementById('main')


fetch('http://localhost:3000/cigars')
    .then(res => res.json())
    .then((data) => renderCigars(data))

const renderCigars = function(cigars){
    console.log(cigars)

    cigars.forEach(cigar => {
        main.innerHTML += `<h3>${cigar.name} - $${cigar.price}</h3>`
    });
}