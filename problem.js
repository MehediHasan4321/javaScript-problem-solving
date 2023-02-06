function mindGame(number) {
    let result = 0;
    if (number < 0) {
        alert("Plz provide a positive number");
    } else {
        result = number *3;
        result+=10;
        result = result / 2;
        result = result - 5
    };
    return result;
}

console.log(mindGame(50))