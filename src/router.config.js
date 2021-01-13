import loginView from '@/pages/member/views/loginView.vue'
import signinView from '@/pages/member/views/signinView.vue'
import signinSuccessView from '@/pages/member/views/signinSuccessView.vue'
import resetPwdView from '@/pages/member/views/resetPwdView.vue'
import sendResetpwdEmailView from '@/pages/member/views/sendResetpwdEmailView.vue'
import overviewView from '@/pages/overview/views/overviewView.vue'
import bodyhealthView from '@/pages/bodyhealth/views/bodyhealthView.vue'
import bodyhealthDetailView from '@/pages/bodyhealth/views/bodyhealthDetailView.vue'
import groupAndStaffView from '@/pages/groupAndStaff/views/groupAndStaffView.vue'
import attendanceView from '@/pages/attendance/views/attendanceView.vue'


let routes = [
    //登入模組
    {path:'/member/loginView',component:loginView},
    {path:'/member/signinView',component:signinView},
    {path:'/member/signinSuccessView',component:signinSuccessView},
    {path:'/member/resetPwdView',component:resetPwdView},
    {path:'/member/sendResetpwdEmailView',component:sendResetpwdEmailView},
    //全員態勢
    {path:'/overview/overviewView',component:overviewView},
    //運動健康
    {path:'/bodyhealth/bodyhealthView',component:bodyhealthView},
    {path:'/bodyhealth/bodyhealthDetailView',component:bodyhealthDetailView},
    //組織&&人員
    {path:'/groupAndStaff/groupAndStaffView',component:groupAndStaffView},
    //組織&&人員
    {path:'/attendance/attendanceView',component:attendanceView},
    //預設
    {path:'',redirect:'/member/loginView'},
    {path:'*',component:loginView}
]

export default {
    routes:routes,
}
