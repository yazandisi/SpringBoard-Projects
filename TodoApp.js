//part 1 and 2

const form = document.querySelector('form');
const ol = document.querySelector('ol');
const input = document.querySelector('input');
const li = document.querySelectorAll('li');


    
for (let i = 0; i < localStorage.length; i++){
    const meme = localStorage.key(i);

   if (localStorage.getItem(meme) == "true"){
       const li = document.createElement('li');
       li.innerText = localStorage.key(i).replace("Remove Todo", "");
       ol.appendChild(li);
       const btn = document.createElement('button');
       btn.innerText = "Remove Todo";
       li.append(btn);
    }
    else if(localStorage.getItem(meme) == "has line"){
        const li = document.createElement('li');
        li.innerText = localStorage.key(i).replace("Remove Todo", "");
        li.style.textDecoration = "line-through";
        ol.appendChild(li);
        const btn = document.createElement('button');
        btn.innerText = "Remove Todo";
        li.append(btn);
    }


 
}
form.addEventListener('submit', function(event){
    event.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerText = input.value;
    localStorage.setItem(input.value+"Remove Todo", true);
    input.value = '';
    ol.appendChild(newLi);
    const btn = document.createElement('button');
    btn.innerText = "Remove Todo";
    newLi.append(btn);
    form.reset();

});

ol.addEventListener('click', function(event){
    if(event.target.tagName === 'BUTTON'){
        localStorage.removeItem(event.target.parentElement.innerText);
        event.target.parentElement.remove();
    }

    else if(event.target.tagName = 'LI'){
        event.target.style.textDecoration = "line-through";
        const theKey = event.target.innerText;
        localStorage.setItem(theKey, 'has line');
         liTag = theKey;
    };
    
});














