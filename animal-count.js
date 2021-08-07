function animalCount(miles){
    const firstDensity = 10;
    const secondDensity = 50;
    const thirdDensity = 100;
    let totalAnimals = 0;

    if (miles <= 10){
        const firstDenseAnimal = miles * firstDensity;

        totalAnimals = firstDenseAnimal;
    }
    else if (miles <= 20){
        const firstDenseAnimal = 10 * firstDensity;
        const restMiles = miles - 10;

        const secondDenseAnimal = restMiles * secondDensity;

        totalAnimals = firstDenseAnimal + secondDenseAnimal;
    }
    else {
        const firstDenseAnimal = 10 * firstDensity;
        const secondDenseAnimal = 10 * secondDensity;

        const restMiles = miles - 20;

        const thirdDenseAnimal = restMiles * thirdDensity;

        totalAnimals = firstDenseAnimal + secondDenseAnimal + thirdDenseAnimal;
    }
    return totalAnimals;
}

console.log(animalCount(-2));