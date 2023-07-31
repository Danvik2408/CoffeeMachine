let readyTime=2
          let percent=0

          let realTime=(readyTime*1000)/100
        startButton.onclick=function(){
            let loader=setInterval(function(){
                percent++
                loaderValue.innerText=percent
                loaderInner.style.width=percent+`%`
     
                if(percent>=100){
                 clearInterval(loader)
                 loaderValue.innerText='Coffee ready'
                }
               },realTime)
        }