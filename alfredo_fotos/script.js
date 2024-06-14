let item = 0 
const max = 50;

function proxImagem( img ){
    fetch(`img/${img}.jpg`)
    .then(resp => resp.blob())
    .then(blob =>{
        const imageObjectURL = URL.createObjectURL(blob);
        
        const proxImgTag = document.createElement("img");
        proxImgTag.src = imageObjectURL;
        document.getElementById("placeholder").appendChild(proxImgTag);    
    })
}
window.onload = function(){
    for(; item < 20 ; item++){
        proxImagem(item);
    }
}
window.onscroll = function(){
    let altura = document.body.scrollHeight;
    let scrollPoint = window.scrollY + window.innerHeight;
    if(scrollPoint >= altura){
        proxImagem(item ++ % max );
    }
}

