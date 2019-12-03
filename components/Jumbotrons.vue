<template>
  <div class="text-center">
    <b-jumbotron>
      <template v-slot:header>
        안녕하세요. 이경환입니다.
      </template>
      <template v-slot:lead>
        해당 페이지는 세부 경력기술을 위해 만들었습니다. 이미지는 참고만 해주세요.
      </template>
    </b-jumbotron>
  </div>
</template>

<style lang="scss" scoped>
.jumbotron {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #fff;

  p:last-child { margin-bottom: 0; }
  .lead {
    margin-left: auto;
    margin-right: auto;
    max-width: 40rem;
  }
}
.jumbotron-heading { font-weight: 300; }

@media (min-width: 768px) {
  .jumbotron {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}
@media (max-width: 767px) {
  .display-3 { font-size: 3rem; }
}
</style>
