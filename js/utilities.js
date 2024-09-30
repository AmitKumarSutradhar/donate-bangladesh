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

function toggleButtonById(id, toggleButton){
    document.getElementById("donation-content").classList.add('hidden');
    document.getElementById("history-content").classList.add('hidden');

    document.getElementById("donation-toggle-btn").classList.add('bg-transparent');
    document.getElementById("history-toggle-btn").classList.add('bg-transparent');

    document.getElementById(id).classList.remove('hidden');
    document.getElementById(toggleButton).classList.add('bg-[#B4F461]');
}

function calculateTotalAmountAfterDonation(donationAmount, totalCollectionAmount, collectionAmountId, donationEventName){
    const mainBalanceAmount = getTextFieldValueById('main-balance-amount');

    const balanceAfterDonation = mainBalanceAmount - donationAmount;

    const collectionAmountAfterDonation = totalCollectionAmount + donationAmount;
    console.log(collectionAmountAfterDonation);

    document.getElementById('main-balance-amount').innerText = balanceAfterDonation;
    collectionAmountId.innerText = collectionAmountAfterDonation;

    const div = document.createElement('div');
    div.innerHTML = `
                <div class="card lg:card-side bg-base-100 shadow-xl"></div>
                    <div class="card-body">
                        <h2 class="card-title text-center">${donationAmount} Taka is Donated for ${ donationEventName}</h2>
                        <p>Date: ${ new Date() } </p>
                        <div class="divider"></div>
                    </div>
                </div>
    `;

    document.getElementById('history-content').appendChild(div);
    
}