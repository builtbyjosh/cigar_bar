class Cigar {

    static all_items = []

    constructor(data){
        this.name = data.name
        this.description = data.description
        this.price = data.price
        Cigar.all_items.push(this)
    }
}