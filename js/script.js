function submit(){
    var hcf = 1;
    globalThis,a = [3];
    a[0] = 0;
    globalThis,m = [3];
    m[0] = 0;
    a[1] =  document.getElementById("a1").value;
    // console.log(a[1]);
    a[2] =  document.getElementById("a2").value;
    // console.log(a[2]);

    m[1] =  document.getElementById("m1").value;
    // console.log(m[1]);
    m[2] =  document.getElementById("m2").value;
    // console.log(m[2]);

    for (let i = 1; ((i<m[1])||(i<m[2])); i++) {
        if(( m[1]%i == 0 )&&( m[2]%i ==0 )){
            hcf = i;
        }
    }

    if(hcf == 1){
        alert("The numbers are relatively-prime");
    }
    else{
        alert("The numbers are not relatively-prime");
    }
}