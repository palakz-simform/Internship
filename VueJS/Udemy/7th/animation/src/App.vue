<template>
  <button type="button" @click="flag=!flag">Toggle</button>
<!-- <transition name="fade" mode="in-out">
  <h2 v-if="flag" key="main">Hello world</h2>
  <h2 v-else key="secondary">Another hello</h2>
</transition> -->

<!-- <transition name="zoom" type="annimation" appear>
  <h2 v-if="flag">Hello</h2>
</transition> -->

<transition
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  @before-leave="beforeLeave"
  @leave="leave"
  @after-leave="afterLeave"

>
  <h2 v-if="flag">Hey</h2>
</transition>
</template>

<script >
export default{
  name:"App",
  data(){
    return{
      flag:true,
    }
  },
  methods:{
    beforeEnter(el){

    },
    enter(el,done){
      done();
    },
    afterEnter(el){

    },
    beforeLeave(el){

    },
    leave(el,done){
      done();
    },
    afterLeave(el){

    }
  }
}
</script>


<style scoped>
.fade-enter-from{
  opacity:0;
}
.fade-enter-active{
  transition: all 1s linear;
}
.fade-leave-to{
  transition: all 1s linear;
  opacity:0;
}
h2{
  width:400px;
  padding: 20px;
  margin:20px;
}

@keyframes zoom-in {
  from {
    transform: scale(0,0);
  }
  to{
    transform: scale(1,1);
  }
  
}
@keyframes zoom-out {
  from {
    transform: scale(1,1);
  }
  to{
    transform: scale(0,0);
  }
  
}
.zoom-enter-active{
  animation: zoom-in 1s linear forwards;
  transition: all 3s linear;
}
.zoom-leave-active{
  animation: zoom-out 1s linear forwards;
  transition: all 3s linear;
}
.zoom-enter-from{
  opacity: 0;
}
.zoom-leave-to{
  opacity: 1;
}
</style>
