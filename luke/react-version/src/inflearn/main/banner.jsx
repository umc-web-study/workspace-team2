import './banner.css'
import imgA from './main_banner_1.png'



export default function BannerMain() {
  const check = {
    border: '1 solid #1dc078',
    color: '#1dc078'
  }

  return (
    <section class="banner">
            <div class="banner-imgs">
              <img src={imgA} alt="imgA" />
            </div>
            <div class="container-one">
              <div class="content">
                <div class="swiper-controller">
                  <div class="index-wrapper">
                    <span class="part-index">2</span>
                    /
                    <span class="total_index">7</span>
                  </div>
                  <div class="control-wrapper">
                    <div class="control-button-one">〈</div>
                    <div class="control-button-two">||</div>
                    <div class="control-button-three">〉</div>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="swiper-bullet-container">
                  <div class="swiper-bullet">신규 강의 🎁</div>
                  <div class="swiper-bullet" style={check}>입문 로드맵</div>
                  <div class="swiper-bullet">지식공유신청</div>
                  <div class="swiper-bullet">왕초보 모여라 😎</div>
                  <div class="swiper-bullet">Top 50 👑</div>
                  <div class="swiper-bullet">인프런은 🌱</div>
                  <div class="swiper-bullet">인프런 동료찾기</div>
                </div>
                <div class="swiper-togle-button"></div>
              </div>
            </div>
          </section>
  );
}