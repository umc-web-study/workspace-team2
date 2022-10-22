import React, { Component } from 'react';
import styles from './footer_service.module.css';

class FooterService extends Component {
    render() {
        return(
            <section className={styles.service_flex}>
                <div className={styles.service}>
                    <div id={styles.text_wrapper}>
                        <h3>다양한 서비스를 신청하세요.</h3>
                        <p style={{color: 'gray'}}>인프런의 지식 공유자 '비즈니스' 대학생 신청방법에 대해 알아보세요</p>
                    </div>
                    <div id={styles.service_wrapper}>
                        <div id={styles.service_list}>
                            <p><span>지식공유자 되기</span><br/>
                                9개월간 온라인 기술 강의로만 1억원!<br/>
                                나의 지식을 나눠 사람들에게 배움의 기회를<br/>주고, 의미있는 대가를 가져가세요.</p>
                            <div id={styles.btn}>
                                지식공유자 참여하기
                            </div>
                        </div>
                        <div id={styles.service_list}>
                            <p><span>인프런 비즈니스 신청</span><br />
                                모든 팀원의 인프런의 강의들을 자유롭게 학습<br />하는 환경을 제공해주세요.<br />
                                업무 스킬에 집중된 콘텐츠를 통해 최신 트렌<br />드의 업무역량을 습득할 수 있습니다.</p>
                            <div id={styles.btn}>
                                비즈니스 신청하기
                            </div>
                        </div>
                        <div id={styles.service_list}>
                            <p><span>인프런 X 대학생</span><br/>
                                학교와 인프런이 함께 하여,<br/>
                                많은 학생 분들께 정해진 커리큘럼 이외에도<br/> 필요한 학습을 보완하고, 더욱 성장할 수 있도<br/>록 도와드립니다.</p>
                            <div id={styles.btn}>
                                대학생 신청하기
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FooterService;