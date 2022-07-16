let btn = document.querySelector(".button");
let qr_code_element = document.querySelector(".qr-code");


btn.addEventListener("click",() => {
    let user_input = document.querySelector("#input_text");
    if(user_input.value !=""){
        if(qr_code_element.childElementCount == 0){
            generate(user_input);
        }else{
            qr_code_element.innerHTML="";
            generate(user_input);
        }
      }
    }

})
function generate(user_input){
    qr_code_element.style ="";

    var qrcode = new QRCode(qr_code_element,{
        text:`${user_input.value}`,
        Width:180,
        height:180,
        colorDark:"#000",
        colorLight:"#fff"
        correctLevel:QRCode.correctLevel.H
    });
    qr_code_element.style ="display: block";
}
