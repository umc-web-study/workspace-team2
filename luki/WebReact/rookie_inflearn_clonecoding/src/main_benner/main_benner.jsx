import React, { Component } from 'react';
import styles from './main_benner.module.css';
import Counter from '../main_hooks/Counter';

function MainBenner(){
    return (
        <section>
            <div className={styles.benner_img}>
                <img id={styles.benner} src="img/main/benner_1.png" alt='benner' />
            </div>
            <div className={styles.main_benner}>
                <Counter/>
                <div className={styles.control_event} style={{ borderLeft: '1px solid #ddd', paddingLeft: '1rem' }}>
                    <div className={styles.events}>
                        <p>떠먹는 CS</p>
                    </div>
                    <div className={styles.events}>
                        <p>지식공유신청</p>
                    </div>
                    <div className={styles.events}>
                        <p>왕초보 모여라</p>
                    </div>
                    <div className={styles.events}>
                        <p>신규 강의</p>
                    </div>
                    <div className={styles.events}>
                        <p>Top 50</p>
                    </div>
                    <div className={styles.events}>
                        <p>입문 로드맵</p>
                    </div>
                    <div className={styles.events}>
                        <p>인프런은</p>
                    </div>
                    <div className={styles.events}>
                        <p>인프런 동료 찾기</p>
                    </div>
                    <div className={styles.control_eventList}>
                        <img src="./img/main/event_close.png" alt='event_close' />
                    </div>
                </div>
            </div>
            <div>
                <hr style={{ marginTop: '1rem' }} />
            </div>
            <div className={styles.center_flex}>
                <div className={styles.center_catch}>
                    <p>인프런에서 가치를 높이세요</p>
                </div>
                <div className={styles.center_search}>
                    <input id={styles.search_window} type="search" placeholder="배우고 싶은 지식을 입력해보세요" />
                    <div id={styles.search_tag}>
                        <div id={styles.tag}>
                            #MVC
                        </div>
                        <div id={styles.tag}>
                            #SpringBoot
                        </div>
                        <div id={styles.tag}>
                            #JPA
                        </div>
                        <div id={styles.tag}>
                            #Python
                        </div>
                        <div id={styles.tag}>
                            #Java
                        </div>
                        <div id={styles.tag}>
                            #Spring
                        </div>
                        <div id={styles.tag}>
                            #JavaScript
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainBenner