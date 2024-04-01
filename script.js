function yes() {
    alert("😆LOOOOL😆");
}

$(function() {
    $("#no").on({
        mouseover: function() {
            moveButton($(this));
        },
        click: function() {
            moveButton($(this));
        },
        touchstart: function() {
            moveButton($(this));
        }
    });
});

function moveButton(button) {
    button.css({
        left: (Math.random() * ($(window).width() - button.width())) + "px",
        top: (Math.random() * ($(window).height() - button.height())) + "px",
        position: 'absolute'
    });
}

const btn = document.getElementById('no');
btn.addEventListener('click', function handleClick(){
    btn.textContent = 'No me lo puedo creer!😫';
    setTimeout(function() {
        btn.textContent = 'NO!';
    }, 1000);
});