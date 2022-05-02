// Regex validate PIN code : "https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript"

function validatePIN (pin) {
    return /^[\d]{4}$/.test(pin) || /^[\d]{6}$/.test(pin)
    }

    

