<template>
  <div>
    <main role="main">
      <jumbotrons />
      <div class="py-5 bg-light">
        <div class="container">
          <h3 class="mb-3">
            기업 프로젝트
          </h3>
          <project-list :projects="companPprojects" />
        </div>
        <div class="container pb-3">
          <h3 class="my-3">
            개인 프로젝트
          </h3>
          <project-list :projects="privateProjects" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Jumbotrons from '~/components/Jumbotrons'
import ProjectList from '~/components/ProjectList'

export default {
  name: 'Index',
  components: {
    Jumbotrons,
    ProjectList
  },
  data () {
    return {
      companPprojects: [
        {
          id: 'tsystem',
          name: 'T-SYSTEM',
          thumbnail: 'tsystem.png',
          summary: '전화 보험판매원을 위한 영업관리 시스템, Vue를 활용한 소·중규모 SPA 애플리케이션',
          date: '2019. 11',
          role: 'FE'
        },
        {
          id: 'pines',
          name: 'Pines',
          thumbnail: 'pines.png',
          summary: '사내 ERP 시스템, Vue를 활용한 중·대규모 SPA 애플리케이션',
          date: '2019. 11',
          role: 'FE'
        },
        {
          id: 'ebiz',
          name: '사내 운영 홈페이지 퍼블리싱',
          thumbnail: 'ebiz.png',
          summary: '사내에서 운영하는 각종 홈페이지 퍼블리싱, 유지보수',
          date: '2019. 11',
          role: 'FE'
        },
        {
          id: 'assist',
          name: '어시스트',
          thumbnail: 'assist.png',
          summary: '보험판매원(FA)들을 위한 보장분석 시스템',
          date: '2018. 2',
          role: 'FE'
        },
        {
          id: 'yearendtax',
          name: 'FA연말정산시스템',
          thumbnail: 'yearendtax.png',
          summary: '보험판매원(FA)들을 위한 사내 연말정산 시스템, 첫 Frontend 프로젝트',
          date: '2018. 6',
          role: 'FE'
        },
        {
          id: 'tomatoclass',
          name: '토마토클래스',
          thumbnail: 'tomatoclass.png',
          summary: '영어교육 사이트, 운영과 유지보수 및 코드 리팩토링 위주의 작업을 진행함',
          date: '2017. 1',
          role: 'BE'
        },
        {
          id: 'asteleEln',
          name: '전자연구노트',
          thumbnail: 'asteleEln.png',
          summary: '위지윅에디터와 템플릿 제작으로 js를 많이 경험할 수 있었음',
          date: '2016. 3',
          role: 'BE'
        },
        {
          id: 'rndoffice',
          name: '알앤디오피스',
          thumbnail: 'rndoffice.png',
          summary: '연구과제 수행을 위한 클라우드 전자연구노트 웹서비스, 기초적인 웹 개발 경험',
          date: '2014. 6',
          role: 'BE'
        }
      ],
      privateProjects: [
        {
          id: 'khitenoise',
          name: '백색소음',
          thumbnail: 'khite-noise.png',
          summary: '종류별 백색소음을 들을 수 있고, 들은 시간을 재주는 웹앱',
          date: '2020. 01',
          role: 'FE'
        },
        {
          id: 'portfolio',
          name: '포트폴리오',
          thumbnail: 'portfolio.png',
          summary: '이력서에 적기 힘든 상세한 내용을 적기 위한 포트폴리오 웹사이트',
          date: '2019. 12',
          role: 'FE'
        },
        {
          id: 'thumbnailmaker',
          name: 'ThumbnailMaker',
          thumbnail: 'thumbnailmaker.png',
          summary: '썸네일을 쉽게 만들어주는 기능을 가진 사이드 프로젝트',
          date: '2019. 11',
          role: 'FE'
        },
        {
          id: 'blog',
          name: 'Blog',
          thumbnail: 'blog.png',
          summary: '스터디나 트러블슈팅을 기록하기 위한 블로그, 의무감보단 개인적인 기록에 의의를 두고 있음.',
          date: '2019. 11',
          role: 'FE'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
