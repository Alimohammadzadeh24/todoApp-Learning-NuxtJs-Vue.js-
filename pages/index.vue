<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card max-width="500" class="mx-auto">
        <v-toolbar color="#de2c6d">
          <v-app-bar-nav-icon>
            <v-icon>mdi-text-box-check</v-icon>
          </v-app-bar-nav-icon>
          <v-toolbar-title>To Do List</v-toolbar-title>
          <v-spacer/>
          <AddTaskItem/>
        </v-toolbar>
        <v-list>
          <v-subheader>In Progress Tasks</v-subheader>
          <v-list-item-group>
            <TaskItem :task="task" v-for="(task, i) in pendingTasks" :key="i"/>
          </v-list-item-group>
          <v-subheader>Done Tasks</v-subheader>
          <v-list-item-group>
            <TaskItem :task="task" v-for="(task, i) in doneTasks" :key="i"/>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import TaskItem from '~/components/TaskItem.vue'
import AddTaskItem from '~/components/AddTaskItem.vue'
import { mapGetters } from 'vuex'
export default {
  components: { TaskItem, AddTaskItem },

  computed: {
    ...mapGetters({
      doneTasks: 'task/doneTasks',
      pendingTasks: 'task/pendingTasks',

    }),
  }
}
</script>

Taskitem