const pwEle = document.getElementById("pw");
const copyEle = document.getElementById("copy");
const lenEle = document.getElementById("len");
const lowerEle = document.getElementById("lower");
const upperEle = document.getElementById("upper");
const symbolEle = document.getElementById("symbol");
const numberEle = document.getElementById("number");
const generateEle = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";




getUppercase = function () {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}
getLowercase = function () {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
getNumber = function () {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
getSymbol = function () {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

generatePass = function() {
    const xs = [];
    if (upperEle.checked) {
        xs.push(getUppercase());
    }

    if (lowerEle.checked) {
        xs.push(getLowercase());
    }

    if (numberEle.checked) {
        xs.push(getNumber());
    }

    if (symbolEle.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}
generatePassword = function () {
    const len = lenEle.value;
    let pass = '';
    if (upperEle.checked) {
        pass += getUppercase();
    }
    if (lowerEle.checked) {
        pass += getLowercase();
    }
    if (numberEle.checked) {
        pass += getNumber();
    }
    if (upperEle.checked) {
        pass += getSymbol();
    }

    for (let i = pass.length; i < len; i++) {
        const p = generatePass();
        console.log(p);
        pass += p;
    }
    pwEle.innerText = pass;

    var x = document.getElementById("toast_msg");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    // nativeToast({
    //     message: 'Sucess!',
    //     position: 'center',    
    //     rounded: true,
    //     timeout: 10000,
    //     type: 'sucess',
    //     icon: false,
    //     edge:true,
    //     closeOnClick: false,
    //     elements: [createElement()]
    //   })
}

generateEle.addEventListener('click', generatePassword);

copyEle.addEventListener('click', () =>{
    const textarea = document.createElement("textarea");
    const password = pwEle.innerText;
     
    if(!password) {
        return ;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand(copy);
    textarea.remove();
    alert("Password copied to clipboard !!!");
    createElement();
});

// copyEle.addEventListener('click', () =>{
//     nativeToast({
//         message: 'Sucess!',
//         position: 'center',    
//         rounded: true,
//         timeout: 10000,
//         type: 'sucess',
//         icon: false,
//         edge:true,
//         closeOnClick: false,
//         elements: [createElement()]
//       })
// })
function createElement(){
    let el = document.createElement('div');
    let child = document.createElement('span');
    child.innerText = "Password genereate sucessfully !!";
    el.appendChild(child);
    return el;
}