function pyramid(n){
    for(var i=0;i<n;i++){ // rows
        var stars = '', spaces = ''
        for(var s=0;s<(n-(i+1));s++){
            spaces = spaces + ' '
        }
        for(var j=0;j<i+1;j++) { //columns
            stars = stars + '* '
        }
        console.log(`${spaces}${stars}`)
    }
}

function reversePyramid(n){
    for(var i=n;i>=0;i--){ // rows
        var stars = '', spaces = ''
        for(var s=0;s<(n-i);s++){
            spaces = spaces + ' '
        }
        for(var j=0;j<i;j++) { //columns
            stars = stars + '* '
        }
        console.log(`${spaces}${stars}`)
    }
}



pyramid(7)
reversePyramid(7)


/*    
    8    (5-1)
   8 8    (5-2)
  8 8 8   (5-3)
 8 8 8 8 (5-4)
8 8 8 8 8 */

/* 8 8 8 8 8 (5-5)
 8 8 8 8  (5-4) 
  8 8 8   (5-3)
   8 8    (5-2)
    8     (5-1) */