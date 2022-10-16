/*==================== SHOW MODAL ====================*/ 
var modalDivs = document.querySelectorAll('.modal-open');

modalDivs.forEach(function(btn){
    btn.addEventListener('click', () =>{
        var modal = btn.getAttribute('data-modal-id');
        const selectedModal = document.getElementById(modal);

        selectedModal.style.display = "block";
    
        for(let i = 0; i < modalDivs.length; i++){
            var span = document.getElementsByClassName('close')[i];

            console.log(i)
            span.onclick = function() {
                selectedModal.style.display = 'none';
            };
        };
    });
});

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// }