const hen = {
    name: 'Dorty',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return 'EGG'
    }
}


console.log(hen.name);
console.log(hen.eggCount); // 0
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount); // 2