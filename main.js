gsap.from(".img1",{
    y:"30"


})
gsap.from(".nav1",{
    y:"30"


})
gsap.from("button",{
    y:"30"


})
gsap.from(".txt",{
    y:"30"


})
// gsap.to(".pehla",{
//     scrollTrigger:{
//         scroll:"body",
//         trigger:".pehla",
//         markers:true,
//         start:"top 0%",
//         end:"bottom 40%",
//         scrub:true


//     },
//     x:"-100%",
    


// })
// gsap.to(".dusra",{
//     scrollTrigger:{
//         scroll:"body",
//         trigger:".pehla",
//         markers:true,
//         start:"top 0%",
//         end:"bottom 40%",
//         scrub:true


//     },
//     x:"-200%",
//     duration:6,
//     // delay:2


// })
// gsap.to(".tisra",{
//     scrollTrigger:{
//         scroll:"body",
//         trigger:".pehla",
//         markers:true,
//         start:"top 0%",
//         end:"bottom 40%",
//         scrub:true
        


//     },
//     x:"-300%",
//     // duration:2
//     duration:6,
//     // delay:3



// })
// gsap.to(".chotha",{
//     scrollTrigger:{
//         scroll:"body",
//         trigger:".pehla",
//         markers:true,
//         start:"top 0%",
//         end:"bottom 40%",
//         scrub:true


//     },
//     x:"-300%",
//     // duration:3
//     duration:6



// })

// gsap.from(".txt4",{
//     scrollTrigger:{
//         scroll:"body",
//         trigger:"#fourth",
//         markers:true,
//         start:"top 60%",
//         end:"bottom 40%",


//     },
//     y:"100"


// })

document.querySelector("body").addEventListener("mousemove",function(dets){
    document.querySelector(".cursor").style.left=`${dets.x}px`
    document.querySelector(".cursor").style.top=`${dets.y}px`

})
document.querySelector(".nav1").addEventListener("mouseover",function(){
    document.querySelector(".cursor").style.transform="scale(4)"
})

document.querySelector(".nav1").addEventListener("mouseleave",function(){
    document.querySelector(".cursor").style.transform="scale(1)"
})

document.querySelector(".nav2").addEventListener("mouseover",function(){
    document.querySelector(".cursor").style.transform="scale(4)"
    
})
document.querySelector(".nav2").addEventListener("mouseleave",function(){
    document.querySelector(".cursor").style.transform="scale(1)"
})





document.querySelector(".box1").addEventListener("mouseover",function(){
    document.querySelector(".mg1").style.display="initial"
    gsap.from(".mg1",{
        x:"60"
    })
    gsap.to(".a",{
        x:"60"
    })
    document.querySelector(".a").style.color="rgb(156, 148, 148)"


})
document.querySelector(".box1").addEventListener("mouseout",function(){
    document.querySelector(".mg1").style.display="none"
    gsap.to(".a",{
        x:"0"
    })
    document.querySelector(".a").style.color="rgb(82, 79, 79)"

})

document.querySelector(".box2").addEventListener("mouseover",function(){
    document.querySelector(".mg2").style.display="initial"
    gsap.from(".mg2",{
        x:"60"
    })
    gsap.to(".b",{
        x:"60"
    })
    document.querySelector(".b").style.color="rgb(156, 148, 148)"



})
document.querySelector(".box2").addEventListener("mouseout",function(){
    document.querySelector(".mg2").style.display="none"
    gsap.to(".b",{
        x:"0"
    })
    document.querySelector(".b").style.color="rgb(82, 79, 79)"

    

})
document.querySelector(".box3").addEventListener("mouseover",function(){
    document.querySelector(".mg3").style.display="initial"
    gsap.from(".mg3",{
        x:"60"
    })
    gsap.to(".c",{
        x:"60"
    })
    document.querySelector(".c").style.color="rgb(156, 148, 148)"


})
document.querySelector(".box3").addEventListener("mouseout",function(){
    document.querySelector(".mg3").style.display="none"
    gsap.to(".c",{
        x:"0"
    })
    document.querySelector(".c").style.color="rgb(82, 79, 79)"
    


})
document.querySelector(".box4").addEventListener("mouseover",function(){
    document.querySelector(".mg4").style.display="initial"
    gsap.from(".mg4",{
        x:"60"
    })
    gsap.to(".d",{
        x:"60"
    })
    document.querySelector(".d").style.color="rgb(156, 148, 148)"



})
document.querySelector(".box4").addEventListener("mouseout",function(){
    document.querySelector(".mg4").style.display="none"
    gsap.to(".d",{
        x:"0"
    })
    document.querySelector(".d").style.color="rgb(82, 79, 79)"



})
document.querySelector(".box5").addEventListener("mouseover",function(){
    document.querySelector(".mg5").style.display="initial"
    gsap.from(".mg5",{
        x:"60"
    })
    gsap.to(".e",{
        x:"60"
    })
    document.querySelector(".e").style.color="rgb(156, 148, 148)"



})
document.querySelector(".box5").addEventListener("mouseout",function(){
    document.querySelector(".mg5").style.display="none"
    gsap.to(".e",{
        x:"0"
    })
    document.querySelector(".e").style.color="rgb(82, 79, 79)"


})
document.querySelector(".box6").addEventListener("mouseover",function(){
    document.querySelector(".mg6").style.display="initial"
    gsap.from(".mg6",{
        x:"60"
    })
    gsap.to(".f",{
        x:"60"
    })
    document.querySelector(".f").style.color="rgb(156, 148, 148)"


})
document.querySelector(".box6").addEventListener("mouseout",function(){
    document.querySelector(".mg6").style.display="none"
    gsap.to(".f",{
        x:"0"
    })
    document.querySelector(".f").style.color="rgb(82, 79, 79)"



})
document.querySelector(".box7").addEventListener("mouseover",function(){
    document.querySelector(".mg7").style.display="initial"
    gsap.from(".mg7",{
        x:"60"
    })
    gsap.to(".g",{
        x:"60"
    })
    document.querySelector(".g").style.color="rgb(156, 148, 148)"


})
document.querySelector(".box7").addEventListener("mouseout",function(){
    document.querySelector(".mg7").style.display="none"
    gsap.to(".g",{
        x:"0"
    })
    document.querySelector(".g").style.color="rgb(82, 79, 79)"


})
document.querySelector(".box8").addEventListener("mouseover",function(){
    document.querySelector(".mg8").style.display="initial"
    gsap.from(".mg8",{
        x:"60"
    })
    gsap.to(".h",{
        x:"60"
    })
    document.querySelector(".h").style.color="rgb(156, 148, 148)"


})
document.querySelector(".box8").addEventListener("mouseout",function(){
    document.querySelector(".mg8").style.display="none"
    gsap.to(".h",{
        x:"0"
    })
    document.querySelector(".h").style.color="rgb(82, 79, 79)"


})



document.querySelector(".ltxt").addEventListener("mouseover",function(){

    gsap.from(".ltxt",{
        onstart:function(){
            $('.ltxt').textillate({
                 in: { effect: 'fadeInLeftBig' } });
        }
    })
})