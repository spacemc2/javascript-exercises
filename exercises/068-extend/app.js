let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here

    for(attr in obj2){
        if(obj1[attr]== undefined ){obj1[attr]=obj2[attr]}
    }
    return obj1

}