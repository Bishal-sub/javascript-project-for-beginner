const form = document.querySelector('#bmiForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseFloat(document.querySelector('#height').value); 
    const weight = parseFloat(document.querySelector('#weight').value); 
    const result = document.querySelector('#result');
    
    if (isNaN(height) || height <= 0) {
        result.innerHTML = `Please enter a valid height ${height}`;
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please enter a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
       // result.innerHTML = `Your BMI is ${bmi}`;

        if (bmi < 18.5) {
            result.innerHTML = `Your BMI is ${bmi}. You are underweight.`;
        } else if (bmi < 25) {
            result.innerHTML = `Your BMI is ${bmi}. You have a normal weight.`;
        } else if (bmi < 30) {
            result.innerHTML = `Your BMI is ${bmi}. You are overweight.`;
        } else {
            result.innerHTML = `Your BMI is ${bmi}. You are obese.`;
        }
    }
});
