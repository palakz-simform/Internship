<template>
  <!-- Main Content -->
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <app-upload ref="upload" :addSong="addSong" />
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">{{ $t("manage.my_songs") }}</span>
            <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
          </div>
          <div class="p-6">
            <!-- Composition Items -->
            <composition-item v-for="(song, i) in songs" :key="song.docID" :song="song" :updateSong="updateSong"
              :index="i" :removeSong="removeSong" :updateUnsavedFlag="updateUnsavedFlag" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import useUserStore from "@/stores/user";
import AppUpload from "@/components/Upload.vue";
import { songsCollection, auth } from "@/includes/firebase";
import CompositionItem from "@/components/CompositionItem.vue";
import { ref, onMounted, reactive } from "vue";
import { onBeforeRouteUpdate, useRouter } from 'vue-router'
const router = useRouter()

const songs = reactive([])
const unsavedFlag = ref(false)

onMounted(async () => {
  const snapshot = await songsCollection
    .where("uid", "==", auth.currentUser.uid)
    .get();

  snapshot.forEach(addSong);
})

function updateSong(i, values) {
  songs[i].modified_name = values.modified_name;
  songs[i].genre = values.genre;
}
function removeSong(i) {
  songs.splice(i, 1);
}
function addSong(document) {
  const song = {
    ...document.data(),
    docID: document.id,
  };

  songs.push(song);
}
function updateUnsavedFlag(value) {
  unsavedFlag.value = value;
}

onBeforeRouteUpdate((to, from, next) => {
  console.log("yeah")
  if (!unsavedFlag.value) {
    next();
  } else {
    // eslint-disable-next-line no-alert, no-restricted-globals
    const leave = confirm(
      "You have unsaved changes. Are you sure you want to leave?"
    );
    next(leave);
    router.go()
    // router.reload()
  }
})
  // beforeRouteLeave(to, from, next) {
  //   this.$refs.upload.cancelUploads();
  //   next();
  // },
  // beforeRouteEnter(to, from, next) {
  //   const store = useUserStore();

  //   if (store.userLoggedIn) {
  //     next();
  //   } else {
  //     next({ name: "home" });
  //   }
  // },

</script>