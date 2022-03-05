const playBtn = document.querySelector('#play');
const tryNowBtn = document.querySelector('#try');
const playModal = document.querySelector('#video-modal');
const tryModal = document.querySelector('#try-modal');
const modalCloseBtn = document.querySelector('#close');

// Show modal
playBtn.addEventListener('click', () => showModal(playModal));
tryNowBtn.addEventListener('click', () => showModal(tryModal));
// playBtn.addEventListener('click', () => playModal.classList.add('show-modal'));
// tryNowBtn.addEventListener('click', () => tryModal.classList.add('show-modal'));


// Hide modal
hideModal(playModal);
hideModal(tryModal, modalCloseBtn);

function showModal(targetModal, addingClass='show-modal'){
    targetModal.classList.add(addingClass);
    document.body.style.overflow = 'hidden';
}

function hideModal(targetModal, closeBtn=null, removingClass='show-modal'){
    if(closeBtn != null){
        closeBtn.addEventListener('click', () => {
            targetModal.classList.remove(removingClass);
            document.body.style.overflow = 'auto';
        });
    }
    window.addEventListener('click', e =>{
        if(e.target == targetModal){
            targetModal.classList.remove(removingClass);
            document.querySelector('video').load();
            document.body.style.overflow = 'auto';
        }
    });
}