(function() {
    const num1 = 10;
    const num2 = 5;
    const sum = num1 + num2;
    console.log(`Sum of ${num1} and ${num2} is: ${sum}`);
})();
function calculateTax(taxRate) {
    return function(purchaseAmount) {
        const taxAmount = purchaseAmount * (taxRate / 100);
        console.log(`Tax amount for a purchase of $${purchaseAmount} at ${taxRate}% tax rate: $${taxAmount.toFixed(2)}`);
        return taxAmount;
    };
}
const calculateVAT = calculateTax(20); 
const vatAmount = calculateVAT(100); 
