const numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input',() => {
    const value = parseFloat(numberInput.value);
    if(value <= -10 || value >= 10)
        alert('The number should be between -10 and 10');
})



const fruit = {
    Name: 'Apple',
    Color: 'Red',
    Taste: 'Sweet'
};

console.log(fruit);


// Printing our car information to the page
document.querySelector('#Name').innerHTML = fruit.Name;
document.querySelector('#Color').innerHTML = fruit.Color;
document.querySelector('#Taste').innerHTML = fruit.Taste;

