const alphabet = "abcdefghijklmnopqrstuvwxyz";
const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
let left=document.getElementById('left');
let field=document.getElementById('guessField');
let guess=document.getElementById('guess');
let win=document.getElementById('wins');
let lose =document.getElementById('loses');
let z=10
let w=0
let l=0 
let u =[]
function submit(){
    while(z!=0){
        if (field.value!=''){
            if (field==randomCharacter){
                w++;
                win.innerText= w;
                z--;
                left.innerText=z;
                u.push(field.value) 
                console.log(u)
                guess.innerText=u
                field.value=' '
                break
            }
            else {
                l++;
                lose.innerText=l;
                z--;
                left.innerText= z;
                u.push(field.value)
                console.log(u)
                guess.innerText=u
                field.value=''
                break
            }
        }
        else{break}
       
    }
}

