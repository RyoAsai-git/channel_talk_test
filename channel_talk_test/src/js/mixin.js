import ChannelService from '../channelTalk/channelTalk'

export const Mixin = {
  created: function() {
    if (this.route.path == '/') {
        ChannelService.boot({
          "pluginKey": "3ad99376-fc05-4f64-862c-9b8772628dd6",
          "hideChannelButtonOnBoot": true
        });
    } else {
      ChannelService.boot({
        "pluginKey": "3ad99376-fc05-4f64-862c-9b8772628dd6",
      });
    }
  }
}
