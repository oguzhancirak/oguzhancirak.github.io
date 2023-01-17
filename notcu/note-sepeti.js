const yeniGorevEkleme = document.querySelector('.input-gorev');
const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi');

yeniGorevEkleBtn.addEventListener('click', gorevEkle);


//ekleme silme operasyonları
gorevListesi.addEventListener('click',gorevSilTamamla);
function gorevSilTamamla(e){
    const tiklanilanEleman=e.target;
    if(tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')){
        console.log('chech tıklandı');
        tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi');
    }
    if(tiklanilanEleman.classList.contains('gorev-btn-sil')){
        console.log('delete tıklandı');
        tiklanilanEleman.parentElement.classList.toggle('kaybol')
        //transitionend gerçekleşen bir animasyon varsa bitmesini bekliyor
        tiklanilanEleman.parentElement.addEventListener('transitionend',function(){
             tiklanilanEleman.parentElement.remove();
        })
       
        
    }


}


function gorevEkle(e) {
    e.preventDefault();
    //div oluşurm
    const gorevDiv=document.createElement('div');
    gorevDiv.classList.add('gorev-item');

    //li oluşturma
    const gorevLi=document.createElement('li');
    gorevLi.classList.add('gorev-tanim');
    gorevLi.innerText=yeniGorevEkleme.value;
    //divin içine li ekleme 
    gorevDiv.appendChild(gorevLi);

    //tamamlandi butunu ekle
    const gorevTamamBtn=document.createElement('button');
    gorevTamamBtn.classList.add('gorev-btn');
    gorevTamamBtn.classList.add('gorev-btn-tamamlandi');
    gorevTamamBtn.innerText='Tamamlandi';
    gorevDiv.appendChild(gorevTamamBtn)

    //ul'ye oluşturduğumuz divi ekleyelim
    gorevListesi.appendChild(gorevDiv)

    yeniGorevEkleme.value='';

    //sil butunu ekleme
    const gorevSilBtn=document.createElement('button');
    gorevSilBtn.classList.add('gorev-btn');
    gorevSilBtn.classList.add('gorev-btn-sil');
    gorevSilBtn.innerText='Sil';
    gorevDiv.appendChild(gorevSilBtn)

}