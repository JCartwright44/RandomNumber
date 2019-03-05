var number = 1


function genNumber() {
number = Math.floor(Math.random()*323 + 1)
}

genNumber();

console.log(number)

$('#button').on('click', function() {
    $('.number').html(number);
    genNumber();
})