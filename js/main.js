for (let button_number = 0; button_number < 4; button_number++) {
    let hidden_part = document.getElementById('interactive_card_hidden_part' + button_number);
    hidden_part.style.display = 'none';
}

function add_block(button_number) {
    let paragraph = document.getElementById('add_block_button' + button_number);
    let hidden_part = document.getElementById('interactive_card_hidden_part' + button_number);

    if (paragraph.innerHTML == '-'){
        paragraph.innerHTML = '+';
        hidden_part.style.display = 'none';
    }
    else if (paragraph.innerHTML == '+') {
        paragraph.innerHTML = '-';
        hidden_part.style.display = 'block';
    }
}

function to_up() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}