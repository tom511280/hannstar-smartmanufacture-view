# 已處理問題
* 初始進入登入頁一直進入overview(增加初始化errorcodelist)
* 加上登入頁的密碼可視眼睛icon判斷(加上明眼)
* 修正密碼可視icon點及區域過長問題(調整外部div寬度)
* 將slidebar的icon換成svg
* 修改登入頁checkbox樣式
* 修掉autocomplete藍色


# 2021-01-07
* 完成運動健康更改設定彈跳視窗
* 完成運動健康更改設定假API串接


# 2021-01-11
* 調整select字體大小和間距以及箭頭
* 調整運動健康頁面-以犧牲table的呈現改成5條的代價讓scroll消失


################################################
# 待討論議題
* 分頁可以用10或15為單位
* 組織樹的delete該如何處理
* 考勤管理首頁的圖是折線圖嗎?
* 考勤管理內頁的「SOS告警」、「考勤」、「个人运动分析」、「个人心率分析」想了解大概的圖表類型，好進行研究


# 2020-01-13問題
* 將slidebar的icon換成svg(V)
* 登入頁icon換成svg(V)
* 運動健康頁面需移除scrollbar(V)
* 運動健康頁面進入設定頁的icon被壓扁(V)
* 運動健康頁面table首頁只顯示部分欄位(V)
* 分頁樣式確認(待確認)

# problem
* 運動健康彈窗bpm靠近SELECT
* 運動健康上一頁+POINTER
* 組織人員%三位數
* 組織人員LEVEL1和LEVEL2和間距縮小
* 折線圖-資料往上長y軸自動調整RANGE
* 分頁多頁的話只顯示前三其他....
* SLIDERBAR 背景色白色去除

################################################

# 待討論議題
* 考勤管理日曆樣式
* 考勤管理SOS兩塊區塊不同之處是甚麼呢?
* 第二塊SOS兩塊區塊有viewmap點了之後呈現地圖?用彈窗?
* 運動分析則線圖在framer有看到示意圖但不是很了解
* 時程表需要再一些時間


# 2020-01-20問題
* 考勤管理內個人運動分析區塊折線圖X軸顯示時間，且步數卡路里為同條線，選到資料點後顯示data
* 請UI協助添加考勤管理內頁的詳情頁，並用view more按鈕的方式進入，並用頁籤方式隔開，類似運動健康頁面的方式
* https://kiipo.com/ecosystem.html
* https://physioq.org/neo
* https://physioq.org/metrix



################################################
# problem修正
* 運動健康彈窗bpm靠近SELECT(V)(調整成置中)
* 運動健康上一頁+POINTER(X)(待處理 時有時無)
* 組織人員頁數達三位數問題(使用scrollbar)
* 組織人員LEVEL1和LEVEL2和間距縮小(V)(已處理)
* 折線圖-資料往上長y軸自動調整RANGE(V)(本身可以做到)
* 分頁多頁的話只顯示前三其他....(X)(需更動套件 需要較長時間)
* SIDERBAR 背景色白色去除(V)(已處理)


################################################
#heart rate 放資料
Metting Room改
attendanceDetailView 更改線的顏色
attendanceDetailView boy改成male
attendanceDetailView header上下換掉
attendanceDetailView 只留view map
attendanceDetailView Attendance的status改成checkin和checkout
attendanceDetailView Notification的status改成sent和failed
attendanceDetailView SOS Warning的Check改成yes和no
attendanceDetailView Real-time Position 的 Duration補上 持續時間 依照天時分區隔開1d1h1m

bodyhealthView的Name補上完整的工號


bodyhealthDetailView的Sleep Monitor的HRS改成duration 內容改成幾hour ex.1.5 hours

attendanceView的status改成arrived跟left

groupAndStaffView的gender的內容有malec和femle(確認單字)
groupAndStaffView Attendance改成checkin和checkout
