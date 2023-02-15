let obj = {
    person:"Rafael",
    lastName:"Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27,
}

function countNumberOfKeys(obj) {
    // your code here
    count=0
    for(prop in obj){
        count++;
    }
    return count
   
}
console.log(countNumberOfKeys(obj))
