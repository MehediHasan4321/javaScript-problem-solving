//problem no-1

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

//Problem no-2

function evenOdd(string) {
    if (typeof string === "string") {
        if (string.length % 2 === 0) {
            return "Event"
        } else {
            return "Odd"
        }

    } else {
        alert("Plz provide a string to getting right output")
    }
}

//Problem no-3

function isLGSeven(number) {
    let differenc = number - 7
    if (Math.abs(differenc) < 7) {
        return differenc
    } else {
        return differenc *= 2
    }
}


//Problem no-4
function findingBadData(arr) {
    let badDate = 0;
    let goodDate = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            badDate += 1;
        } else if (arr[i] >= 0) {
            goodDate++
        }

    }
    return badDate;
}

//Problem no-5

function gemsToDiamond(friGam1, friGam2, friGam3) {
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
}
console.log(gemsToDiamond(100,5,1))