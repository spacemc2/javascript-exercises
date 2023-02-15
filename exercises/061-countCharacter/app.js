function countCharacter(str, char) {
    ////first
    // count=0;

    // while(str.match(char)){
    //     str=str.replace(char,'')
    //     count++;
    // }
    // return count
    ////second
    return str.split(char).length-1

}
