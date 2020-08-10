
function button(){
    const button = document.getElementById('button');
    const list = document.getElementById('list');
    
    if(button.innerHTML == "="){
        button.innerHTML = 'X';
        list.style.display = 'block';
       
    }else{
        button.innerHTML = '=';
        list.style.display = 'none';
    }
    
}

function animation(){
    const animation = document.getElementById('text');
    if(animation.style.color = "black"){
        animation.style.textShadow = " 2px 20px 10px gray";
      
    }else{
        animation.style.color = "black";
    }
    }
function back(){
    window.location = "../index.html";
}
