var uzair = gsap.timeline()
uzair.from("h2",{
    color:"red",
    repeat:-1,
    yoyo:true,
    y:-30,
    opacity:0,
    duration:1,
    delay:1,
})


uzair.from("h4",{
    color:"red",
    repeat:-1,
    yoyo:true,
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3
})
gsap.from(".images2",{
    x:-200,
  transform:"translate(-100%)",
  scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    start:"top 70%",
    scrub:2,
    pin:true,
    backgroundColor:"red",
    color:"green", 
  }  
})
gsap.from(".images1",{
    y:200,
  transform:"translate(-100%)",
  scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    start:"top 70%",
    scrub:2,
    pin:true,
    backgroundColor:"red",
    color:"green", 
    yoyo:true,
    repeat:1
  }  
})