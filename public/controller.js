class Controller{
    constructor(data,renderer){
        this.data = data
        this.renderer = renderer
        this.$creatures = $('.creatures')
    }

    compilePostCreature(){
        $("#addcreature").on("click",(event)=>{
        let name = $(event.currentTarget).closest(".post-form").find("#creatureName").val()
        let creatureType = $(event.currentTarget).closest(".post-form").find("#creatureType").val()
        this.data.addCreature(name,creatureType).then(()=>{
             this.renderer.render(this.data.creatures)
        })
        })
    }

}

export default Controller