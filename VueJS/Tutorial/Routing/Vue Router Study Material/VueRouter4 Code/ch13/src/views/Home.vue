<script setup></script>
<template>
  <div>
    <h1>Home Page</h1>
    <p v-for="n in 25">
      Home Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
      recusandae officia, deleniti quia error ipsam! Nisi, rem officiis
      consequatur deleniti natus repellendus nemo velit eum harum vel blanditiis
      similique distinctio.
    </p>
    <RouterLink :to="{ name: 'about' }"><h3>Go to About</h3></RouterLink>
    <p v-for="n in 25">
      Home Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
      recusandae officia, deleniti quia error ipsam! Nisi, rem officiis
      consequatur deleniti natus repellendus nemo velit eum harum vel blanditiis
      similique distinctio.
    </p>
    <RouterLink :to="{ name: 'about' }"><h3>Go to About</h3></RouterLink>
  </div>
</template>
<style></style>
