const menu = document.getElementById('menu');
const x = document.getElementById('menu-pizza');
const active = document.querySelectorAll('.nav-link');

document.addEventListener('click', function(e){
    const tgt = e.target.innerHTML;
    active.forEach(function(x){
        if(x.classList.contains('active')){
            x.classList.remove('active');
        }
        e.target.classList.add('active');
    });

    fetch('data/pizza.json').then(data => data.json()).then(data =>{
        const menu = data.menu;
        let content = '';
        if(tgt.toLowerCase() == 'menu'){
            menu.forEach(data =>{
                content += panggilData(data);
            });
        }else{
            let fil = menu.filter(f => f.kategori == tgt.toLowerCase());
            fil.forEach(data=>{
                content += panggilData(data);
            })
        }
        x.innerHTML = content;
    });
});

// menu.addEventListener('click', function(){
//     fetch('data/pizza.json').then(data => data.json()).then(data =>{
//         const pizza = data.menu;
//         let cards = '';
//         pizza.forEach((data, index) => {
//             cards += panggilData(data);
//         });
//         x.innerHTML = cards;
//     });
// });

function panggilData(data){
    return `<div class="col-md-4"> 
                <div class="card mb-4" style="width: 18rem;">
                    <img src="img/pizza/${data.gambar}">
                <div class="card-body">
                <h5 class="card-title">${data.nama}<h5>
                <p class="card-text">${data.deskripsi}</p>
                    <h5>Rp. ${data.harga}</h5>
                    <a href="#" class="btn btn-primary">Beli Sekarang</a>
                    </div>
                </div>
            </div>`;
}