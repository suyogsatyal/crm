let initialNum = 3;
var m = [];
var M = [];
var a = [];
var invM = [];
var finalSum = 0;

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
    
    
    for(i = 1; i< initialNum; i++){
        aArray = "a"+i;
        mArray = "m"+i;
        a[i] =  document.getElementById(aArray).value;
        m[i] =  document.getElementById(mArray).value;

        // if((a[i] == '')||(m[i] == '')){
        //     document.getElementById('warning').innerHTML = "Enter all the numbers";
        // }
        // else{
        //     document.getElementById('warning').innerHTML = "";
        // }
        
    }

    for(count = 1; count<=m.length - 1; count++){
    
        for(factor = 2; ((factor<m[count])||(factor<m[count+1])); factor++){
            if((m[count]%factor==0)&&(m[count+1]%factor==0)){
                hcf = factor;
            }
        }
        
        if(hcf!=1){
            break;
        }
    }
    
    if(hcf != 1){
        document.getElementById('warning').innerHTML = "The numbers are not relatively-prime";
    }
    else{
        document.getElementById('warning').innerHTML = "";
        // console.log(m);
        m[0] = MFunction()
        // console.log(m[0]);
    }

    if(hcf ==1){
        finalStep();
    }

}

function MFunction(){
    product = 1;
    for(i = 0;i<initialNum; i++ ){
        product = product * m[i]
    }

    for(i = 1;i<initialNum; i++ ){
        M[i] = product / m[i];
        invM[i] = invMFunction(M[i], m[i]);
        // console.log(invM[i]);
        // console.log("M"+i+"="+M[i])
    }

    return product
}

function invMFunction(a, m){
    a %= m;
    for (var x = 1; x < m; x++) {
        if ((a*x)%m == 1) {
            return(x);
        }
    }
}

function finalStep(){
    solution = document.getElementsByClassName('solution')
    for(i = 1; i<initialNum; i++){
        finalSum = finalSum + M[i]*invM[i]*a[i];
    }

    answer = finalSum % m[0];
    
    // solution.innerHTML = `The solution is ${answer}.`;
    
    alert("The solution is "+answer)
    
}