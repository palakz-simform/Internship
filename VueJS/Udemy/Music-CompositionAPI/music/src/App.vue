<template>
  <app-header></app-header>
  <Suspense>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </Suspense>


  <AppPlayer />

  <auth></auth>
</template>

<script>
import AppHeader from '@/components/Header.vue'
import Auth from '@/components/Auth.vue'
import { mapWritableState } from 'pinia';
import useUserStore from '@/stores/user';
import { auth } from './includes/firebase'
import AppPlayer from "@/components/Player.vue"
export default {
  name: 'App',
  components: {
    AppHeader,
    Auth,
    AppPlayer
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  //this life cycle method is called when the function is created 
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  }
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.1s linear;
  opacity: 0;
}
</style>