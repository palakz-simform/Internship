<template>
  <main>

    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia logo">
      <h1>Pinia Task</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter  -->
    <nav class="filter">
      <button @click="filter='all'">All tasks</button>
      <button @click="filter='favs'">Fav tasks</button>
    </nav>

    <!-- loading -->
    <div class="loading" v-if="taskStore.loading==true">
      Loading tasks...
    </div>
    
    <!-- Task List -->
    <div class="task-list" v-if="filter==='all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do.</p>
      <div v-for="task in taskStore.tasks">
       <TaskDetails :task="task" />
    </div>
    </div>

    <div class="task-list"  v-if="filter==='favs'">
      <p>You have {{ taskStore.favCount}} favs left to do.</p>
      <div v-for="task in taskStore.favs">
       <TaskDetails :task="task" />
    </div>
    </div>
    
  </main>
</template>

<script>
import {useTaskStore} from './stores/TaskStore'
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'
import { ref } from 'vue'
  export default {
    components:{
      TaskDetails,
      TaskForm
    },
    setup(){
      const taskStore = useTaskStore()   //return the store
     taskStore.getTasks()
      const filter = ref('all')
      return{taskStore,filter }
    }

  }
</script>

