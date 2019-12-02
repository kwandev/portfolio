<template>
  <b-row>
    <b-col
      v-for="project in projects"
      :key="project.id"
      lg="4"
      md="6"
    >
      <project :project="project" />
    </b-col>
  </b-row>
</template>

<script>
import Project from './Project'

export default {
  components: {
    Project
  },
  data () {
    return {
      projects: [
        {
          id: 'tsystem',
          name: 'T-SYSTEM',
          summary: '전화 보험판매원을 위한 영업관리 시스템, Vue를 활용한 소·중규모 SPA 애플리케이션',
          date: '2019. 11'
        },
        {
          id: 'pines',
          name: 'Pines',
          summary: '사내 ERP 시스템, Vue를 활용한 중·대규모 SPA 애플리케이션',
          date: '2019. 11'
        },
        {
          id: 'ebiz',
          name: '사내 운영 홈페이지 퍼블리싱',
          summary: '사내에서 운영하는 각종 홈페이지 퍼블리싱, 유지보수',
          date: '2019. 11'
        },
        {
          id: 'assist',
          name: '어시스트',
          summary: '보험판매원(FA)들을 위한 보장분석 시스템',
          date: '2018. 2'
        },
        {
          id: 'yearendtax',
          name: 'FA연말정산시스템',
          summary: '보험판매원(FA)들을 위한 사내 연말정산 시스템, 첫 Frontend 프로젝트',
          date: '2018. 6'
        },
        {
          id: 'tomatoclass',
          name: '토마토클래스',
          summary: '영어교육 사이트, 운영과 유지보수 및 코드 리팩토링 위주의 작업을 진행함',
          date: '2017. 1'
        },
        {
          id: 'asteleEln',
          name: '전자연구노트',
          summary: '위지윅에디터와 템플릿 제작으로 js를 많이 경험할 수 있었음',
          date: '2016. 3'
        },
        {
          id: 'rndoffice',
          name: '알앤디오피스',
          summary: '연구과제 수행을 위한 클라우드 전자연구노트 웹서비스, 기초적인 웹 개발 경험',
          date: '2014. 6'
        }
      ]
    }
  }
}
</script>

<style>
  .bd-placeholder-img {
    text-anchor: middle;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
</style>
