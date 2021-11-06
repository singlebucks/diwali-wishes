const Wish = document.getElementById('demo');
const btn = document.getElementById('btn');
const twt = document.getElementById('twt');
const fb = document.getElementById('fb');
const mail = document.getElementById('mail');
const whatsapp = document.getElementById('whatsapp');

btn.addEventListener('click', getWish);

getWish();

function getWish() {
    // fetch("https://www.sonu.live/JSON/db.json")
    fetch("db.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // console.log(data);
            let index = Math.floor(Math.random() * data.length);
            // console.log(index);
            var wish = data[index].wish;
            Wish.textContent = wish;



            // links

            twt.href = `https://twitter.com/intent/tweet?text=${wish}`;
            fb.href = `https://facebook.com/sharer/sharer.php?u=https://www.sonu.live/diwali-wishes/`;
            mail.href = `mailto:?subject=Happy%20Diwali&body=${wish}`;
            whatsapp.href = `https://api.whatsapp.com/send/?text=${wish}`;


        });
}
