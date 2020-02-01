  
function validUser(username){
    let regUser = /^x[A-Z]{4,7}x$/;
    return (regUser.test(username));
};

function validPass(password){
    let regPass = /[0-9!@#$%^&*()_+a-z][AAA-ZZZ]{3}/g;
    return (regPass.test(password));
};

// username
console.log(validUser('xFATHURx')) // true
console.log(validUser('xRidhox')) // false

// password
console.log(validPass('kick2XXX!')) // true
console.log(validPass('aV8V7V6?')) // false