let count = 0;

const hearts = document.getElementsByClassName('heart-btn');
for(const heart of hearts){
    heart.addEventListener('click', function(){
        count ++;
        return document.getElementById('heart-btn-count').innerText = count;
    })
}


const copies = document.getElementsByClassName('copy-btn');
for(const copy of copies){
    copy.addEventListener('click', function(){
        const card = copy.closest('.card');
        const hotlineNumber = card.querySelector('.hotline-number').innerText;
        navigator.clipboard.writeText(hotlineNumber)

        count++;

        document.getElementById('copy-count').innerText = count;

        alert('the number is copied: ' + hotlineNumber);
    })
}