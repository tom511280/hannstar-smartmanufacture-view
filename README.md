# hannstar-smartmanufacture-view

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 專案資訊
## AWS部屬相關:
# 移除原本已佈署檔案
rm -rf /usr/share/nginx/html/html8001/hannstar-smartmanufacture-view  
# 解包rar
unrar x -o- -y hannstar-smartmanufacture-view.rar   /usr/share/nginx/html/html8001/

# echarts中文官網
https://echarts.apache.org/examples/zh/index.html#chart-type-pie

# git 上傳
git add .

git commit -m '
2020-02-03變更
Author: TomWu
Content :
1.完成PM說明調整
'
git push origin master

# git 拉檔
git fetch --all
git reset --hard origin/master
git pull


# 待補UI
1.運動健康沒資料圖示
2.sidebar使用者設定橘色ICON

# 待處理
1.topHeader使用者圖示改圓
2.登入功能字體  
3.view more 箭頭

# 參考
https://github.com/xiaoniezi/vue-tree/blob/master/src/view/slot_tree.vue

# 問題集
* Q1:vue : 因為這個系統上已停用指令碼執行，所以無法載入...
* A1:https://officeguide.cc/powershell-set-execution-policy-remote-signed/,



1/15:{
步數:100,
k:1000,
距離:500m
}
