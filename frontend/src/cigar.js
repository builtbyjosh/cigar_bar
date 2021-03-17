class Cigar {

    static all_items = []

    constructor(data){
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.price = data.price
        this.style_id = data.style.id        
    
        Cigar.all_items.push(this)
    }

    styleName(){
        return Style.all_items[this.style_id - 1].name
    }

    renderSingleItem(){
        return `<li class="list-group-item" value='${this.id}'>${this.name}</li>`
    }

}