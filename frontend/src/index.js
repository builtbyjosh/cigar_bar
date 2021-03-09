fetch('http://localhost:3000/cigars')
    .then(res => res.json())
    .then((data) => console.log(data))