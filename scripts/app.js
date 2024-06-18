const numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input',() => {
    const value = parseFloat(numberInput.value);
    if(value <= -10 || value >= 10)
        alert('The number should be between -10 and 10');
});

const fruit = {
    Name: 'Apple',
    Color: 'Red',
    Taste: 'Sweet'
};

console.log(fruit);


// Printing our car information to the page
document.querySelector('#fruitName').innerHTML = 'Name: ${fruit.Name}';
document.querySelector('#fruitColor').innerHTML = 'Color: ${fruit.Color}';
document.querySelector('#fruitTaste').innerHTML = 'Taste: ${fruit.Taste}';

