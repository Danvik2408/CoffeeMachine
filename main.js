
function coffeeMachine(waterLevel,readyTime,percent){
  function addWater(waterLevel){
    addWaterBtn.onclick=function(){
      if(waterLevel<=90){
        waterLevel+=10
        waterCup.style.height=waterLevel+'%'
        Value.innerText=waterLevel
      }
    }
  }
  addWater(waterLevel)

  function minusWater(waterLevel){
    minusWaterBtn.onclick=function(){
      if(waterLevel>=30){
        waterLevel-=10
        waterCup.style.height=waterLevel+'%'
        Value.innerText=waterLevel
      }
    }
  }
  minusWater(waterLevel)

  function making(readyTime,percent){
    let realTime=(readyTime*1000)/100
        startButton.onclick=function(){
            let loader=setInterval(function(){
                percent++
                loaderValue.innerText='...'
                loaderInner.style.width=percent+`%`

                if(percent>=20){
                  loaderValue.innerText='warm up water'
                }
                if(percent>=70){
                 water.style.marginTop='50px'
                 water.style.height='100px'
                 loaderValue.innerText='pour coffee'
                }
     
                if(percent>=100){
                 clearInterval(loader)
                 water.style.display='none'
                 loaderValue.innerText='Coffee ready'
                 water.style.marginTop='150px'
                }
               },realTime)
        }
  }
  making(readyTime,percent)

}
coffeeMachine(20,10,0)