class Cigar {

    static all_items = []

    constructor(data){
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.price = data.price
        this.style_id = data.style_id
        Cigar.all_items.push(this)
    }

    styleName(){
        const styleName = Style.all_items.find( obj => obj.id == this.id)
        return styleName.name
    }
}