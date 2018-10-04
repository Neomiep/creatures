class Renderer{
    constructor(){
        this.$creatures = $(".creatures")
        this.creatureSource = $("#creatures-template").html()
    }

    render(creatures){
        this.$creatures.empty()
        let template = Handlebars.compile(this.creatureSource)
        let newHTML = template({creature:creatures})
        this.$creatures.append(newHTML)
    }
}

export default Renderer