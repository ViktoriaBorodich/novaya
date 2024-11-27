function isNegative(num) {
    return num < 0;
}

function checkNumber() {
    const input = document.getElementById('numberInput').value;
    const result = document.getElementById('result');
    
    if (input === '') {
        result.textContent = 'Введите число';
    } else {
        const num = parseFloat(input);
        if (isNegative(num)) {
            result.textContent = 'True.';
        }
        else {
            result.textContent = 'False.';
        }
    }
}
