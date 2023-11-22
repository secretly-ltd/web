class Code {
    constructor() {
        this.numbers = [' ', '3','F', 'G', 'H', '1', '2',  '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
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

function copyToClipboard(textToCopy) {
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
        })
        .catch((error) => {
            alert("Copy failed. Please try again.");
        });
}

function saveData(event) {
    event.preventDefault();
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("confirmPassword").value;
    if(getCount()!=="No"){
        var count = parseInt(localStorage.getItem("count"));
    }
    else{
        var count = 0;
    }

    if(password !== cpassword) {
        alert("Password Mismatch!!");
        window.location.href = "index.html";
        return;
    }
    for (let i = 1; i <= count; i++) {
        if(email === getEmail(i)){
            if(password === getPassword(i)){
                const codeInstance = new Code();
                var imail = getEmail(i).slice(0, -10);
                if(imail.length >=4){
                    var myString = imail;

                    var substringLength = Math.ceil(myString.length / 4);

                    var sub1 = myString.substring(0, substringLength);
                    var sub2 = myString.substring(substringLength, 2 * substringLength);
                    var sub3 = myString.substring(2 * substringLength, 3 * substringLength);
                    var sub4 = myString.substring(3 * substringLength);

                    var stri = codeInstance.textToNumber(sub1)+ " " +codeInstance.textToNumber(sub2)+ " " +codeInstance.textToNumber(sub3)+ " " + +codeInstance.textToNumber(sub4);
                    copyToClipboard(stri);
                    alert("Copy the Numbers after this alert and paste it in App, after clicking username");
                    alert(stri);
                }
                window.location.href = "index.html";
                return;
            }
            else{
                alert("Invalid password");
                window.location.href = "index.html";
                return;
            }
        }
      }
    count = parseInt(count)+1;
    localStorage.setItem("count", count);
    localStorage.setItem(count + "name", name);
    localStorage.setItem(count + "email", email);
    localStorage.setItem(count + "password", password);

    const codeInstance = new Code();
    var imail = email.slice(0, -10);
    if(imail.length >=4){
        var myString = imail;

        var substringLength = Math.ceil(myString.length / 4);

        var sub1 = myString.substring(0, substringLength);
        var sub2 = myString.substring(substringLength, 2 * substringLength);
        var sub3 = myString.substring(2 * substringLength, 3 * substringLength);
        var sub4 = myString.substring(3 * substringLength);
        copyToClipboard(codeInstance.textToNumber(sub1)+ " " +codeInstance.textToNumber(sub2)+ " " +codeInstance.textToNumber(sub3)+ " " + +codeInstance.textToNumber(sub4));
        alert("Copy the Numbers after this alert and paste it in App, after clicking username")
        alert(codeInstance.textToNumber(sub1)+ " " +codeInstance.textToNumber(sub2)+ " " +codeInstance.textToNumber(sub3)+ " " + +codeInstance.textToNumber(sub4));
        
    }           
    window.location.href = "index.html";
}

function getName(count) {
    return localStorage.getItem(count + "name") || "No name found";
}

// Function to retrieve email from local storage
function getEmail(count) {
    return localStorage.getItem(count + "email") || "No email found";
}

// Function to retrieve password from local storage
function getPassword(count) {
    return localStorage.getItem(count + "password") || "No password found";
}

function getCount() {
    return localStorage.getItem("count") || "No";
}
