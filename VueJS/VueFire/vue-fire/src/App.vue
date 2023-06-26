<template>
  <div class="badass-todo mb-5">
    <div class="title has-text-centered">
      Todo LIst
    </div>
    <form @submit.prevent="addTodo">
      <div class="field has-addons">
        <div class="control">
          <input v-model="newTodoContent" class="input" type="text" placeholder="Add a Todo">
        </div>
        <div class="control">
          <button class="button is-info" :disabled="!newTodoContent">
            Add
          </button>
        </div>
      </div>
    </form>

    <div class="card" v-for="todo in todos">
      <div class="card-content">
        <div class="content">
          <div class="columns">
            <div class="column"> {{ todo.content }}</div>
            <div class="column">

              <button class="button is-light">&check;</button>
              <button class="button is-danger">&cross;</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import '../node_modules/bulma/css/bulma.min.css';

.badass-todo {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}
</style>

<script setup>
import { ref } from 'vue'
const todos = ref([
  {
    id: 'id1',
    content: 'Read books',
    done: false
  },
  {
    id: 'id2',
    content: 'Read books 2',
    done: false
  }
])

const newTodoContent = ref('')
const addTodo = () => {
  console.log("FD")
}
</script>