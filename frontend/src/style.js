class Style {
    static all_styles = []

    constructor(data){
        this.name = data.name
        Style.all_styles.push(this)
    }

    renderSingleStyle(){
        return `<li class="list-group-item">${this.name}</li>`
    }

}