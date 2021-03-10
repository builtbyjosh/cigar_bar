class Cigar {

    constructor(data){
        this.name = data.name
        this.description = data.description
        this.price = data.price
        // this.style = data.style
    }

    renderEachCigar(){
        return `<li class="list-group-item">${this.name} - $${this.price}</li>`
    }

}