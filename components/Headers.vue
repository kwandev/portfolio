<template>
  <header class="header">
    <b-collapse id="navbarHeader" class="bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-white">
              About
            </h4>
            <p class="text-muted">
              안녕하세요. 프론트엔드 개발자 이경환입니다.<br>해당 페이지는 세부 경력기술을 위해 만들었습니다.<br>연락은 이메일을 이용해주세요.
            </p>
          </div>
          <div class="col-sm-4 offset-md-1 py-4">
            <h4 class="text-white">
              Contact
            </h4>
            <ul class="list-unstyled">
              <li><a href="mailto:rudghks7816@gmail.com" class="text-white">rudghks7816@gmail.com</a></li>
              <li><a href="https://leekyeonghwan.github.io" class="text-white" target="_blank">Blog</a></li>
              <li><a href="https://github.com/LeeKyeongHwan" class="text-white" target="_blank">Github</a></li>
            </ul>
          </div>
        </div>
      </div>
    </b-collapse>
    <b-navbar type="dark" variant="dark" toggleable fixed="top" class="shadow-sm">
      <div class="container d-flex justify-content-between">
        <b-navbar-brand to="/">
          <strong>PORTFOLIO</strong>
        </b-navbar-brand>
        <b-navbar-toggle target="navbarHeader">
          <span class="navbar-toggler-icon" />
        </b-navbar-toggle>
      </div>
    </b-navbar>
  </header>
</template>

<style scoped>
.header { height: 56px; }

#navbarHeader {
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
}
</style>
