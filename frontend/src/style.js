class Style {

    constructor(data){
        this.name = data.name
    }

    renderSingleStyle(){
        return `<li class="list-group-item">${this.name}</li>`
    }

}