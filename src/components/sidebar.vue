<template>
<div>
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
// const separator = {
//   template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
// }
import sidebarHead from '@/components/sidebarHead.vue'
export default {
  data () {
    return {
      menu: [
        {
          component: sidebarHead
        },
        {
          title: 'Home',
          icon: 'fa base-sidebar-icon home-icon',
          child: [
            {
              title: 'page'
            },
            {
              title: 'Page'
            },
            {
              title: 'Body Health',
              href: '/bodyhealthView',
            },
            {
              title: 'Page'
            },
            {
              title: 'Page'
            },
            {
              title: 'Page'
            },
            {
              title: 'Page'
            },
          ]
        },
        {
          title: 'Personal Monitoring',
          icon: 'fa base-sidebar-icon pm-icon',
          child: [
            {
              title: 'page'
            },
            {
              title: 'Page'
            },
          ]
        },
        {
          title: 'Management',
          icon: 'fa base-sidebar-icon m-icon',
          child: [
            {
              title: 'page'
            },
            {
              title: 'Page'
            },
            {
              title: 'Page'
            },
            {
              title: 'Page'
            },
          ]
        },
        {
          title: 'User Settings',
          icon: 'fa base-sidebar-icon us-icon',
          child: [
            {
              title: 'page'
            },
            {
              title: 'Page'
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

<style lang="scss">
@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');
body,
html {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  background-color: #f2f4f7;
//   color: #262626;
  color: #394867;
}
#demo {
  padding-left: 350px;
  transition: 0.3s ease;
}
#demo.collapsed {
  padding-left: 50px;
}
#demo.onmobile {
  padding-left: 50px;
}
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
.demo {
  padding: 50px;
}
.container {
  max-width: 900px;
}
pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  padding: 15px;
  line-height: 1.5;
  overflow: auto;
}
// .v-sidebar-menu .vsm--item {
//     font-family: Roboto;
//     font-size: 16px;
//     font-weight: normal;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: 1.25;
//     letter-spacing: normal;
//     color: #707b91;
// }
// .v-sidebar-menu.vsm_expanded {
//     background-color:#f1f6f9;
// }
// .v-sidebar-menu .vsm--item.vsm--item_open {
    
// }
// .v-sidebar-menu .vsm--link.vsm--link_active {
//     background-color:#f1f6f9;
// }
// .v-sidebar-menu .vsm--link.vsm--link_exact-active {
//     background-color:#f1f6f9;
// }
// .v-sidebar-menu.vsm_white-theme.vsm_expanded .vsm--item_open .vsm--link_level-1 {
    // background-color:#f1f6f9 !important;
// }
// .v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 {
//     font-family: Roboto;
//     font-size: 16px;
//     font-weight: 500;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: 1.25;
//     letter-spacing: normal;
//     // color: #394867 !important; 
//     background-color:#f1f6f9 !important;
//     color: #ef8059 !important; 
// }
// .v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 {
//     font-family: Roboto;
//     font-size: 16px;
//     font-weight: 500;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: 1.25;
//     letter-spacing: normal;
//     // color: #394867 !important; 
//     background-color:#f1f6f9 !important;
//     color: #ef8059 !important; 
// }
.vsm--item .vsm--link_level-1{
    border-bottom:1px #e8e8e8 solid;
}
.vsm--title {
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
}
.vsm--item {
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: #707b91;
}

.vsm--link.vsm--link_level-1 {
  padding-left: 0.5vw !important;
  padding-right: 0.5vw !important;
  padding-top: 0.25vh !important;
  padding-bottom: 0.25vh !important;
}


.vsm--list {
  background-color:#fff !important;
}
.v-sidebar-menu.vsm_expanded .vsm--item .vsm--link_level-1 .vsm--icon {
  background-color:#fff !important;
}
.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 {
  color:#ef8059 !important;
  background-color:#fff !important;
}
.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 .vsm--icon {
    // color:#ef8059 !important;
    // background-color:#f1f6f9 !important;
}


.base-sidebar-icon {
  height: 1.5vh !important;
  width: 1vw !important;
}
.vsm--item.vsm--item_open > a > .home-icon {
  background-image: url("../assets/img/sidebar_icon/icons-home-active.png");
  background-size: 100% 100%;
}
.vsm--item > a > .home-icon {
  background-image: url("../assets/img/sidebar_icon/icons-home.png");
  background-size: 100% 100%;
}

.vsm--item.vsm--item_open > a > .pm-icon {
  background-image: url("../assets/img/sidebar_icon/icons-pm-active.png");
  background-size: 100% 100%;
}
.vsm--item > a > .pm-icon {
  background-image: url("../assets/img/sidebar_icon/icons-pm.png");
  background-size: 100% 100%;
}

.vsm--item.vsm--item_open > a > .m-icon {
  background-image: url("../assets/img/sidebar_icon/icons-m-active.png");
  background-size: 100% 100%;
}
.vsm--item > a > .m-icon {
  background-image: url("../assets/img/sidebar_icon/icons-m.png");
  background-size: 100% 100%;
}

.vsm--item.vsm--item_open > a > .us-icon {
  background-image: url("../assets/img/sidebar_icon/icons-us-active.png");
  background-size: 100% 100%;
}
.vsm--item > a > .us-icon {
  background-image: url("../assets/img/sidebar_icon/icons-us.png");
  background-size: 100% 100%;
}

</style>