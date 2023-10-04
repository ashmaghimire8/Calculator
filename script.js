let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('result-display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result-display').value = '';
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        if (!isNaN(result) && isFinite(result)) {
            displayValue = result.toString();
            document.getElementById('result-display').value = result;
        } else {
            document.getElementById('result-display').value = 'Error';
        }
    } catch (error) {
        document.getElementById('result-display').value = 'Error';
    }
}
