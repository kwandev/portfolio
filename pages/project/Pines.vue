<template>
  <div>
    <detail>
      <section class="mb-5">
        <h2>🚀 파인즈 <small>/ Front-end / 피플라이프</small></h2>
        <p class="text-muted">
          사내 ERP 시스템, Vue를 활용한 중·대규모 SPA 애플리케이션
        </p>
      </section>
      <section class="mb-5">
        <h3>🛠 기술스택</h3>
        <ul>
          <li>HTML</li>
          <li>CSS / Sass</li>
          <li>Vue</li>
          <li>JS / ES6+</li>
          <li>jQuery</li>
          <li>ESLint</li>
          <li>Webpack</li>
          <li>Git</li>
          <li>Restful API</li>
        </ul>
      </section>
      <section class="mb-5">
        <h3>👍 기여</h3>
        <p class="text-muted">
          프로젝트 세팅, 로그인 인증, 메뉴관리, 권한관리 등 ERP 내 공통 기능 및 화면 개발
        </p>
        <p class="text-muted">
          Front-end: 80 / 100
        </p>
      </section>
      <section class="mb-5">
        <h3>📝 회고</h3>
        <div class="text-muted">
          <p>
            그 간의 프로젝트 경험을 바탕으로 pines는 vue-cli-2를 이용하여 처음 프로젝트를 init했다. 추후에는 cli-3로 포팅하여 현재는 cli-3를 사용한다. ERP는 SEO가 불필요할 거라는 판단하에 nuxt를 사용하지 않았는데 그 점을 조금 후회한다. nuxt는 기본적인 구조나 사용법을 프레임워크 자체가 지정해주는게 있는데, cli 프로젝트를 이용다보니 기본구조나 작업형태를 혼자서 정해야 하는 경우가 많아 나중에 생각이나 방향이 바뀌었을 때 되돌아보면 코드나 구조가 조금 난해한 부분이 생겼다.
          </p>
          <p>
            처음 서드파티는 vue-router만 적용한 상태에서 개발을 하며 차차 vuex, eslint 등을 도입한 케이스여서, 각각 라이브러리의 기능이나 설정을 자동으로 적용되는 경우와 다르게 하나씩 경험하며 적용할 수 있었다. FE개발자가 혼자였기 때문에 당연히 일이 몰리고 바쁜 경우가 많았기에 나중엔 FE개발자까진 아니더라도 조금씩 도와줄 수 있는 개발자들이 늘어났고, 그들을 위해 vue의 간단한 사내 교육자료와 코딩컨벤션가이드를 만들어보기도 했다.
          </p>
          <p>
            처음 기획보다 훨씬 더 대규모로 커져서 당연히 SPA로 하다보니 로딩이나 속도이슈와 관련된 문제가 많았고, 다행히 vue router는 lazy loading과 같은 기능을 제공해주기 때문에 그런 기능을 하나씩 찾고 해결해가며 SPA의 이슈에 대해서도 많이 공부하는 계기가 되었다.
          </p>
        </div>
      </section>
    </detail>
  </div>
</template>

<script>
export default {
  name: 'Pines'
}
</script>

<style scoped>
</style>
