var person = {
    name: "John",
    lastName: "Doe",
    age: 35,
    gender: "male",
    luckyNumbers: [7, 11, 13, 17],
    significantOther: person2
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};

var family = {
    lastName: "Doe",
    members: [person, person2]
};


person.luckyNumbers[3] = 33;


var person3 = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
};


family.members.push(person3);

function addAllFamilyLuckyNumbers(anArray){
    let sumOfAllLuckyNumbers = 0;


    for (let i = 0; i < anArray.length; i++) {
        let luckyNumbers = anArray[i].luckyNumbers;
        for (let j = 0; j < luckyNumbers.length; j++) {
            sumOfAllLuckyNumbers += luckyNumbers[j];
        }
    }
    
    return sumOfAllLuckyNumbers;
}


console.log(addAllFamilyLuckyNumbers(family.members)); 
