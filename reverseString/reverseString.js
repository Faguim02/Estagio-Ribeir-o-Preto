function reverseString(string){
    
    let stringReversed = "";
    
    for(let i = 0; i< string.length;i++){
        stringReversed = string[i] + stringReversed;
    }
    
    console.log(stringReversed);
}

reverseString("Fagner");