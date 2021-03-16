const getCigars = () => {
    fetch('http://localhost:3000/cigars')
    .then(res => res.json())
    .then((cigarData) => {
        cigarData.data.forEach(cigarObj => {
            const newCigar = new Cigar(cigarObj.attributes)
            
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

const submitCigar = function(data){
    fetch(`http://localhost:3000/cigars`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((cigar) => {  
        debugger      
        const newCigar = new Cigar(cigar)
        
        renderAllItems(Cigar)        
    })
    .catch(function(error) {
        alert('something went wrong')
        console.log(error.message)        
    })
}

const deleteCigar = function(){    
    
    const btn = document.querySelector('.btn-danger')
    btn.addEventListener('click', function(e){
        const parentEl = e.target.parentElement.parentElement.parentElement.parentElement
        console.log(parentEl.value)
        fetch(`http://localhost:3000/cigars/${parentEl.value}`, {
            method: 'DELETE',
        })
        .then((res) => res.json())
        .then((data) => {
            parentEl.remove()
        })
    })
    

}