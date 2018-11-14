<template>
    <article class="post-block">
        <figure>
            <img :src='url' :alt='description'  />
            <figcaption>{{ description }}</figcaption>
        </figure>
    </article>
</template>

<script>
  export default {
    name: 'Post',
    props: {
      description: String,
      url: String
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
    figure {
        width: 100%;
        height: 100%;
        margin: 0;
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
</style>