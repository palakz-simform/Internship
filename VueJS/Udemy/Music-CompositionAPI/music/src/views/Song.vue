<template>
  <main>
    <!-- Music Header -->
    <section class="w-full mb-8 py-14 text-center text-white relative">
      <div class="absolute inset-0 w-full h-full box-border bg-contain music-bg"
        style="background-image: url(/assets/img/song-header.png)"></div>
      <div class="container mx-auto flex items-center">
        <!-- Play/Pause Button -->
        <button @click.prevent="playerStore.newSong(song)" type="button"
          class="z-50 h-24 w-24 text-3xl bg-white text-black rounded-full focus:outline-none">
          <i class="fas" :class="{ 'fa-play': !playerStore.playing, 'fa-pause': playerStore.playing }"></i>
        </button>
        <div class="z-50 text-left ml-8">
          <!-- Song Info -->
          <div class="text-3xl font-bold">{{ song.modified_name }}</div>
          <div>{{ song.genre }}</div>
          <div class="song-price">{{ $n(1, "currency", "ja") }}</div>
        </div>
      </div>
    </section>
    <!-- Form -->
    <section class="container mx-auto mt-6" id="comments">
      <div class="bg-white rounded border border-gray-200 relative flex flex-col">
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <!-- Comment Count -->
          <span class="card-title">{{ $tc("song.comment_count", song.comment_count, { count: song.comment_count })
          }}</span>
          <i class="fa fa-comments float-right text-green-400 text-2xl"></i>
        </div>
        <div class="p-6">
          <div class="text-white text-center font-bold p-4 mb-4" v-if="comment_show_alert" :class="comment_alert_variant">
            {{ comment_alert_message }}
          </div>
          <vee-form :validation-schema="schema" @submit="addComment" v-if="userStore.userLoggedIn">
            <vee-field as="textarea" name="comment"
              class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded mb-4"
              placeholder="Your comment here..."></vee-field>
            <ErrorMessage class="text-red-600" name="comment" />
            <button type="submit" class="py-1.5 px-3 rounded text-white bg-green-600 block"
              :disabled="comment_in_submission">
              Submit
            </button>
          </vee-form>
          <!-- Sort Comments -->
          <select v-model="sort"
            class="block mt-4 py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded">
            <option value="1">Latest</option>
            <option value="2">Oldest</option>
          </select>
        </div>
      </div>
    </section>
    <!-- Comments -->
    <ul class="container mx-auto">
      <li class="p-6 bg-gray-50 border border-gray-200" v-for="comment in sortedComments" :key="comment.docID">
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">{{ comment.name }}</div>
          <time>{{ comment.datePosted }}</time>
        </div>

        <p>
          {{ comment.content }}
        </p>
      </li>

    </ul>
  </main>
</template>
<script setup>
import { songsCollection, auth, commentsCollection } from "@/includes/firebase";
import useUserStore from "@/stores/user"
import usePlayerStore from "@/stores/player"
import { ref, reactive, computed, watch } from "vue";
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'

const router = useRouter();
const route = useRoute();

const userStore = useUserStore();
const playerStore = usePlayerStore()

let song = reactive({})
const schema = {
  comment: 'required|min:3'
}
const comment_in_submission = ref(false)
const comment_show_alert = ref(false)
const comment_alert_variant = ref('bg-blue-500')
const comment_alert_message = ref('Please wait! Your comment is being submitted')
const comments = reactive([])
const sort = ref('1')


const sortedComments = computed(() => {
  return comments.slice().sort((a, b) => {
    if (sort == "1") {
      return new Date(b.datePosted) - new Date(a.datePosted);
    }
    return new Date(a.datePosted) - new Date(b.datePosted);
  });
})

//BELOW CODE IS WORKING
const docSnapshot = await songsCollection.doc(route.params.id).get();

if (!docSnapshot.exists) {
  router.push({ name: 'home' });

}
const sorting = route.query.sort;

sort.value = sorting === '1' || sorting === '2' ? sorting : '1';
song = docSnapshot.data();
getComments();



async function addComment(values, { resetForm }) {
  comment_in_submission.value = true;
  comment_show_alert.value = true;
  comment_alert_variant.value = 'bg-blue-500';
  comment_alert_message.value = 'Please wait! Your comment is being submitted';
  const comment = {
    content: values.comment,
    datePosted: new Date().toString(),
    sid: route.params.id,
    name: auth.currentUser.displayName,
    uid: auth.currentUser.uid,
  };

  await commentsCollection.add(comment)
  song.comment_count += 1;
  await songsCollection.doc(route.params.id).update({
    comment_count: song.comment_count,
  })

  getComments();
  console.log(await getComments())
  comment_in_submission.value = false;
  comment_alert_variant.value = 'bg-green-500';
  comment_alert_message.value = 'Comment added!';

  resetForm();
}
async function getComments() {
  const snapshots = await commentsCollection.where('sid', '==', route.params.id).get();
  comments.splice(0, comments.length);
  snapshots.forEach((doc) => {
    comments.push({
      docID: doc.id,
      ...doc.data()
    })
  })
}

watch(sort.value, (newVal) => {
  if (newVal) {
    if (newVal === route.query.sort) {
      return
    }
  }
  router.push({
    query: {
      sort: newVal,

    }
  });
})


</script>
