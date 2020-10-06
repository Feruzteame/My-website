

function up(){
    const button = document.getElementById('button');
    const list = document.getElementById('list');
        
        button.innerHTML = 'X';
        list.style.display = 'block';
    }

function down(){
    const button = document.getElementById('button');
    const list = document.getElementById('list');
        button.innerHTML = '<img src="https://img.icons8.com/windows/32/000000/drag-reorder.png"/>';
        list.style.display = 'none';
}
function toggle(){
    if(button.innerHTML !== 'X'){
      up();
     }else{
         down()
     }
}
function back(){
    window.location = "../index.html";
}

document.getElementById('button').addEventListener("click", toggle);
document.getElementById('logo').addEventListener('click', back);
