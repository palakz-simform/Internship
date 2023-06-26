<script setup></script>
<template>
  <div>
    <h1>Home Page</h1>
    <p v-for="n in 25">
      Home Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
      consectetur rerum? Tenetur facere minus deserunt necessitatibus in
      similique. Consectetur, quo ipsa illo optio nesciunt cum iusto
      voluptatibus pariatur ea laborum.
    </p>
    <RouterLink :to="{ name: 'about' }"><h3>Go to About</h3></RouterLink>
    <p v-for="n in 25">
      Home Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
      consectetur rerum? Tenetur facere minus deserunt necessitatibus in
      similique. Consectetur, quo ipsa illo optio nesciunt cum iusto
      voluptatibus pariatur ea laborum.
    </p>
    <RouterLink :to="{ name: 'about' }"><h3>Go to About</h3></RouterLink>
  </div>
</template>
<style></style>
