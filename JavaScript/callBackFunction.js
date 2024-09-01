function passingInfo(the_type,callback) {
    // some code to detect the event with the specific type
    var infoPassed = {
        name : " info",
        type : "keydown",
        value: "p"
    }
        if (infoPassed.type === the_type) {
            callback(infoPassed)
        
    }
}

passingInfo("keydown", function(event) {
    console.log(event)
})