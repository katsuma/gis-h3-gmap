<template>
  <div id="app">
    <div id="map">
      <GmapMap
        ref="gmap"
        :center="{ lat: 35.681236, lng: 139.767125 }"
        :zoom="9"
        style="width: 100%; height: 100%;"
      >
      </GmapMap>
    </div>
    <div id="menu">
      <form> 
        <div class='form-group'>
          <label>
            Resolution:
          </label>
          <select class="form-control" v-model="resolution">
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
        <div class='form-group'>
          <label>
            Region:
          </label>
          <select class="form-control" v-model="region">
            <option value="M5238">M5238</option>
            <option value="M5239">M5239</option>
            <option value="M5240">M5240</option>
            <option value="M5338">M5338</option>
            <option value="M5339">M5339</option>
            <option value="M5340">M5340</option>
            <option value="M5438">M5438</option>
            <option value="M5439">M5439</option>
            <option value="M5440">M5440</option>
          </select>
        </div>
        <div class='form-group'>
          <label>
            Segment:
          </label>
          <select class="form-control" v-model="stats">
            <option value="人口総数">人口総数</option>
            <option value="人口総数男">人口総数男</option>
            <option value="人口総数女">人口総数女</option>
            <option value="０〜１４歳人口総数">０〜１４歳人口総数</option>
            <option value="０〜１４歳人口男">０〜１４歳人口男</option>
            <option value="０〜１４歳人口女">０〜１４歳人口女</option>
            <option value="１５歳以上人口総数">１５歳以上人口総数</option>
            <option value="１５歳以上人口男">１５歳以上人口男</option>
            <option value="１５歳以上人口女">１５歳以上人口女</option>
            <option value="１５〜６４歳人口総数">１５〜６４歳人口総数</option>
            <option value="１５〜６４歳人口男">１５〜６４歳人口男</option>
            <option value="１５〜６４歳人口女">１５〜６４歳人口女</option>
            <option value="２０歳以上人口総数">２０歳以上人口総数</option>
            <option value="２０歳以上人口男">２０歳以上人口男</option>
            <option value="２０歳以上人口女">２０歳以上人口女</option>
            <option value="６５歳以上人口総数">６５歳以上人口総数</option>
            <option value="６５歳以上人口男">６５歳以上人口男</option>
            <option value="６５歳以上人口女">６５歳以上人口女</option>
            <option value="７５歳以上人口総数">７５歳以上人口総数</option>
            <option value="７５歳以上人口男">７５歳以上人口男</option>
            <option value="７５歳以上人口女">７５歳以上人口女</option>
            <option value="外国人人口総数">外国人人口総数</option>
            <option value="外国人人口男">外国人人口男</option>
            <option value="外国人人口女">外国人人口女</option>
            <option value="世帯総数">世帯総数</option>
            <option value="一般世帯数">一般世帯数</option>
            <option value="１人世帯の一般世帯数">１人世帯の一般世帯数</option>
            <option value="２人世帯の一般世帯数">２人世帯の一般世帯数</option>
            <option value="３人世帯の一般世帯数">３人世帯の一般世帯数</option>
            <option value="４人世帯の一般世帯数">４人世帯の一般世帯数</option>
            <option value="５人世帯の一般世帯数">５人世帯の一般世帯数</option>
            <option value="６人世帯の一般世帯数">６人世帯の一般世帯数</option>
            <option value="７人以上世帯の一般世帯数">７人以上世帯の一般世帯数</option>
            <option value="親族のみの一般世帯数">親族のみの一般世帯数</option>
            <option value="核家族の一般世帯数">核家族の一般世帯数</option>
            <option value="核家族以外の一般世帯数">核家族以外の一般世帯数</option>
            <option value="６歳未満世帯員のいる一般世帯数">６歳未満世帯員のいる一般世帯数</option>
            <option value="６５歳以上世帯員のいる一般世帯数">６５歳以上世帯員のいる一般世帯数</option>
            <option value="世帯主の年齢が２０〜２９歳の１人世帯の一般世帯数">世帯主の年齢が２０〜２９歳の１人世帯の一般世帯数</option>
            <option value="高齢単身の一般世帯数">高齢単身の一般世帯数</option>
            <option value="高齢夫婦のみの一般世帯数">高齢夫婦のみの一般世帯数</option>
          </select>
        </div>
      </form>
      <hr/>
      <button class='btn btn-success' style="marginTop: 10px'; width: '100%'" v-on:click="onSubmit">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      publicPath: process.env.BASE_URL,
      resolution: '5',
      region: 'M5339',
      stats: '人口総数',
      kml: null,
    }
  },
  mounted() {
    this.onSubmit()
  },
  methods: {
    onSubmit() {
      // const url = location.href + '/data/' + this.region + '/' + this.stats + '_' + this.resolution + '.kml';
      const url = 'http://yumetaro.info/misc/map/' + '/data/' + this.region + '/' + this.stats + '_' + this.resolution + '.kml';
      console.log(url);

      this.$refs.gmap.$mapPromise.then((map) => {
        if (this.kml !== null)
          this.kml.setMap(null);

        this.kml = new google.maps.KmlLayer({
          map: map,
          url: url,
        });
        this.kml.setMap(map);
      });
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  display: flex;
  align-items: stretch;
}

#map {
  height: 100%;
  flex-grow: 1;
}

#menu {
  width: 200px;
  height: 100%;
  padding: 10px;
  flex-grow: 0;
}
</style>
