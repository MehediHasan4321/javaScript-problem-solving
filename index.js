//problem no-1
//This function taka number as a prometer and miltiply by 3 with the parameter then add 10 to the result than divided by 2 after all subsctrac with the final result by 5.

function mindGame(number) {
    let result = 0;
    if (typeof number === "number") {
        if (number > 0) {
            alert("Plz provide a positive number");
        }
        else {
            result = number * 3;
            result = result + 10;
            result = result / 2;
            result = result - 5
        };
    }else{
        alert("Plz Provide a Number as a Prameter")
    }
    return result;
}


//Problem no-2
//evenOdd function take a string and it will check the string length, if string length divided by 2 and the remainder will be 0 it will return "even";
//or the remainder is 1 this function return "Odd"
function evenOdd(string) {
    if (typeof string === "string") {
        if (string.length % 2 === 0) {
            return "Event"
        } else {
            return "Odd"
        }

    } else {
        alert("Plz provide a string to getting the right output")
    }
}

//Problem no-3
// This function taking a string as a parameter than it will check if the paramerer is less than 7 it will return the differenc between 7 and parameter ;
//Otherwise this function return difference miltple by 2;

function isLGSeven(number) {
    if (typeof number === "number") {
        let differenc = number - 7
        if (Math.abs(differenc) < 7) {
            return differenc
        } else {
            let miltple = Math.abs(differenc) * 2;
            return miltple
        }
    } else {
        alert("Plz provide a numbr as a prameter ot getting the right output")
    }
}



//Problem no-4
//This function take an array. and array value also have to number otherwise this function return an alart So, getting the right output Plz provide correct input.

function findingBadData(arr) {
    let badDate = 0;
    let goodDate = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] < 0) {
                badDate += 1;
            } else if (arr[i] >= 0) {
                goodDate++
            }
        }
        else {
            alert("Plz provide a numbr as a prameter ot getting the right output")
        }
    }
    return badDate;
}



//Problem no-5
// This function take three prameter. this parameter are also be number. So getteing the right out put provide number as a parameter.


function gemsToDiamond(friGam1, friGam2, friGam3) {
    if (typeof friGam1, friGam2, friGam3 === "number") {
        const firstFriendGam = friGam1 * 21;
        const secondFriendGam = friGam2 * 32;
        const thirdFriendGam = friGam3 * 43;
        const totalGam = firstFriendGam + secondFriendGam + thirdFriendGam;
        if (totalGam > (1000 * 2)) {
            return totalGam - 2000;
        }
        else if (totalGam < (1000 * 2)) {
            return totalGam
        }
    } else {
        alert("Plz provide number as a prameter ot getting the right output")
    }

}
