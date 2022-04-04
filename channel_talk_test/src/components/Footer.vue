<template>
  <header>
    <div class="row">
      <p>フッター</p>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: "フッター"
    }
  }
}
</script>

<style scoped>
header {
  padding: 1.8em 5%;
  background: #778899;
}
header .row {
  text-align: right;
}
header a {
  color: #fff;
  text-decoration: none;
  margin-left: 2em;
}
header a:hover {
  text-decoration: underline;
}
h1 {
  margin: 0;
  color: #fff;
}
</style>