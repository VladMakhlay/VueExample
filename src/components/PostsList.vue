<template>
    <div class="list">
        <div v-if="!showCreatePost && !bigger" class="block-list">
            <button class="add-button" @click="addNewPost">
               <span class="big-font">&#43</span>
                <br />
                {{add}}
            </button>
            <div class="posts-list" v-for="(post, index) in posts">
                <Post
                    :post="post"
                    :key="post.id"
                    :index="index"
                    @postInform="onPostInfo"
                    :className="className"
                />
            </div>
        </div>
        <div class="create-post" v-else-if="showCreatePost && !bigger">
            <CreatePost v-on:childToParent="onAddPost" :toggleAdding="addNewPost" />
        </div>
        <div v-else-if="bigger">
            <Post
                    :post="bigPost"
                    :key="bigPost.id"
                    @postInform="onPostInfo"
                    :className="className"
                    @postDelete="onPostDelete"
            />
        </div>
    </div>
</template>

<script>
  import Post from './Post';
  import CreatePost from './CreatePost'

  // let posts = [
  //   {
  //     id: 1 +'',
  //     url: 'https://images.unsplash.com/photo-1541962801812-86966edae01f?ixlib=rb-0.3.5&s=59ecbf1e8fa351a745f3730206e19506&auto=format&fit=crop&w=500&q=60',
  //     description: 'Night sky 1'
  //   },
  //   {
  //     id: 2 + '',
  //     url: 'https://images.unsplash.com/photo-1541962801812-86966edae01f?ixlib=rb-0.3.5&s=59ecbf1e8fa351a745f3730206e19506&auto=format&fit=crop&w=500&q=60',
  //     description: 'Night sky 2'
  //   },
  //   {
  //     id: 3 + '',
  //     url: 'https://images.unsplash.com/photo-1541962801812-86966edae01f?ixlib=rb-0.3.5&s=59ecbf1e8fa351a745f3730206e19506&auto=format&fit=crop&w=500&q=60',
  //     description: 'Night sky 3'
  //   },
  //   {
  //     id: 4 + '',
  //     url: 'https://images.unsplash.com/photo-1541962801812-86966edae01f?ixlib=rb-0.3.5&s=59ecbf1e8fa351a745f3730206e19506&auto=format&fit=crop&w=500&q=60',
  //     description: 'Night sky 4'
  //   },
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
        bigger: false,
        bigPost: {},
        className: 'post-block',
      }
    },
    methods: {
      addNewPost() {
        return this.showCreatePost = !this.showCreatePost;

      },
      onAddPost(obj) {
        let id = this.posts.length + obj.description;

        if (obj) {
          this.$set(obj, 'id', id);
          this.posts.push(obj);
        }
      },
      onPostInfo(obj) {
        this.bigger = obj.visible;
        this.bigPost = obj;

        this.className = obj.visible ? 'post-block-big' : 'post-block';
      },
      onPostDelete(id) {
        let index = this.posts.findIndex(post => post.id === id);
        this.posts.splice(index, 1);
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
    .one-big-post {

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