<template>
    <article :id="post.id" :class="className" @click="toggleSize">
        <figure>
            <button v-if="post.visible" class="delete-button" @click="deletePost">DELETE</button>
            <img :src='post.url' :alt='post.description' :key="post.id" />
            <figcaption :src="post.url">{{ post.description }}</figcaption>
        </figure>
    </article>
</template>

<script>
  export default {
    name: 'Post',
    props: {
      post: Object,
      className: String,
      big: Boolean,
    },
    data() {
      return {
        bigger: false,
        biggerDescription: '',
        biggerUrl: '',
        biggerId: '',
        articleClass: 'post-block',
      }
    },
    methods: {
      toggleSize(event) {
        if(this.post) {
          this.bigger = this.post.visible;
        }

        this.bigger = !this.bigger;

        if (event.target.tagName === 'IMG' || event.target.tagName === 'FIGCAPTION') {
          this.biggerDescription= event.target.alt || event.target.innerText;
          this.biggerUrl = event.target.src || event.target.previousElementSibling.src;
          this.biggerId = event.currentTarget.id;
        }

        // this.biggerDescription= event.target.alt || event.target.innerText;
        // this.biggerUrl = event.target.src || event.target.previousElementSibling.src;
        // this.biggerId = event.currentTarget.id;


       // if(this.bigger) {
       //   event.currentTarget.classList.remove('post-block');
       //   event.currentTarget.classList.add('post-block-big');
       // } else {
       //   event.currentTarget.classList.add('post-block');
       //   event.currentTarget.classList.remove('post-block-big');
       // }

        let bigPost = {};
        bigPost.id = this.biggerId;
        bigPost.url = this.biggerUrl;
        bigPost.description = this.biggerDescription;
        bigPost.visible = this.bigger;

        this.$emit('postInform', bigPost);
        // this.articleClass = this.bigger ? 'post-block-big' : 'post-block';
         console.log(this.articleClass)
      },
      deletePost(event) {
        let id = event.currentTarget.id;
        this.$emit('postDelete', id);
      }
    }
  }
</script>

<style scoped>
    .post-block {
        width: 200px;
        height: 300px;
        padding: 5px;
        margin: 1em;
    }
    .post-block-big {
        position: relative;
        width: 500px;
        height: 600px;
        padding: 5px;
        margin: 0 auto;
    }
    figure {
        width: 100%;
        height: 100%;
        margin: 0;
        position: relative;
        -webkit-box-shadow: 0 0 4px 0 #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
        -moz-box-shadow:    0 0 4px 0 #ccc;  /* Firefox 3.5 - 3.6 */
        box-shadow:         0 0 4px 0 #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
    }
    img {
        width: 100%;
        height: 85%;
    }
    figcaption {
        width:100%;
        height:15%;
        text-align:center;
        padding:5px;
    }
    .delete-button {
        background-color: darkred;
        color: white;
        position: absolute;
        top: 15px;
        left: 15px;
        padding: 3px 7px;
        border: none;
        cursor: pointer;
        z-index: 999;
    }
</style>