<template>
<div class="about">

    <transition 
    appear 
    @before-enter="beforeEnter" 
    @enter="enter"
    @after-enter="afterEnter">
        <h1>About</h1>
    </transition>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>

</div>
</template>

<script>
import gsap from 'gsap'
import { ref } from 'vue'

export default {
    setup() {    
        const beforeEnter = (el) => {
          console.log("before enter- set initial state")
          el.style.transform = 'translateY(-60px)'
          el.style.opacity = 0

        }
        // done is a function
        const enter = (el,done) => {
          console.log("Starting to enter - make transition")
          gsap.to(el,{
            duration:3,
            y : 0,
            opacity:1,
            ease: 'bounce.out',
            onComplete : done
          })
        }
        const afterEnter=()=>{
          console.log("after enter")
        }
    
        return{beforeEnter, enter, afterEnter}
    }
}
</script>

<style>
.about {
    max-width: 600px;
    margin: 20px auto;
}

</style>
