import loginView from '@/pages/member/views/loginView.vue'
import signinView from '@/pages/member/views/signinView.vue'
import signinSuccessView from '@/pages/member/views/signinSuccessView.vue'
import resetPwdView from '@/pages/member/views/resetPwdView.vue'
import sendResetpwdEmailView from '@/pages/member/views/sendResetpwdEmailView.vue'
import overviewView from '@/pages/overview/views/overviewView.vue'
import bodyhealthView from '@/pages/bodyhealth/views/bodyhealthView.vue'
import bodyhealthDetailView from '@/pages/bodyhealth/views/bodyhealthDetailView.vue'
import groupAndStaffView from '@/pages/groupAndStaff/views/groupAndStaffView.vue'



let routes = [
    //登入模組
    {path:'/loginView',component:loginView},
    {path:'/signinView',component:signinView},
    {path:'/signinSuccessView',component:signinSuccessView},
    {path:'/resetPwdView',component:resetPwdView},
    {path:'/sendResetpwdEmailView',component:sendResetpwdEmailView},
    //全員態勢
    {path:'/overviewView',component:overviewView},
    //運動健康
    {path:'/bodyhealthView',component:bodyhealthView},
    {path:'/bodyhealthDetailView',component:bodyhealthDetailView},
    //組織&&人員
    {path:'/groupAndStaffView',component:groupAndStaffView},
    //預設
    {path:'',redirect:'/loginView'},
    {path:'*',component:loginView}
]

export default {
    routes:routes,
}
