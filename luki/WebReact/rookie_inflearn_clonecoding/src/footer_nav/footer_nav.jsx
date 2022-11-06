import React, { Component } from 'react';
import styles from './footer_nav.module.css';

class FooterNav extends Component {
    render() {
        return (
            <section className={styles.footer_nav_flex}>
                <div className={styles.footer}>
                    <div id={styles.table_wrapper}>
                        <div id={styles.list_block}>
                            <div id={styles.list_header}>인프런</div><br />
                            <a id={styles.list_body}>공지사항</a><br />
                            <a id={styles.list_body}>인프런 소개</a><br />
                            <a id={styles.list_body}>인프랩 실Log</a><br />
                            <a id={styles.list_body}>인프랩 채용</a>
                        </div>

                        <div id={styles.list_block}>
                            <div id={styles.list_header}>고객센터</div><br />
                            <a id={styles.list_body}>자주묻는 질문</a><br />
                            <a id={styles.list_body}>수료증 확인</a><br />
                            <a id={styles.list_body}>이용약괸</a><br />
                            <a id={styles.list_body}>개인정보취급방침</a><br />
                            <a id={styles.list_body}>저적권 신고센터</a>
                        </div>

                        <div id={styles.list_block}>
                            <div id={styles.list_header}>신청하기</div><br />
                            <a id={styles.list_body}>지식공유참여</a><br />
                            <a id={styles.list_body}>멘토링 소개</a><br />
                            <a id={styles.list_body}>인프런 비즈니스</a><br />
                            <a id={styles.list_body}>인프런 X 대학교</a><br />
                            <a id={styles.list_body}>인프런 X AWS 제휴</a>
                        </div>

                        <div id={styles.list_block}>
                            <div id={styles.list_header}>학습하기</div><br />
                            <a id={styles.list_body}>IT 프로그래밍</a><br />
                            <a id={styles.list_body}>크리에이티브</a><br />
                            <a id={styles.list_body}>업무스킬</a><br />
                            <a id={styles.list_body}>수강코드 등록</a><br />
                            <a id={styles.list_body}>포인트코드 등록</a>
                        </div>

                        <div id={styles.list_block}>
                            <div id={styles.list_header}>커뮤니티</div><br />
                            <a id={styles.list_body}>학습로드맵</a><br />
                            <a id={styles.list_body}>질문 & 답변</a><br />
                            <a id={styles.list_body}>수강평 모아보기</a><br />
                            <a id={styles.list_body}>강의 · 기능요청</a>
                        </div>
                    </div>
                    <hr id={styles.footer_hr} />
                    <div id={styles.info_wrapper}>
                        <div id={styles.info_left}>
                            <img src="img/main/logo_footer.png" alt='footer' />
                            <a>개인정보 취급 방침</a>
                            <a>이용 약관</a>
                            <p>(주)인프랩 | 대표자: 이형주 | 사업자번호: 499-81-00612 사업자 정보 확인<br />
                                통신판매업: 2018-성남분당B-0062 | 개인정보보호책임자: 이동욱 | 이메일: info@inflearn.com<br />
                                주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스 1A동 405호<br /><br />©INFLAB. ALL RIGHTS RESERVED</p>
                        </div>
                        <div id={styles.info_right}>
                            <button type="button"><img src="img/main/footer_1.png" alt='1' /></button>
                            <button type="button"><img src="img/main/footer_2.png" alt='2' /></button>
                            <button type="button"><img src="img/main/footer_3.png" alt='3' /></button>
                            <button type="button"><img src="img/main/footer_4.png" alt='4' /></button>
                            <button type="button"><img src="img/main/footer_5.png" alt='5' /></button>
                            <button type="button"><img src="img/main/footer_6.png" alt='6' /></button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FooterNav;
