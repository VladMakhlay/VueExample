<template>
    <div class="list-wrapper">
         <PostsList />
    </div>
</template>

<script>
  import PostsList from './components/PostsList';
  import CreatePost from './components/CreatePost';
  import PostInfo from './components/PostInfo';

  export default {
    name: 'App',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: { PostsList, CreatePost, PostInfo }
  }
</script>

<style scoped>
    .list-wrapper {
        width: 90%;
        margin: 20px auto;
        padding: 15px 0;
    }
</style>