let initialNum = 3;

function addMore(){
    
    let input = document.getElementById('numberInput');
    let more = document.createElement('div');
    more.innerHTML = `𝑥≡ <input type="number" class="a" id="a`+initialNum+`" placeholder="a&#832`+initialNum+`"> (mod <input type="number" class="m" id="m`+initialNum+`" placeholder="m&#832`+initialNum+`">)<br><br>`;
    initialNum += 1;
    input.appendChild(more);
}

function submit(){
    var hcf = 1;
    globalThis,a = [initialNum];
    a[0] = 0;
    globalThis,m = [initialNum];
    m[0] = 1;
    
    // a[1] =  document.getElementById("a1").value;
    // // console.log(a[1]);
    // a[2] =  document.getElementById("a2").value;
    // // console.log(a[2]);

    // m[1] =  document.getElementById("m1").value;
    // console.log(m[1]);
    // m[2] =  document.getElementById("m2").value;
    // console.log(m[2]);
    // console.log(m)
    for(i = 1; i< initialNum; i++){
        aArray = "a"+i;
        mArray = "m"+i;
        a[i] =  document.getElementById(aArray).value;
        m[i] =  document.getElementById(mArray).value;
        console.log(a);
    }
    console.log(a);

    

    for(count = 1; count<=m.length - 1; count++){
    
        for(factor = 2; ((factor<m[count])||(factor<m[count+1])); factor++){
            if((m[count]%factor==0)&&(m[count+1]%factor==0)){
                hcf = factor;
            }
        }
        
        if(hcf!=1){
            console.log("Not");
            break;
        }
    }
    
    if(hcf != 1){
        document.getElementById('warning').innerHTML = "The numbers are not relatively-prime";
    }
    else{
        document.getElementById('warning').innerHTML = "";
    }
}