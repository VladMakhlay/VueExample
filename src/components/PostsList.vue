<template>
    <div class="list">
        <div v-if="!showCreatePost" class="block-list">
            <button class="add-button" @click="addNewPost">
               <span class="big-font">&#43</span>
                <br />
                {{add}}
            </button>
            <div class="posts-list" v-for="post in posts">
                <Post :url='post.url' :description='post.description' />
            </div>
        </div>
        <div class="create-post" v-else-if="showCreatePost">
            <CreatePost v-on:childToParent="onAddPost" :toggleAdding="addNewPost" />
        </div>
    </div>
</template>

<script>
  import Post from './Post';
  import CreatePost from './CreatePost'

  // let posts = [
  //   {
  //     url: 'https://images.unsplash.com/photo-1541962801812-86966edae01f?ixlib=rb-0.3.5&s=59ecbf1e8fa351a745f3730206e19506&auto=format&fit=crop&w=500&q=60',
  //     description: 'Night sky 1'
  //   }
  // ];

  export default {
    name: 'PostsList',
    components: { CreatePost, Post },
    props: {},
    data() {
      return {
        msg: "We are in the posts list",
        add: "new post",
        posts: [],
        showCreatePost: false,
      }
    },
    methods: {
      addNewPost() {
        return this.showCreatePost = !this.showCreatePost;
      },
      onAddPost(obj) {
        let id = this.posts.length + 1;

        if (obj) {
          this.$set(obj, 'id', id);
          this.posts.push(obj);
        }
      }
    },
  }
</script>

<style scoped>
    .list {
        width: calc(100% - 30px);
        min-height: 300px;
        padding: 10px;
        margin: 0 auto;
        background-color: white;

    }
    .block-list {
        display: flex;
        flex-wrap: wrap;
    }
    .add-button {
        width: 200px;
        height: 300px;
        background-color: #eaecee;
        border: none;
        color: darkgrey;
        font-size: 20px;
        display: block;
        margin: 1em;
    }
    .big-font {
        font-size: 40px;
    }
    .create-post {
        display: flex;
        justify-content: center;
    }
</style>