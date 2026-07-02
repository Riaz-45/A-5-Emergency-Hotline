let count = 0;
// document.getElementById('heart-btn').addEventListener('click', function(){
//     // console.log('clicked')

//     count ++;
    
//     return document.getElementById('heart-btn-count').innerText = count;
    

// })

// document.getElementById('heart-btn-2').addEventListener('click', function(){
//     // console.log('clicked')

//     count ++;

//     return document.getElementById('heart-btn-count').innerText = count;


const hearts = document.getElementsByClassName('heart-btn');
for(const heart of hearts){
    heart.addEventListener('click', function(){
        count ++;
        return document.getElementById('heart-btn-count').innerText = count;
    })
}