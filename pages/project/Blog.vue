<template>
  <div>
    <detail>
      <section class="mb-5">
        <h2>🚀 블로그 <small>/ Front-end / 개인</small></h2>
        <p class="text-muted">
          2019. 11 ~
        </p>
        <p class="text-muted">
          스터디나 트러블슈팅을 기록하기 위한 블로그, 의무감보단 개인적인 기록에 의의를 두고 있음.
          <ul>
            <li><a href="http://blog.khwan.kr/" target="_blank">블로그 바로가기</a></li>
          </ul>
        </p>
      </section>
      <section class="mb-5">
        <h3>🛠 기술스택</h3>
        <ul>
          <li>Vue</li>
          <li><a href="https://gridsome.org/" target="_blank">Gridsome</a></li>
          <li>Netlify</li>
        </ul>
      </section>
      <section class="mb-5">
        <h3>📝 회고</h3>
        <div class="text-muted">
          <p>개인적으로 블로그를 하나 운영해보고 싶은 마음은 개발자를 시작하고부터 있었지만, 막상 글쓰기에 자신도 없고 누군가가 내 글을 읽는다는 부담이 있어서 하지 않고있었다. 그러다 티스토리나 hexo 등을 이용해 일단 만들어만 두었다가 이왕 만드는 김에 의미있이 사용할 수 있는 블로그를 만들자고 생각해서 찾은게 React의 Gatsby 였으나, 리액트는 잘 사용해본 적이 없어서 망설였는데 마침 Gatsby와 비슷한 Gridsome을 알게되었다. Gridsome은 Vue를 기반으로 작성되었기 때문에 커스터마이징하기 그나마 편할거란 생각에 선택했다.</p>
          <p>스타터템플릿을 이용해 블로그를 만들고 필요없는 기능이나 페이지는 다 날려버린뒤에 disqus로 댓글 기능을 추가하고 GA플러그인 까지 달아두었다. 블로깅에 필요한 웬만한 기능은 Gridsome에 라이브러리들이 이미 잘 제작되어있기에 무리없이 만들 수 있었다.</p>
        </div>
      </section>
    </detail>
  </div>
</template>

<script>
export default {
  name: 'Ebiz'
}
</script>

<style scoped>
</style>
