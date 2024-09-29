function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueToNumber = parseFloat(inputValue);

    return inputValueToNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueToNumber = parseFloat(textValue);

    return textValueToNumber;
}

function toggleButtonById(id){
    document.getElementById("donation-content").classList.add('hidden');
    document.getElementById("history-content").classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}