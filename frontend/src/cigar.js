class Cigar {

    static all_items = []

    constructor(data){
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.price = data.price
        this.style_id = data.style_id
        this.styleName = Style.all_items[this.style_id].name
    
        Cigar.all_items.push(this)
    }

    renderSingleItem(){
        return `<li class="list-group-item" value='${this.id}'>${this.name}</li>`
    }

}