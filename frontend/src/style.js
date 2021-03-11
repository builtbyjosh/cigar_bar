class Style {
    static all_items = []

    constructor(data){
        this.name = data.name
        Style.all_items.push(this)
    }
}