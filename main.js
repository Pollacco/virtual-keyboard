const keyArray = ['ё','1', '2', '3', '4', '5', '6', '7', '8', '9', '0','-','+','backspace',
                'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з','х','ъ','\'',
                'capsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д','ж', 'э', 'enter',
                'leftShift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'upArrow', 'rightShift',
                'leftCtrl', 'alt', 'space', 'alt', 'rightCtrl', 'leftArrow','downArrow','rightArrow'];

const section = document.createElement('div');
const textArea = document.createElement('textarea');
const keyboard = document.createElement('div');   
const warning = document.createElement('h1')

section.classList.add('wrapper');
document.body.appendChild(section);
textArea.classList.add('input');
section.appendChild(warning);
warning.textContent = 'Работу я начал делать 06.04, буду доделывать уже после дэдлайна'
section.appendChild(textArea);
keyboard.classList.add('keyboard');
section.appendChild(keyboard);



function renderKeyboard(keyArray) {                                                     //render default keyboard
    for(let i = 0; i<keyArray.length; i++){
        const key = document.createElement('div');
        key.classList.add('key');
        keyboard.appendChild(key);
        key.textContent = keyArray[i];
    }
}

renderKeyboard(keyArray);