class Cigar {

    static all_cigars = []

    constructor(data){
        this.name = data.name
        this.description = data.description
        this.price = data.price
        Cigar.all_cigars.push(this)
    }

    renderSingleCigar(){
        return `<li class="list-group-item">${this.name} - $${this.price}</li>`
    }

}