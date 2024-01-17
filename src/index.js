const h1Title = document.querySelector("h1");
const inputColor = document.querySelector('input[type="color"]');

inputColor.addEventListener('input', function(){
    const selectedColor = inputColor.value;
    h1Title.style.color = selectedColor;
})