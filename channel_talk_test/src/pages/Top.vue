<template>
  <main>
    <h2>{{ title }}</h2>
  </main>
</template>

<script>
import ChannelService from '../channelTalk/channelTalk';

export default {
  data() {
    return {
      title: "TOPページです。",
      route: this.$route,
    };
  },
  created: function() {
    if (this.route.path == '/') {
        ChannelService.boot({
          "pluginKey": "3ad99376-fc05-4f64-862c-9b8772628dd6", //please fill with your plugin key
          "hideChannelButtonOnBoot": true
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

/* body .Launcherstyled__Wrapper-oef45p-0 {
  position: absolute !important;
  left: 0px !important;
}

body .dblqKJ {
  position: absolute !important;
  left: 0px !important;
}

body div .dblqKJ {
  position: absolute !important;
  left: 0px !important;
}

body div#launcher {
  position: absolute !important;
  left: 0px !important;
} */

/* div#ch-plugin .dblqKJ {
  background: red !important;
  position: absolute !important;
  left: 0px !important;
} */


</style>