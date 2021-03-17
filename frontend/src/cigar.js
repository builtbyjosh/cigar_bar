class Cigar {

    static all_items = []

    constructor(data){
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.price = data.price
        this.styleName = data.style.name
        this.style_id = data.style_id
    
        Cigar.all_items.push(this)
    }

    renderSingleItem(){
        return `<li class="list-group-item" value='${this.id}'>${this.name}</li>`
    }

    findAndDelete(objId){
        // Cigar.all_items[objId.id]
        Cigar.all_items = Cigar.all_items.filter(cigar => cigar.id !== objId)
    }

}