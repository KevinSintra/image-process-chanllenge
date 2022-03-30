image process chanllenge
------

### 需求是從 url 下載 image，進行水平與垂直的翻轉後進行驗證

需求透過 ImageService.js 實現，service 是與 ImageJimpUtil 互相搭配實現細節。

# 如何測試?

- 測試分成單元測試與整合測試，測試目的是驗證兩邊的互動性與流程。
- cmd 輸入 npm test 即可開始測試。