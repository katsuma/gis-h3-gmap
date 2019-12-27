# gis-h3-gmap
  
[政府統計の総合窓口](https://www.e-stat.go.jp/)で配布されている国勢調査のGISデータを[H3](https://uber.github.io/h3/)グリッドシステムを用いて、Google Maps上に表示するためのシステムです。

## データの変換について

[政府統計の総合窓口](https://www.e-stat.go.jp/)からダウンロードしたデータを `src/data` 内に配置し、 `npm run convert` を実行することで、H3を用いて変換したKMLファイルが生成されます。

## 著作権について

`public/data` に含まれるデータは、[政府統計の総合窓口](https://www.e-stat.go.jp/)で得られるデータを変換して得られるものですが、[政府統計の総合窓口 利用規約](https://www.e-stat.go.jp/terms-of-use)にある通り、これらのデータは著作権の対象ではありません。

