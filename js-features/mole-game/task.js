
for (let i = 1; i < 10; i++) {
    let allHole = document.getElementById(`hole${i}`);
    
    allHole.onclick = function () {
        
        if (allHole.className.includes( 'hole_has-mole' ) == true) {
            dead.textContent = +dead.textContent + 1;
            if (dead.textContent >= 10) {
                alert('K.O!');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
        else {
            lost.textContent = +lost.textContent + 1;
            if (lost.textContent >= 5) {
                alert('You looser')
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    }
}


