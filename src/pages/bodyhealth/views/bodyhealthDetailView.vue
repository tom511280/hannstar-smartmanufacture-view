<template>
  <div class="bodyhealthDetailView">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <a
          class="nav-link active"
          id="home-tab"
          data-bs-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          >Heart Rate Monitor</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          href="#profile"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
          >Sleep Monitor</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          href="#contact"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
          >Sports Monitor</a
        >
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        人之初
      </div>
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        性本善
      </div>
      <div
        class="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        詞窮了
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    //初始化時執行
    let parameter = {
      isShowSiderbar: true,
      isShowTopHeader: true,
    };
    this.$store.dispatch({ type: "commonModule/init", parameter: parameter });
  },
};
</script>
<style lang="scss" scoped>
.bodyhealthDetailView {
  height: 100%;
  width: 100%;
}
.tab-content {
  height: 95%;
  width: 100%;
  background-color:white;
}
.tab-pane {
  height: 100%;
  width: 100%;
}
.tab-content {
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.nav-link {
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  color: #707b91;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #bbbfca;
}
.nav-link.active {
  color: #ffffff;
  background-color: #707b91;
}
</style>