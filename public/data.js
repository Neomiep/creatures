class Data{
    constructor(){
        this.creatures = []
    }

    getCreatures(){
        return $.get("/creatures").then((data)=>{
            this.creatures = data
        })
    }

    addCreature(name,creatureType){
        let creature = {name:name,creatureType:creatureType}
        return $.post("/creatures/"+ name + "/" + creatureType,creature).then((data)=>{
            this.creatures.push(data)
        })
    }
}

export default Data