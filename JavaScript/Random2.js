var people = ["Angela", "Jac","Pam", "Lara","James","Jason"]

function whoIsPAying(people) {
    var random_index  =Math.floor(Math.random() * people.length)
    return people[random_index] + " is buying us lunch today"
}

console.log(whoIsPAying(people));