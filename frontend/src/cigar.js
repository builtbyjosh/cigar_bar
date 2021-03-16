class Cigar {

    static all_items = []

    constructor(data){
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.price = data.price
        this.style = data.style.name
        Cigar.all_items.push(this)
    }
}