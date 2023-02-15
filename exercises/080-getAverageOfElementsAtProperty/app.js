// Write your function here

function getAverageOfElementsAtProperty(obj, key) {
    var sum = 0;

    if(!obj[key] || obj[key].length == 0){
        return 0;
    }
    for (i in obj[key]) { sum += obj[key][i] }
    return sum / (obj[key].length);
}   