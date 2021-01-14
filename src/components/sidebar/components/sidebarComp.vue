<template>
<div class="sidebarComp">
    <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
        :hideToggle="hideToggle"
        :width="width"
      />
</div>
</template>

<script>
import sidebarHeadComp from '@/components/sidebar/components/sidebarHeadComp.vue'
export default {
  data () {
    return {
      menu: [
        {
          component: sidebarHeadComp
        },
        {
          title: 'Home',
          icon: 'fa home-icon',
          child: [
            {
              title: 'Overview',
              href: '/overview/overviewView',
              
            },
            {
              title: 'Instant Alert'
            },
            {
              title: 'Body Health',
              href: '/bodyhealth/bodyhealthView',
              alias: ['/bodyhealth/bodyhealthView', '/bodyhealth/bodyhealthDetailView']
            },
            {
              title: 'Movement'
            },
            {
              title: 'Body Temperature'
            },
            {
              title: 'Attendance',
              href: '/attendance/attendanceView',
            },
            {
              title: 'Notification'
            },
          ]
        },
        {
          title: 'Personal Monitoring',
          icon: 'fa pm-icon',
          child: [
            {
              title: 'Personal Monitor'
            },
            {
              title: 'Exposure Track'
            },
          ]
        },
        {
          title: 'Management',
          icon: 'fa m-icon',
          child: [
            {
              title: 'Group & Staffs',
              href: '/groupAndStaff/groupAndStaffView'
            },
            {
              title: 'Device'
            },
            {
              title: 'Locations'
            },
            {
              title: 'E-Fences'
            },
          ]
        },
        {
          title: 'User Settings',
          icon: 'fa us-icon',
          child: [
            {
              title: 'Center'
            },
            {
              title: 'Setting'
            },
          ]
        }
      ],
      collapsed: false,
      themes: [
        {
          name: 'Default theme',
          input: ''
        },
        {
          name: 'White theme',
          input: 'white-theme'
        }
      ],
      selectedTheme: 'white-theme',
      hideToggle: true,
      width:"16vw"
    }
  },
//   components: {
//     sidebarHead
//   },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onToggleCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item, node) {
      console.log('onItemClick')
      console.log(event)
      console.log(item)
      console.log(node)
    },
    onResize () {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    }
  }
}
</script>

<style>
/* @import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css'); */
.vsm--item .vsm--link_level-1{
    border-bottom:1px #e8e8e8 solid;
}
.vsm--title {
    font-family: Roboto;
    font-size: 1.7vmin;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
}
.vsm--list {
  background-color:#fff !important;
  padding:0px !important;
}
.v-sidebar-menu.vsm_expanded .vsm--item .vsm--link_level-1 .vsm--icon {
  background-color:#fff !important;
}
.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 {
  color:#ef8059 !important;
  background-color:#fff !important;
}

.vsm--item.vsm--item_open > a > .home-icon {
  background-image: url("../../../assets/img/sidebar/icons-orange-member.svg");
  background-size: 100% 100%;
}
.vsm--item > a > .home-icon {
  background-image: url("../../../assets/img/sidebar/icons-blue-member.svg");
  background-size: 100% 100%;
}

.vsm--item.vsm--item_open > a > .pm-icon {
  background-image: url("../../../assets/img/sidebar/icons-orange-personal-monitoring.svg");
  background-size: 100% 100%;
}
.vsm--item > a > .pm-icon {
  background-image: url("../../../assets/img/sidebar/icons-blue-personal-monitoring.svg");
  background-size: 100% 100%;
}

.vsm--item.vsm--item_open > a > .m-icon {
  background-image: url("../../../assets/img/sidebar/icons-orange-filter.svg");
  background-size: 100% 100%;
}
.vsm--item > a > .m-icon {
  background-image: url("../../../assets/img/sidebar/icons-blue-filter.svg");
  background-size: 100% 100%;
}

.vsm--item.vsm--item_open > a > .us-icon {
  background-image: url("../../../assets/img/sidebar/icons-orange-member-setting.svg");
  background-size: 100% 100%;
}
.vsm--item > a > .us-icon {
  background-image: url("../../../assets/img/sidebar/icons-blue-member-setting.svg");
  background-size: 100% 100%;
}
/*游標移動到項目時的樣式*/
.vsm--link.vsm--link_level-2 {
  color: #707b91 !important;
}
.vsm--link.vsm--link_level-2:hover {
  color: #394867 !important;
  background-color: #f1f6f9 !important;
}
.vsm--link_level-2.vsm--link_active {
  color: #394867 !important;
  background-color: #f1f6f9 !important;
  font-weight: 500;
}
.vsm--link.vsm--link_level-1.vsm--link_active{
  box-shadow: 3px 0px 0px 0px white inset !important;
}
</style>