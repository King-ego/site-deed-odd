function startModal(idModal){
    const modal = document.getElementById(idModal);
    modal.classList.add('modal_modalNone');
    modal.addEventListener('click', (e)=>{
        if(e.target.id == 'modal'){
            modal.classList.remove('modal_modalNone')
        }
    })
}
const corpoFundo = document.querySelector('#OneDiv');
corpoFundo.addEventListener('click',()=> startModal('modal'));
