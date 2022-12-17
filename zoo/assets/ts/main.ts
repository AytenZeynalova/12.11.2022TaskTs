interface IAnimalTypes {
    id: number;
    animal: string;
    biome: string;
    reservoir: boolean;
    requiredSpace: number;
    eatfood: string;
    typeofAnimal:Type;
}

interface IAnimal {
    id: number;
    name: string;
    age: number;
    food: number;
    typeAnm: IAnimalTypes

    
}

interface ICages {
    id: number;
    name: string;
    biome: string;
    reservoir: boolean;
    area: number;
    animals:IAnimal[]
}

type Type= 'predator' | 'herbivore';


//////////////////////////////Animals////////////////////////////////

let redfox1:IAnimal = {
    id: 1,
    name: 'redfox1',
    age: 3,
    food: 310,
    typeAnm:{
        id:1,
        animal: "redfox",
        biome: "Taiga",
        reservoir: true,
        requiredSpace: 50,
        eatfood: "mammals",
        typeofAnimal:"predator",
    }
    
}

let redfox2: IAnimal = {
    id: 2,
    name: 'redfox2',
    age: 4,
    food: 500,
    typeAnm:{
        id:2,
        animal: "redfox",
        biome: "Taiga",
        reservoir: true,
        requiredSpace: 50,
        eatfood: "mammals",
        typeofAnimal:"predator",

    }
    
}

let redfox3: IAnimal = {
    id: 3,
    name: 'redfox3',
    age: 3,
    food: 600,
    typeAnm:{
        id:3,
        animal: "redfox",
        biome: "Taiga",
        reservoir: true,
        requiredSpace: 50,
        eatfood: "mammals",
        typeofAnimal:"predator",

    }
    
}

let rabbit1: IAnimal = {
    id: 4,
    name: 'rabbit1',
    age: 0,
    food: 20,

    typeAnm:{
        id:4,
        animal: "rabbit",
        biome: "forest",
        reservoir: true,
        requiredSpace: 10,
        eatfood: "grass",
        typeofAnimal:"herbivore",
    }
    
}

let rabbit2: IAnimal = {
    id: 5,
    name: 'rabbit2',
    age: 0,
    food: 20,
    typeAnm:{
        id:5,
        animal: "rabbit",
        biome: "forest",
        reservoir: true,
        requiredSpace: 10,
        eatfood: "grass",
        typeofAnimal:"herbivore",
    }
   
}

let tiger1: IAnimal = {
    id: 6,
    name: 'tiger1',
    age: 2,
    food: 200,
    typeAnm:{
        id:6,
        animal: "tiger",
        biome: "tropical",
        reservoir: false,
        requiredSpace: 1000,
        eatfood: "carnivore",
        typeofAnimal:"predator",
    }
    
}

let cage1: ICages = {
    id: 1,
    name: 'cage1',
    biome: "forest",
    reservoir: true,
    area: 50,
    animals: [],
}

let cage2: ICages = {
    id: 2,
    name: 'cage2',
    biome: "tropical",
    reservoir: false,
    area: 1000,
    animals: [],
}

let cage3: ICages = {
    id: 3,
    name: 'cage3',
    biome: "Taiga",
    reservoir: true,
    area: 200,
    animals: [],
}

function placeAnimals(animal:IAnimal,area:ICages) {
    if (animal.typeAnm.reservoir===area.reservoir && animal.typeAnm.biome===area.biome && animal.typeAnm.requiredSpace<=area.area) {
                 
        

    console.log(`This area is suitable for ${animal.name}.`); 
    checkType(animal,area.animals);


   
    // return console.log(`${animal.name} added to ${area.name}`) ;

    return `${animal.name} added to ${area.name}`;

        
    }
    else{
        console.log(`It is impossible to add "${animal.name}" to area with ${area.area}m area,${area.biome} biome. `);
        // return console.log('That is why adding failed.')

        return 'In this case it is not possible';
    }

}
function checkType(animal:IAnimal,animals:IAnimal[]): boolean {
for (let i = 0; i < animals.length; i++) {
if ((animals[i].typeAnm.typeofAnimal!=animal.typeAnm.typeofAnimal)) {
    console.log(`This area is not suitable for ${animal.name},because types of animals are opposite. `);
    console.log('***********************************************************************************************');
    return false;
}

   

}

animals.push(animal);
return true;


//    animal or animals list


}

console.log(placeAnimals(redfox1,cage3));
console.log(placeAnimals(redfox2,cage3));
console.log(placeAnimals(redfox3,cage3));
console.log(placeAnimals(rabbit1,cage1));
console.log(placeAnimals(rabbit2,cage2));
console.log(placeAnimals(tiger1,cage2));

console.log("#############################################################################");


function showAnimals(enclosure:ICages) {
    console.log(`Animals in ${enclosure.name}:`);
    enclosure.animals.forEach(anm => {
    console.log(anm.name)
    if (enclosure.animals.length===0) {
        console.log("This enclosure is empty..");
        
    }
    return anm.name
    })
    }
    showAnimals(cage1);
    showAnimals(cage2);
    showAnimals(cage3);
    
    
    console.log(cage2.animals);