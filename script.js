function selectOption(option) {
    if (option == 'yes') {
        flashRainbow(function () {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option == 'no') {
        document.getElementById('no-button').innerText = 'You sure?';

        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

function flashRainbow(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9600d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

function displayDog() {
    var imageContainer = document.getElementById('image-container');
    var dogImage = new Image();
    dogImage.src = 'dog.gif';
    dogImage.alt = 'Dog'

    dogImage.onload = function () {
        imageContainer.appendChild(dogImage);
    };
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();

    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

displayDog();