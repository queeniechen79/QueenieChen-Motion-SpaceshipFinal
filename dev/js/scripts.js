//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {CustomEase} from "gsap/CustomEase";
import {CustomWiggle} from "gsap/CustomWiggle";


//register Plugins
gsap.registerPlugin(GSDevTools, MotionPathPlugin, CustomEase, CustomWiggle);

//**** SELECT ELEMENTS without jQuery ****\\

// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  let mainTL = gsap.timeline({id:"main"});


  function init(){
    //***********  fadeInTL init ****************
    CustomWiggle.create("myWiggle", {wiggles: 30, type:"easeInOut"});
  
    //*********** zoomTL init ****************
   
    //*********** spaceshipTL init ****************

    //*********** liftOffTL init ****************

    //*********** flightTL init ****************

    //*********** moonLandingTL init ****************

    //*********** bgFadeInTL init ****************


  }

  //Nested Timelines
  //***********  fadeInTL  ****************
  function bgDropTL(){
    let tl = gsap.timeline();
    tl.from("#moonwrap" ,{duration: 1.5, ease:"bounce.out", y: "-=1000"})
      .from("#star_1" ,{duration:0.5, rotation:180, alpha:0, scale:5, transformOrigin: "50% 50%"},"stars")
      .from("#star_2" ,{duration:0.5, delay:0.1, rotation:180, alpha:0, scale:5, transformOrigin: "50% 50%"},"stars")
      .from("#star_3" ,{duration:0.5, delay:0.2, rotation:180, alpha:0, scale:5, transformOrigin: "50% 50%"},"stars")
      .from("#star_4" ,{duration:0.5, delay:0.3, rotation:180, alpha:0, scale:5, transformOrigin: "50% 50%"},"stars")
      
      .from("#tree_1" ,{duration:0.3, y:"+=500"})
      .from("#tree_2" ,{duration:0.3, y:"+=500"})
      .from("#tree_3" ,{duration:0.3, y:"+=500"})
      .from("#tree_4" ,{duration:0.3, y:"+=500"})
      .from("#tree_5" ,{duration:0.3, y:"+=500"})

      gsap.set ("#face" ,{display:"none"})
 

    return tl;

  }

  //*********** rocketDropTL ****************
  function rocketDropTL(){
    let tl = gsap.timeline();
    tl.from("#rocket" ,{duration: 1.5, ease:"bounce.out", y: "-=1500"})


      .to("#rocket",{delay:0.5, duration:0.15, rotation:-10,ease:"none"})
      .to("#rocket",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
      .to("#rocket",{duration:0.15, rotation:0,ease:"none"})

      .to("#background" ,{duration:1.5, scale:6, y:"-=4000", ease:"power3.out"}, "zoomIn")
      .to("#smoke" ,{duration:1.5, scale:6, y:"-=200", ease:"power3.out"}, "zoomIn")
      .to("#trees" ,{duration:1.5, scale:6, y:"+=800", transformOrigin:"center", ease:"power3.out"}, "zoomIn")
      .to("#stars" ,{duration:1.5, scale:6, y:"-=2000", ease:"power3.out"}, "zoomIn")
      .to("#moon" ,{duration:1.5, scale:6, y:"-=2450", x:"-=1000", ease:"power3.out"}, "zoomIn")
      .to("#rocket" ,{duration:1.5, scale:6, y:"-=600", x:"-=350", ease:"power3.out"}, "zoomIn")
      .to("#circle_beam" ,{duration:1.5, scale:6, y:"+=200", ease:"power3.out"}, "zoomIn")
      .to("#face" ,{duration:1.5, transformOrigin:"50% 50%", ease:"power3.out"}, "zoomIn")

      .to ("#face" ,{alpha: 1, duration:0.8, display:"block"})
      
      .to("#face" ,{alpha:0, duration:0.5, delay:0.5}, "zoomOut")
      .to("#background" ,{duration:1.5, scale:1, y:"+=4000", ease:"power3.out"}, "zoomOut")
      .to("#smoke" ,{duration:1.5, scale:1, y:"+=200", ease:"power3.out"}, "zoomOut")
      .to("#trees" ,{duration:1.5, scale:1, y:"-=800", transformOrigin:"center", ease:"power3.out"}, "zoomOut")
      .to("#stars" ,{duration:1.5, scale:1, y:"+=2000", ease:"power3.out"}, "zoomOut")
      .to("#moon" ,{duration:1.5, scale:1, y:"+=2450", x:"+=1000", ease:"power3.out"}, "zoomOut")
      .to("#rocket" ,{duration:1.5, scale:1, y:"+=600", x:"+=350", ease:"power3.out"}, "zoomOut")
      .to("#circle_beam" ,{duration:1.5, scale:1, y:"-=200", ease:"power3.out"}, "zoomOut")
      .to("#face" ,{duration:1.5, transformOrigin:"50% 50%", ease:"power3.out"}, "zoomOut")
      
  

    ;
    return tl;

  }

  //*********** liftOffTL ****************
  function liftOffTL(){

    let tl = gsap.timeline()

    tl.from("#circle_beam" ,{alpha:0, duration:3.2, scale:-1, yoyo:true, transformOrigin:"50% 50%"}, "launchstart")
      .to("#rocket", { duration:3.2, ease: "slow(0.7, 0.7, false)", y: -150}, "launchstart")
      .from("#smoke_1" ,{duration:3, delay:0.5, alpha:0, transformOrigin:"center"}, "launchstart")
      .from("#smoke_2" ,{duration:3, delay:1, alpha:0, transformOrigin:"center"}, "launchstart")
      .from("#smoke_3" ,{duration:3, delay:1.5, alpha:0, transformOrigin:"center"}, "launchstart")
      .from("#smoke_4" ,{duration:3, alpha:0, transformOrigin:"center"}, "launchstart")
      .to("#rocket", {duration:2, y:"-=900", ease:"power4.out"}, "launched")
      .to("#smoke_1" ,{duration:0.5, alpha:0, x:"-=300", transformOrigin:"center"}, "launched")
      .to("#smoke_2" ,{duration:0.5, alpha:0, x:"+=800", transformOrigin:"center"}, "launched")
      .to("#smoke_3" ,{duration:0.5, alpha:0, x:"-=500", transformOrigin:"center"}, "launched")
      .to("#smoke_4" ,{duration:0.5, alpha:0, x:"+=500", transformOrigin:"center"}, "launched")
    

    ; 
    return tl;
      
  }
  //*********** explodeTL ****************
  function explodeTL(){

    let tl = gsap.timeline()

    tl.from("#smallrocket" ,{duration:1, scale:3, y:"-=450", transformOrigin:"center", ease:"bounce.out"}, "explode")
      .from("#big_smoke" ,{alpha:0, delay:0.3, scale:0, transformOrigin:"center" }, "explode")
      .to("#green_1" ,{duration:1, delay:0.5, x:"+=15",ease:"myWiggle"}, "explode")
      .to("#green_2" ,{duration:1, delay:0.5, x:"+=15",ease:"myWiggle"}, "explode")
      .to("#green_3" ,{duration:1, delay:0.5, x:"+=15",ease:"myWiggle"}, "explode")
      .to("#green_4" ,{duration:1, delay:0.5, x:"+=15",ease:"myWiggle"}, "explode")
      .to("#green_5" ,{duration:1, delay:0.5, x:"+=15",ease:"myWiggle"}, "explode")
      .to("#star_1" ,{duration:1, delay:0.5, x:"+=15",ease:"myWiggle"}, "explode")
      .to("#star_2" ,{duration:1, delay:0.5, x:"+=15",ease:"myWiggle"}, "explode")
      .to("#star_3" ,{duration:1, delay:0.5, x:"+=15",ease:"myWiggle"}, "explode")
      .to("#star_4" ,{duration:1, delay:0.5, x:"+=15",ease:"myWiggle"}, "explode")
      .to("#smallrocket", {alpha:0})
      .to("#big_smoke" ,{alpha:0, scale:2, transformOrigin:"center"}, "aftermath")
      .from("#poof" ,{alpha:0, delay:0.3}, "aftermath")
      .to("#poof" ,{alpha:0, duration:0.5})

    ;
    return tl;
  }
  //*********** moonLandingTL ****************


  //1. set initial properties
  init();

  //2. show content - prevents FOUC
  gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
 mainTL.add(bgDropTL())
        .add(rocketDropTL())
        .add(liftOffTL())
        .add(explodeTL())

  //;//tl END





});
