var Links ={
    setColor : function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i<alist.length){
        // alist[i].style.color =color; 
        // i = i+1;
        //}
        $('a').css('color',color);  // jquery 사용 
    }
}

function nightday(self){
    if(self.value === 'night'){ 
        Body.setBackgroundColor('black'); 
        Body.setColor('white');  
        self.value = 'day'; 
        links.setColor('powderblue');            
     }
     else {
        Body.setBackgroundColor('white'); 
        Body.setColor('black');                      
        self.value = 'night';
        links.setColor('blue');                
    }   
}

var Body ={  // Body  객체  
    setColor : function(color) {   // setColor 메소드
        //document.querySelector('body').style.color =color;
        $('body').css('color',color);  // jquery사용 
    },
    setBackgroundColor :function(color) { // 메소드
        //document.querySelector('body').style.backgroundColor =color;
        $('body').css('backgroundColor',color);  //jquery 사용 
    }
}