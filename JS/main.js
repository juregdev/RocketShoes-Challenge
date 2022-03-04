function dropMenu(){
  const menu= document.querySelector("#menuMobile")
  const line1= document.querySelector("#line1")
  const line2=document.querySelector("#line3")
  const body=document.querySelector("body")

  if(menu.style.transform == "translateX(0px)"){
     menu.style.transform ="translateX(110%)"
    line1.style.transform='rotate(0deg)'
    line2.style.transform='rotate(0deg)'
    line2.style.top='0'
    line1.style.top='0'
    body.style.overflow = "visible"
        console.log(line1)
  }

  else{
    menu.style.transform ="translateX(0)"
    line1.style.transform='rotate(45deg)'
    line2.style.transform='rotate(-45deg)' 
    line1.style.top='0.7rem' 
    line2.style.top='-0.7rem'
    body.style.overflow = "hidden"

  }

  

}