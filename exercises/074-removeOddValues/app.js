function removeOddValues(obj) {
    // your code here
    for(prop in obj){
        if (obj[prop]%2!=0){delete obj[prop]}
    }

}