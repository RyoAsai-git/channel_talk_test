<template>
  <main>
    <h2>{{ title }}</h2>
  </main>
</template>

<script>
import ChannelService from '../channelTalk/channelTalk'

export default {
  data() {
    return {
      title: "プロフィールページです。",
      route: this.$route,
    };
  },
  created: function() {
    if (this.route.path == '/profile') {
        ChannelService.boot({
          "pluginKey": "3ad99376-fc05-4f64-862c-9b8772628dd6", //please fill with your plugin key
        });
    }
  }
};
</script>

<style scoped>
main {
  height: calc(100vh - 152px);
  padding: 3% 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  margin: 0;
}
</style>