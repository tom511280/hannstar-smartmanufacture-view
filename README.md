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

# 舊版智慧健康管理手環後台
http://iotbiz.shunshiwei.com:9201/?#/login
hanyucaij001
hanyucaij

# 新版智慧健康管理手環後台UI
https://app.zeplin.io/project/5f9bbbc7e5c6d0b9f031aa52
Hann_____
Hann_____

# echarts中文官網
https://echarts.apache.org/examples/zh/index.html#chart-type-pie

# git 上傳
git add .

git commit -m '
2020-01-05變更
Author: TomWu
Content :
1.處理vuex無法藉由watch監聽問題
2.完成心率overview區塊
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


# AWS
http://ec2-54-199-123-149.ap-northeast-1.compute.amazonaws.com:8001/hannstar-smartmanufacture-view/#/