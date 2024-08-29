// Function to verify if the service quality input is valid
function isValidServiceQuality(serviceQuality) {
    const validQualities = ['great', 'ok', 'poor'];
    return validQualities.includes(serviceQuality.toLowerCase());
}

// Function to verify if the service amount is between $5.00 and $500.00
function isValidServiceAmount(serviceAmount) {
    return serviceAmount >= 5 && serviceAmount <= 500;
}

// Function to calculate the tip based on service quality
function calculateTip(serviceAmount, serviceQuality) {
    let tipPercentage;
    if (serviceQuality.toLowerCase() === 'great') {
        tipPercentage = 0.20;
    } else if (serviceQuality.toLowerCase() === 'ok') {
        tipPercentage = 0.15;
    } else if (serviceQuality.toLowerCase() === 'poor') {
        tipPercentage = 0.10;
    }
    return serviceAmount * tipPercentage;
}

// Main script
const serviceAmount = parseFloat(prompt("Enter the service amount in dollars:"));
const serviceQuality = prompt("Enter the service quality (great, ok, poor):");

if (!isValidServiceQuality(serviceQuality)) {
    alert("Invalid service quality entered. Please enter 'great', 'ok', or 'poor'.");
} else if (!isValidServiceAmount(serviceAmount)) {
    alert("Invalid service amount. Please enter an amount between $5.00 and $500.00.");
} else {
    const tipAmount = calculateTip(serviceAmount, serviceQuality);
    alert(`For a service amount of $${serviceAmount.toFixed(2)}, the recommended tip is $${tipAmount.toFixed(2)} based on ${serviceQuality} service.`);
}
