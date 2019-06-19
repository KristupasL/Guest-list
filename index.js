const cont = document.querySelector('.container');
const input = document.querySelector('.inpt');
const list = document.querySelector('.guest-List');

const btnAddEnd = document.querySelector('.add-end');
const btnAddStart = document.querySelector('.add-start');
const btnRMFirst = document.querySelector('.rm-first');
const btnRMLast = document.querySelector('.rm-last');
const btnReverse = document.querySelector('.reverse');
const btnRMFromTo = document.querySelector('.rm-f-t');
const btnAddDefined = document.querySelector('.add-defined');
const btnMoveLastFirst = document.querySelector('.mv-l-f');
const btnMoveFirstLast = document.querySelector('.mv-f-l');

const inputTo = document.querySelector('.inpt-to');
const inputFrom = document.querySelector('.inpt-from');
const inputAddDefined = document.querySelector('.inpt-add-defined');

let guest = ['Antanas', 'Tomas', 'Kristina'];

const clear = () => {
    list.innerHTML = "";
}

const draw = () => {
    for(let x = 0; x < guest.length; x++) {
        list.insertAdjacentHTML('beforeend', `
        <span>${x+1}</span>
        <span>${guest[x]}</span>
        <br>
        `);
    }
};

draw();

btnAddStart.addEventListener('click', () => {
    guest.unshift(input.value);
    clear();
    draw();
});

btnAddEnd.addEventListener('click', () => {
    guest.push(input.value);
    clear();
    draw();
});

btnRMFirst.addEventListener('click', () => {
    guest.shift();
    clear();
    draw();
});

btnRMLast.addEventListener('click', () => {
    guest.pop();
    clear();
    draw();
});

btnReverse.addEventListener('click', () => {
    guest.reverse();
    clear();
    draw();
});

btnRMFromTo.addEventListener('click', () => {
    guest.slice(Number(inputFrom.value), Number(inputTo.value));
    clear();
    draw();
});
