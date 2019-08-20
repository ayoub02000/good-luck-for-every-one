// var String="i like";
// var secondeString="pizza";
// var fullString=String+" "+secondeString;
// var myString="HELLO";
// alert(myString.toLowerCase());


// var a=2;
// var b=9;
// var i;
// for(i=0;i<10;i++){
//     alert(i);
// }

// var myArray=[1,2,3,4];
// myArray.pop();
// myArray.push(6);
// var otherArray=["1","2","3","4"]
// document.write(myArray);

// function ayoub(a,b){
//     return((a+b)/2)
// }
// alert(ayoub(15,5))

// function ayoub0(){
//     var name=window.lol2.value;
//     window.wow.innerHTML="hello " + name;

// }


    // var ff= document.querySelectorAll("#abas")[1].innerHTML;
    // alert(ff);
    // function ayoub(){
    //     window.txt.style.color='red'
    // }
    
    // function ayoub(){
    //     var num=window.lol.value;
    //     if ( num < 18){
    //         alert('ereur')
    //     }
    //     else if (num > 18){
    //         alert('welcome')
    //     }
    //     else if (num == 18){
    //         alert('welcome bro')
    //     }
        
    // }
    // setTimeout(function(){
    //     document.getElementById('test').style.color='red'
    // },1500)
    // setTimeout(function(){
    //     document.getElementById('test').style.color='blue'
    // },1250)
    // setTimeout(function(){
    //     document.getElementById('test').style.color='green'
    // },1000) 

//    var i=0
//    setInterval(function(){
//        alert('hello')
//    },1200)


function ayoub() {
    if(document.getElementById('myaria').style.fontWeight=="bold"){
        document.getElementById('myaria').style.fontWeight="normal";
    }
    else{
        document.getElementById('myaria').style.fontWeight="bold";
    } 
}
function ayoub0(){
if(document.getElementById('myaria').style.fontStyle=="italic"){
    document.getElementById('myaria').style.fontStyle="normal";
}
else{document.getElementById('myaria').style.fontStyle="italic"}
}
function ayoub1(){
    if(document.getElementById('myaria').style.textDecoration=="underline"){
        document.getElementById('myaria').style.textDecoration="none";
    }
    else{document.getElementById('myaria').style.textDecoration="underline"}
}


function ayoub3(){
    document.getElementById('myaria').style.fontSize=document.getElementById('slkt').value;
}
function ayoub4(){
    document.getElementById('myaria').style.fontFamily=document.getElementById('slkt2').value;
}

// $('#ayoub0').click(function(){
//     $('#ayoub').hide();

// });
// setInterval(function(){
//     setTimeout(function(){
//         $('#ayoub').show();
//     },1000);
// },1000);

$('#s1 button,#s1').mouseenter(function(){
    $('.btnimage1').show();
    $('#s1').css("opacity",0.7)
});
$('#s1').mouseleave(function(){
    $('.btnimage1').hide();
    $('#s1').css("opacity",1)
});

$('#s2 button,#s2').mouseenter(function(){
    $('.btnimage2').show();
    $('#s2').css("opacity",0.7)
});
$('#s2').mouseleave(function(){
    $('.btnimage2').hide();
    $('#s2').css("opacity",1)
});

$('#s3 button,#s3').mouseenter(function(){
    $('.btnimage3').show();
    $('#s3').css("opacity",0.7)
});
$('#s3').mouseleave(function(){
    $('.btnimage3').hide();
    $('#s3').css("opacity",0.7)
});
$('#s4 button,#s4').mouseenter(function(){
    $('.btnimage4').show();
    $('#s4').css("opacity",0.7)
});

$('#s4').mouseleave(function(){
    $('.btnimage4').hide();
    $('#s1').css("opacity",1)
});

$('#s5 button,#s5').mouseenter(function(){
    $('.btnimage5').show();
    $('#s5').css("opacity",0.7)
});
$('#s5').mouseleave(function(){
    $('.btnimage5').hide();
    $('#s5').css("opacity",1)
});
$('#s6 button,#s6').mouseenter(function(){
    $('.btnimage6').show();
    $('#s6').css("opacity",0.7)
});
$('#s6').mouseleave(function(){
    $('.btnimage6').hide();
    $('#s6').css("opacity",1)
});
$('#s7 button,#s7').mouseenter(function(){
    $('.btnimage7').show();
    $('#s7').css("opacity",0.7)
});
$('#s7').mouseleave(function(){
    $('.btnimage7').hide();
    $('#s7').css("opacity",1)
});
$('#s9 button,#s9').mouseenter(function(){
    $('.btnimage9').show();
    $('#s9').css("opacity",0.7)
});
$('#s9').mouseleave(function(){
    $('.btnimage9').hide();
    $('#s9').css("opacity",1)
});
$('#s8 button,#s8').mouseenter(function(){
    $('.btnimage8').show();
    $('#s8').css("opacity",0.7)
});
$('#s8').mouseleave(function(){
    $('.btnimage8').hide();
    $('#s8').css("opacity",1)
});





























function sumbitForm(e){
    e.preventDefault();
    var name=window.name.value;
    var email=window.email.value;
    var password=window.password.value;
    var message=window.message.value;
    saveMessage(name,email,password,message);
};
function saveMessage(name,email,password,message){
   var newMessageRef =messagesRef.push();
   newMessageRef.set({
       name: name,
       email: email,
       password :password,
       message: message
   });
};


























