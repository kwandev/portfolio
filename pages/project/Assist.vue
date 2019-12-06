<template>
  <div>
    <detail>
      <section class="mb-5">
        <h2>🚀 어시스트 <small>/ Front-end / 피플라이프</small></h2>
        <p class="text-muted">
          보험판매원(FA)을 위한 영업지원 시스템 '어시스트 (Assist)' UI 개발 / 유지보수
        </p>
      </section>
      <section class="mb-5">
        <h3>🛠 기술스택</h3>
        <ul>
          <li>HTML</li>
          <li>CSS / Sass</li>
          <li>JS / Vue / jQuery</li>
          <li>Bootstrap</li>
          <li>Gulp</li>
          <li>Git</li>
        </ul>
      </section>
      <section class="mb-5">
        <h3>👍 기여</h3>
        <p class="text-muted">
          인생플랜, 보장분석, 설계지원 상품도서관 등 모든 화면
        </p>
        <p class="text-muted">
          Front-end: 90 / 100
        </p>
      </section>
      <section class="mb-5">
        <h3>📝 회고</h3>
        <div class="text-muted">
          <p>
            어시스트는 이전 프로젝트인 '연말정산시스템'을 경험삼아 Vue를 사용하기로 했다. 또 하나의 특징은 태블릿이 메인인 웹뷰 애플리케이션으로, FA들이 태블릿을 들고다니면서 영업을 하며, 곧바로 보장분석이 가능해야 했기 때문이다.
          </p>
          <p>
            Vue를 사용하기로는 했지만, 아직까지도 자신감이 완전하진 않았기에 FE 프로젝트를 별도로 분리하지는 않고, Spring Boot프로젝트에 .ftl에 그냥 페이지 별로 new Vue()해서 사용하는 방식을 채택했다.
          </p>
          <p>
            cli나 nuxt를 이용해 완전한 프로젝트 분리를 이용하진 않았지만 해당 프로젝트로 인해 vue의 기본적인 기능에 대해 충실하게 학습하고 이해할 수 있었다. 웹뷰를 이용한 프로젝트였기 때문에, iOS와 Android 그리고 브라우저까지 각 환경을 모두 호환해야 했기 때문에, 파일다운로드나 링크 기능 등을 사용할 때 한 번 더 생각하고 코드를 작성하는 경험을 했다.
          </p>
        </div>
      </section>
    </detail>
  </div>
</template>

<script>
export default {
  name: 'Assist'
}
</script>

<style scoped>
</style>
