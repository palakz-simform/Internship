<template>
     <!-- Video 27 -->
  <h2>{{ getResult }}</h2>
  <h2>{{ getResult }}</h2>
  <h2>{{ getResult }}</h2>

  <video28/>
  <br>
  <!-- <video29><h1>Code step by step</h1></video29>
  <video29><a href="#">Code step by step</a></video29>
  <video29><img src="../public/favicon.ico"></video29> -->
<video29>
  <template v-slot:header>
    <h1 >Peter</h1>
  </template>
<template v-slot:main>
  <p>A Vue product</p>
</template>
<template v-slot:footer>
  <button>Buy Now</button>
</template>
</video29>
<video29>
  <template #header>
    <h1 >Peter</h1>
  </template>
<template v-slot:main>
  <p>A Vue product</p>
</template>
<template v-slot:footer>

</template>
</video29>

</template>

<script >
import video28 from './components/video28.vue'
import video29 from './components/video29.vue'
export default{
  name:"Home",
  components :{
    video28,
    video29
  },
  data(){
    return{
      // Video 27
      dollar:100,
      rupeesVal:70,
      discount:10,
     
      
    }
  },
     // Video 27
  computed:{
    getResult(){
      console.log("called")
      return (this.dollar*this.rupeesVal)-this.discount
    }
  }
}

</script>



<style scoped>

</style>
