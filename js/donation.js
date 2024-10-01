// Donations 
document.getElementById('noakhali-donation-btn').addEventListener('click', function(){
    const donationAmount  = getInputFieldValueById('nohakhali-donation-input');

    const totalCollectionAmount = getTextFieldValueById('nohakhali-donation-collection-amount'); 
    const collectionAmountId = document.getElementById('nohakhali-donation-collection-amount');

    const donationEventName = "Donate for Flood at Noakhali, Bangladesh";
    const calculatedBalance = calculateTotalAmountAfterDonation(donationAmount, totalCollectionAmount, collectionAmountId, donationEventName);

    document.getElementById("donation-complete").showModal();

});

document.getElementById('feni-donation-btn').addEventListener('click', function(){
    const donationAmount  = getInputFieldValueById('feni-donation-input');
    
    const totalCollectionAmount = getTextFieldValueById('feni-donation-collection-amount'); 
    const collectionAmountId = document.getElementById('feni-donation-collection-amount');

    const donationEventName = "Donate for Flood Relief in Feni,Bangladesh";
    const calculatedBalance = calculateTotalAmountAfterDonation(donationAmount, totalCollectionAmount, collectionAmountId, donationEventName);

    document.getElementById("donation-complete").showModal();
});

document.getElementById('quota-movement-btn').addEventListener('click', function(){
    const donationAmount  = getInputFieldValueById('quota-movement-input');
    
    const totalCollectionAmount = getTextFieldValueById('quota-movement-amount'); 
    const collectionAmountId = document.getElementById('quota-movement-amount');

    
    const donationEventName = "Aid for Injured in the Quota Movement";
    const calculatedBalance = calculateTotalAmountAfterDonation(donationAmount, totalCollectionAmount, collectionAmountId, donationEventName);

    document.getElementById("donation-complete").showModal();
});