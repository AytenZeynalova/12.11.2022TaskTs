interface IAnimalTypes {
    id: number;
    animal: string;
    biome: string;
    reservoir: boolean;
    requiredSpace: number;
    eatfood: string;
    typeofAnimal:Type;
}

interface IAnimal extends IAnimalTypes {
    id: number;
    name: string;
    age: number;
    food: number;
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
    animal: "redfox",
    biome: "Taiga",
    reservoir: true,
    requiredSpace: 50,
    eatfood: "mammals",
    typeofAnimal:"predator",
}

let redfox2: IAnimal = {
    id: 2,
    name: 'redfox2',
    age: 4,
    food: 500,
    animal: "redfox",
    biome: "Taiga",
    reservoir: true,
    requiredSpace: 50,
    eatfood: "mammals",
    typeofAnimal:"predator",
}

let redfox3: IAnimal = {
    id: 3,
    name: 'redfox3',
    age: 3,
    food: 600,
    animal: "redfox",
    biome: "Taiga",
    reservoir: true,
    requiredSpace: 50,
    eatfood: "mammals",
    typeofAnimal:"predator",
}

let rabbit1: IAnimal = {
    id: 4,
    name: 'rabbit1',
    age: 0,
    food: 20,
    animal: "rabbit",
    biome: "forest",
    reservoir: true,
    requiredSpace: 10,
    eatfood: "grass",
    typeofAnimal:"herbivore",
}

let rabbit2: IAnimal = {
    id: 5,
    name: 'rabbit2',
    age: 0,
    food: 20,
    animal: "rabbit",
    biome: "forest",
    reservoir: true,
    requiredSpace: 10,
    eatfood: "grass",
    typeofAnimal:"herbivore",
}

let tiger1: IAnimal = {
    id: 6,
    name: 'tiger1',
    age: 2,
    food: 200,
    animal: "tiger",
    biome: "tropical",
    reservoir: false,
    requiredSpace: 1000,
    eatfood: "carnivore",
    typeofAnimal:"predator",
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

function placeAnimals(animal:IAnimal,enclosure:ICages) {
    if (animal.reservoir===enclosure.reservoir && animal.biome===enclosure.biome && animal.requiredSpace<=enclosure.area) {
                 
    console.log(`This enclosure is suitable for ${animal.name}.`); 
    checkType(animal,enclosure.animals);


   
    // return console.log(`${animal.name} added to ${enclosure.name}`) ;

    return `${animal.name} added to ${enclosure.name}`;

        
    }
    else{
        console.log(`It is impossible to add "${animal.name}" to enclosure with ${enclosure.area}m area,${enclosure.biome} biome. `);
        // return console.log('That is why adding failed.')

        return 'In this case it is not possible';
    }

}
function checkType(animal:IAnimal,animals:IAnimal[]) {
for (let i = 0; i < animals.length; i++) {
if ((animals[i].typeofAnimal=='predator' && animal.typeofAnimal=='herbivore') || (animals[i].typeofAnimal=='herbivore' && animal.typeofAnimal=='predator')) {
    console.log(`This enclosure is not suitable for ${animal.name},because types of animals are opposite. `);
    console.log('====================================');
}
else{
    animals.push(animal);
    
}

}


//    animal or animals list


}

console.log(placeAnimals(redfox1,cage3));
console.log(placeAnimals(redfox2,cage3));
console.log(placeAnimals(redfox3,cage3));
console.log(placeAnimals(rabbit1,cage1));
console.log(placeAnimals(rabbit2,cage2));
console.log(placeAnimals(tiger1,cage2));

console.log('************************************************************************************************');
console.log('================================================================================================');
console.log('************************************************************************************************');



function showAnimals(enclosure:ICages) {
console.log(`Animals in ${enclosure.name}:`);
enclosure.animals.forEach(anm => {
console.log(anm.name)
if (enclosure.animals.length===0) {
    console.log("This enclosure is empty..");
    
}
return console.log(`${anm.name}`) 
})
}
showAnimals(cage1);
showAnimals(cage2);
showAnimals(cage3);


console.log(cage1.animals);