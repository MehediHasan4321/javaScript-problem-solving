function mindGame(number) {
    let result = 0;
    if (number < 0) {
        alert("Plz provide a positive number");
    } else {
        result += (number * 3);
        result += (result + 10);
        result += (result / 2);
        result += (result - 5);
    };
    return result;
}


function evenOdd(string){
    if(typeof string ==="string"){
        if(string.length % 2 ===0){
            return "Event"
        }else{
            return "Odd"
        }

    }else{
        alert("Plz provide a string to getting right output")
    }
}

console.log(evenOdd("bal"))