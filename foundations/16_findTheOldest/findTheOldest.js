function getAge (birth, death) {
    if (!death) {
        death = new Date().getFullYear()
    }
    return death - birth
}


const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)

        if (oldestAge > currentAge) {
            return oldest
        } else {
            return currentPerson
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
