let count = 0;
let coinValue = 100;

const hearts = document.getElementsByClassName('heart-btn');
for(const heart of hearts){
    heart.addEventListener('click', function(){
        count ++;
        return document.getElementById('heart-btn-count').innerText = count;
    })
}

let coinCount = parseInt(document.getElementById('coin-count').innerText);
const calls = document.getElementsByClassName('call-btn');
for(const call of calls){
    call.addEventListener('click', function(){
        const card = call.closest('.card');
        const serviceName = card.querySelector('.service-name').innerText;
        const hotlineNumber = card.querySelector('.hotline-number').innerText;
        // alert('🚨' + serviceName + ' service: ' + hotlineNumber);
        alert(`🚨 ${serviceName} service: ${hotlineNumber}`);

        coinValue -= 20;
        if(coinValue < 20){
            alert('❌ insufficient coin');
            return;
        }

        document.getElementById('coin-count').innerText = coinValue;

        
        
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

        alert('📞 the number is copied: ' + hotlineNumber);
    })
}