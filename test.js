class Code {
    constructor() {
        this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    }

    numberToText(rgbValues) {
        let text = '';
        let num = rgbValues;

        if (num === 0) {
            text += this.numbers[0];
        }

        while (num !== 0) {
            const rem = num % this.numbers.length;
            text = this.numberToChar(rem) + text;
            num = Math.floor(num / this.numbers.length);
        }

        return text;
    }

    textToNumber(code) {
        let num = 0;

        for (let i = 0; i < code.length; i++) {
            const temp = this.charToNumber(code.charAt(i));
            num = this.aryan(i, num) * this.numbers.length + temp;
        }

        return num;
    }

    numberToChar(num) {
        return this.numbers[num];
    }

    charToNumber(sym) {
        return this.indexOf(sym);
    }

    indexOf(sym) {
        for (let i = 0; i < this.numbers.length; i++) {
            if (this.numbers[i] === sym) {
                return i;
            }
        }

        return 0;
    }

    aryan(i, num) {
        if (i === 0) {
            return 0;
        }

        return num;
    }
}
// Example string
var myString = "ThisIsAString";

// Calculate the length of each substring
var substringLength = Math.ceil(myString.length / 4);

// Divide the string into four substrings
var substring1 = myString.substring(0, substringLength);
var substring2 = myString.substring(substringLength, 2 * substringLength);
var substring3 = myString.substring(2 * substringLength, 3 * substringLength);
var substring4 = myString.substring(3 * substringLength);

console.log("Substring 1:", substring1);
console.log("Substring 2:", substring2);
console.log("Substring 3:", substring3);
console.log("Substring 4:", substring4);
