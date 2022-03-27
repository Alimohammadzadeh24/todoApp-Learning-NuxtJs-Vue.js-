export const state = () => ({
    tasks: []
  })
  
  export const mutations = {
    init(state) {
      state.tasks = JSON.parse(localStorage.getItem('_tasks_')) || []
    },
    save(state) {
      localStorage.setItem('_tasks_', JSON.stringify(state.tasks))
    },
    add(state, { title, description }) {
      let id, flag = true
      while (flag) {
        id = Math.floor(Math.random() * Math.pow(10,6))
        flag = !!state.tasks.find(task => task.id === id)
      }
      state.tasks.push({
        id, title, description, done: false
      })
    },
    remove(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    done(state, {id, done = true}) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === id) task.done = done
        return task
      })
    },
  }
  
  export const actions = {
    init(context) {
      context.commit('init')
    },
    add(context, { title, description }) {
      context.commit('add', { title, description })
      context.commit('save')
    },
    remove(context, id) {
      context.commit('remove', parseInt(id))
      context.commit('save')
    },
    done(context, {id, done = true}) {
      context.commit('done', {id: parseInt(id), done})
      context.commit('save')
    },
  }
  
  export const getters = {
    tasks: (state) => {
      return state.tasks
    },
    doneTasks: (state) => {
      return state.tasks.filter(task => task.done === true)
    },
    pendingTasks: (state) => {
      return state.tasks.filter(task => task.done === false)
    },
    task: (state) => (id) => {
      return state.tasks.find(task => task.id === id)
    },
  }