let displayCountdown = document.querySelector("#countdown")
let div = document.querySelector(".container")
let final = document.querySelector("#final")




let wish = (count)=>{

    setTimeout(()=>{
        displayCountdown.innerHTML = "Start";
        displayCountdown.style.color="#ffffff"
        setTimeout(()=>{
            if(count===0){
                displayCountdown.innerHTML ="Happy Independence Day"
            }else{
                document.body.style.backgroundImage = "url('image.jpg')";
                displayCountdown.innerHTML =`${count}`
                count--;
                setTimeout(()=>{
                    if(count===0){
                        displayCountdown.innerHTML ="Happy Independence Day"
                    }else{
                        displayCountdown.innerHTML =`${count}`
                        count--;
                        setTimeout(()=>{
                            if(count===0){
                                displayCountdown.innerHTML ="Happy Independence Day"
                            }else{
                                displayCountdown.innerHTML =`${count}`
                                count--;
                                setTimeout(()=>{
                                    if(count===0){
                                        displayCountdown.innerHTML ="Happy Independence Day"
                                    }else{
                                        displayCountdown.innerHTML =`${count}`
                                        count--;
                                        setTimeout(()=>{
                                            if(count===0){
                                                displayCountdown.innerHTML ="Happy Independence Day"
                                            }else{
                                                displayCountdown.innerHTML =`${count}`
                                                count--;
                                                setTimeout(()=>{
                                                    if(count===0){
                                                        displayCountdown.innerHTML ="Happy Independence Day"
                                                    }else{
                                                        displayCountdown.innerHTML =`${count}`
                                                        count--;
                                                        setTimeout(()=>{
                                                            if(count===0){
                                                                displayCountdown.innerHTML ="Happy Independence Day"
                                                            }else{
                                                                displayCountdown.innerHTML =`${count}`
                                                                count--;
                                                                setTimeout(()=>{
                                                                    if(count===0){
                                                                        displayCountdown.innerHTML ="Happy Independence Day"
                                                                    }else{
                                                                        displayCountdown.innerHTML =`${count}`
                                                                        displayCountdown.style.color = "#FF671F"
                                                                        count--;
                                                                        setTimeout(()=>{
                                                                            if(count===0){
                                                                                displayCountdown.innerHTML ="Happy Independence Day"
                                                                            }else{
                                                                                displayCountdown.innerHTML =`${count}`
                                                                                displayCountdown.style.color = "#FFFFFF"
                                                                                count--;
                                                                                setTimeout(()=>{
                                                                                    if(count===0){
                                                                                        displayCountdown.innerHTML ="Happy Independence Day"
                                                                                    }else{
                                                                                        displayCountdown.innerHTML =`${count}`
                                                                                        displayCountdown.style.color = "#046A38"
                                                                                        count--;
                                                                                        setTimeout(()=>{
                                                                                            if(count===0){
                                                                                                displayCountdown.innerHTML = "";
                                                                                                div.style.display = "none"
                                                                                                final.innerHTML ="Happy Independence Day"
                                                                                             
                                                                                            }else{
                                                                                                wish(10)
                                                                                            }
                                                                                        },1000)
                                                                                    }
                                                                                },1000)
                                                                            }
                                                                        },1000)
                                                                    }
                                                                },1000)
                                                            }
                                                        },1000)
                                                    }
                                                },1000)
                                            }
                                        },1000)
                                    }
                                },1000)
                            }
                        },1000)
                    }
                },1000)
            }
        },1000)
    },0000)
}

wish(10)