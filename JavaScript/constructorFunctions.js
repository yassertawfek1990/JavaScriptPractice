function HouseKeeper(name,age,ListOfThings) { 
    this.name = name
    this.age = age
    this.ListOfThings = ListOfThings
    this.clean = function(){ // this called a method and we do not need to add it as a parameter to the function
        console.log("I am Cleaning") 
    }
}


var houskeeper1 = new HouseKeeper('soso',20,['anything1',20,'anything2'])
houskeeper1.clean()
console.log(houskeeper1.ListOfThings)