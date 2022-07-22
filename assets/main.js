let clickBtn = document.getElementById('btn1')
clickBtn.disabled = true;

clickBtn.addEventListener('click', stateHandle);

function enableButton2() {
     document.getElementById('btn2').disabled = false;
    clickBtn.classList.add('btn-active')  
}