class Style {
    static all_items = []

    constructor(data){
        this.name = data.name
        this.id = data.id
        Style.all_items.push(this)
    }
}