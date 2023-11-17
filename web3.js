function calculate() {
    var amount = document.getElementById('amount').value;
    var rate = document.getElementById('rate').value;
    var time = document.getElementById('time').value;
    const interest = (amount * (rate * 0.01)) / time;
    let emi = ((amount / time) + interest).toFixed(2);
    emi = emi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("output").innerHTML = emi;
}
