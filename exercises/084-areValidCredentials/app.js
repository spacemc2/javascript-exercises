// Write your function here
function areValidCredentials(name,pwd){
    return name.length > 3 && pwd.length >= 8;
}

console.log(areValidCredentials("aaa","aaaaaaaa"));