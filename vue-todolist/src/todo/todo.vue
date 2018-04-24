<template>
  <section class="real-app">
      <input type="text" 
             class="add-input"
             autofocus="autofocus"
             placeholder="Todo Something"
             @keyup.enter="addTodo"/>
       <item :todo="todo"
             v-for ="todo in filteredTodos"
             :key ="todo.id"
             @del ="deleteTodo"/>
       <tabs :filter="filter"
             :todos="todos"
             @toggle = "toggleFilter"
             @clear = "clearTodos"/>
  </section>
</template>

<script>
import Item from './item.vue';
import Tabs from './tabs.vue';

let id = 0;
export default {
  data(){
      return{
          todos: [],
          filter: 'all'
      }
  },
  components: {
      Item,
      Tabs
  },
  computed: {
      filteredTodos(){
          if(this.filter === 'all') return this.todos;
          const complete = this.filter === 'completed';
          return this.todos.filter(todo => complete === todo.completed)
      }
  },
  methods: {
      addTodo(e) {
          if(e.target.value == ''){
              alert('你输入的内容为空！');
              return;
          } 
          this.todos.unshift({
              id: id++,
              content: e.target.value.trim(),
              completed: false
          })
          e.target.value = '';
      },
      deleteTodo(id){
          this.todos = this.todos.filter(todo => todo.id !== id)
      },
      toggleFilter(state){
          this.filter = state;
      },
      clearTodos(){
          this.todos = this.todos.filter(todo => !todo.completed)
      }
  }
}
</script>

<style lang="stylus" scoped>
    .real-app{
        width 600px
        margin 0 auto 
        box-shadow 0 0 5px #666
        .add-input{
            position relative
            width 100%
            font-size 20px
            line-height 1.4em
            border 0
            outline none 
            padding 6px
            border 1px solid #999999
            box-shadow inset 0 -1px 5px 0 rgba(0,0,0,0.4)
            box-sizing border-box
            padding 16px 16px 16px 60px
            border-radius 10px
        }     
    }

</style>


