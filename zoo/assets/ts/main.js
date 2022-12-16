//////////////////////////////Animals////////////////////////////////
var redfox1 = {
    id: 1,
    name: 'redfox1',
    age: 3,
    food: 310,
    animal: "redfox",
    biome: "Taiga",
    reservoir: true,
    requiredSpace: 50,
    eatfood: "mammals",
    typeofAnimal: "predator"
};
var redfox2 = {
    id: 2,
    name: 'redfox2',
    age: 4,
    food: 500,
    animal: "redfox",
    biome: "Taiga",
    reservoir: true,
    requiredSpace: 50,
    eatfood: "mammals",
    typeofAnimal: "predator"
};
var redfox3 = {
    id: 3,
    name: 'redfox3',
    age: 3,
    food: 600,
    animal: "redfox",
    biome: "Taiga",
    reservoir: true,
    requiredSpace: 50,
    eatfood: "mammals",
    typeofAnimal: "predator"
};
var rabbit1 = {
    id: 4,
    name: 'rabbit1',
    age: 0,
    food: 20,
    animal: "rabbit",
    biome: "forest",
    reservoir: true,
    requiredSpace: 10,
    eatfood: "grass",
    typeofAnimal: "herbivore"
};
var rabbit2 = {
    id: 5,
    name: 'rabbit2',
    age: 0,
    food: 20,
    animal: "rabbit",
    biome: "forest",
    reservoir: true,
    requiredSpace: 10,
    eatfood: "grass",
    typeofAnimal: "herbivore"
};
var tiger1 = {
    id: 6,
    name: 'tiger1',
    age: 2,
    food: 200,
    animal: "tiger",
    biome: "tropical",
    reservoir: false,
    requiredSpace: 1000,
    eatfood: "carnivore",
    typeofAnimal: "predator"
};
var cage1 = {
    id: 1,
    name: 'cage1',
    biome: "forest",
    reservoir: true,
    area: 50,
    animals: []
};
var cage2 = {
    id: 2,
    name: 'cage2',
    biome: "tropical",
    reservoir: false,
    area: 1000,
    animals: []
};
var cage3 = {
    id: 3,
    name: 'cage3',
    biome: "Taiga",
    reservoir: true,
    area: 200,
    animals: []
};
function placeAnimals(animal, enclosure) {
    if (animal.reservoir === enclosure.reservoir && animal.biome === enclosure.biome && animal.requiredSpace <= enclosure.area) {
        console.log("This enclosure is suitable for ".concat(animal.name, "."));
        checkType(animal, enclosure.animals);
        // return console.log(`${animal.name} added to ${enclosure.name}`) ;
        return "".concat(animal.name, " added to ").concat(enclosure.name);
    }
    else {
        console.log("It is impossible to add \"".concat(animal.name, "\" to enclosure with ").concat(enclosure.area, "m area,").concat(enclosure.biome, " biome. "));
        // return console.log('That is why adding failed.')
        return 'In this case it is not possible';
    }
}
function checkType(animal, animals) {
    for (var i = 0; i < animals.length; i++) {
        if ((animals[i].typeofAnimal == 'predator' && animal.typeofAnimal == 'herbivore') || (animals[i].typeofAnimal == 'herbivore' && animal.typeofAnimal == 'predator')) {
            console.log("This enclosure is not suitable for ".concat(animal.name, ",because types of animals are opposite. "));
            console.log('====================================');
        }
        else {
            animals.push(animal);
        }
    }
    //    animal or animals list
}
console.log(placeAnimals(redfox1, cage3));
console.log(placeAnimals(redfox2, cage3));
console.log(placeAnimals(redfox3, cage3));
console.log(placeAnimals(rabbit1, cage1));
console.log(placeAnimals(rabbit2, cage2));
console.log(placeAnimals(tiger1, cage2));
console.log('************************************************************************************************');
console.log('================================================================================================');
console.log('************************************************************************************************');
function showAnimals(enclosure) {
    console.log("Animals in ".concat(enclosure.name, ":"));
    enclosure.animals.forEach(function (anm) {
        console.log(anm.name);
        if (enclosure.animals.length === 0) {
            console.log("This enclosure is empty..");
        }
        return console.log("".concat(anm.name));
    });
}
showAnimals(cage1);
showAnimals(cage2);
showAnimals(cage3);
console.log(cage1.animals);
