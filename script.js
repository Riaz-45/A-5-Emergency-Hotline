let count = 0;
let coinValue = 100;

// for increasing heart count number

const hearts = document.getElementsByClassName('heart-btn');
for(const heart of hearts){
    heart.addEventListener('click', function(){
        count ++;
        return document.getElementById('heart-btn-count').innerText = count;
    })
}


// call button and call history functionalities

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

        // const currentTime = new Date().toLocaleDateString();
        const currentTime = new Date().toLocaleTimeString();
        const calHistory = document.getElementById('call-history');
        const div = document.createElement('div');

        div.innerHTML = `
        <div class="hind-madurai flex justify-between items-center p-4 mt-4 rounded-lg bg-[rgba(250,250,250,1)]">
                <div class="font-semibold text-[18px]">
                    <h2>${serviceName}</h2>
                    <p class="text-[rgba(92,92,92,1)] text-[18px]">${hotlineNumber}</p>
                </div>
                <div>
                    <p class="text-[18px]">${currentTime}</p>
                </div>
            </div>
        `

        calHistory.appendChild(div);
        
        
    })
}


// for copy button functionalities

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