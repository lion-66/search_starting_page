<template>
  <div class="weather">
    <div id="he-plugin-simple" class="he"></div>
  </div>
</template>

<script>
export default {
  name: 'weather',
  //使用和风天气插件
  created() {
    window.WIDGET = {
      CONFIG: {
        modules: "01234",
        background: "5",
        tmpColor: "FFFFFF",
        tmpSize: "16",
        cityColor: "FFFFFF",
        citySize: "16",
        aqiColor: "FFFFFF",
        aqiSize: "16",
        weatherIconSize: "24",
        alertIconSize: "18",
        padding: "15px 15px 10px 15px",
        shadow: "1",
        language: "auto",
        borderRadius: "5",
        fixed: "false",
        vertical: "top",
        horizontal: "left",
        key: "354db0b79eb4439083d4a85ae6cf7f28",
      },
    };
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0";
    document.getElementsByTagName('head')[0].appendChild(script);
  },
};
</script>

<style>
.weather {
  width: 18%;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 9999;
}

#weather-view-he {
  height: auto !important;
}
</style>