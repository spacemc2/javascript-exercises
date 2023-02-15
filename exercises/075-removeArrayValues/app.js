function removeArrayValues(obj) {
    // your code here
    for(prop in obj){
        if (Array.isArray(obj[prop])){delete obj[prop]}
    } 
}
