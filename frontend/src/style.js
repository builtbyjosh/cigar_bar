class Style {
    static all_items = []

    constructor(data){
        this.name = data.name
        this.style_id = data.id
        Style.all_items.push(this)
    }
}