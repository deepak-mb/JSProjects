document.querySelector('#loan-form').addEventListener('submit', calculateLoan);

function calculateLoan(e){
    e.preventDefault(); 
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    console.log(amount, interest, years, monthlyPayment, totalPayment, totalInterest);
}
