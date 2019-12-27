<template>
  <div id="app">
    <div id="map">
      <GmapMap
        ref="gmap"
        :center="{ lat: 35.681236, lng: 139.767125 }"
        :zoom="9"
        style="width: 100%; height: 100%;"
      >
        <GmapMarker
          v-for="(marker, index) in markers"
          :key="index"
          :label="marker.name"
          :position="marker.position"
          :icon="marker.icon"
          :clickable="true"
        />
      </GmapMap>
    </div>
    <div id="menu">
      <form> 
        <div class="form-group">
          <label>
            Resolution:
          </label>
          <select class="form-control" v-model="resolution">
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div class="form-group">
          <label>
            Region:
          </label>
          <select class="form-control" v-model="region">
            <option value="832e29fffffffff">茨城県北部 (832e29fffffffff)</option>
            <!-- <option value="832e2dfffffffff">千葉県銚子市 (832e2dfffffffff)</option> -->
            <!-- <option value="832e64fffffffff">静岡県掛川市 (832e64fffffffff)</option> -->
            <!-- <option value="832e66fffffffff">静岡県島田市 (832e66fffffffff)</option> -->
            <option value="832e74fffffffff">群馬県・栃木県南部 (832e74fffffffff)</option>
            <option value="832e75fffffffff">長野県東部 (832e75fffffffff)</option>
            <option value="832f58fffffffff">房総半島・三浦半島 (832f58fffffffff)</option>
            <option value="832f59fffffffff">静岡市・伊豆半島 (832f59fffffffff)</option>
            <option value="832f5afffffffff">東京都心・千葉県 (832f5afffffffff)</option>
            <option value="832f5bfffffffff">神奈川県・多摩地方 (832f5bfffffffff</option>
            <!-- <option value="832f5efffffffff">千葉県いすみ市 (832f5efffffffff)</option> -->
          </select>
        </div>
        <div class="form-group">
          <label>
            Subregion:
          </label>
          <select class="form-control" v-model="subregion">
            <template v-if="resolution == 8">
              <option v-for="(h3index, index) in subregions" :key="index" :value="h3index">{{ h3index }}</option>
            </template>
          </select>
        </div>
        <div class="form-group">
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
      <form>
        <div class="form-group">
          <label>
            CSV File:
          </label>
          <input type="file" @change="onFileChange" />
        </div>
      </form>
      <button class="btn btn-success" style="marginTop: 10px; width: 100%;" :disabled="disableButton" @click="onSubmit">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { h3ToChildren } from 'h3-js';
import { gmapApi } from 'vue2-google-maps'

const csv = require('csv-parser');

export default {
  name: 'app',
  data: function() {
    return {
      resolution: '5',
      region: '832f5afffffffff',
      subregion: null,
      stats: '人口総数',
      kml: null,
      markers: [],
    };
  },
  mounted() {
    this.onSubmit();
    console.dir(gmapApi);
  },
  computed: {
    subregions: function() {
      return h3ToChildren(this.region, 4);
    },
    disableButton: function() {
      if (this.resolution != 8)
        return false;
      return this.subregions.filter(r => r == this.subregion).length == 0;
    }
  },
  methods: {
    onSubmit() {
      const region = this.resolution == 8? this.subregion: this.region;
      // const url = location.href + '/data/' + this.region + '/' + this.stats + '_' + this.resolution + '.kml';
      const url = 'http://yumetaro.info/misc/map/' + '/data/' + region + '/' + this.stats + '_' + this.resolution + '.kml';
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
    },
    onFileChange(e) {
      this.markers = [];

      const file = e.target.files[0];
      if (!file)
          return;

      const stream = csv();
      stream.on('data', (data) => {
        if ('name' in data && 'lat' in data && 'lng' in data && 'color' in data)
          this.markers.push({
            name: data.name,
            position: {
              lat: parseFloat(data.lat),
              lng: parseFloat(data.lng),
            },
            icon: {
              url: 'http://maps.google.com/mapfiles/ms/icons/' + data.color + '-dot.png'
            }
          });
      });

      let reader = new FileReader();
      reader.onload = (e) => {
        stream.write(e.target.result);
      }
      reader.readAsText(file);
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
  width: 250px;
  height: 100%;
  padding: 10px;
  flex-grow: 0;
}
</style>
