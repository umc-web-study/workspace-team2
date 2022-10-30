import React, { Component } from 'react';
import styles from './main_roadmap.module.css';

class Roadmap extends Component {

    render() {

        return(
            <section className={styles.roadmap_flex}>
                <div className={styles.roadmap}>
                    <div id={styles.catch_praise}>
                        기본부터 실무까지 제시해주는 로드맵 🏃🏻‍♀️ RoadMap!!
                    </div>
                    <div id={styles.guide_txt}>
                        아무것도 몰라도 따라오다 보면 전문가가 될 수 있어요!
                    </div>
                    <div id={styles.roadmap_list}>
                        <div id={styles.lecture_block1}>
                            <img src="img/main/roadmap.png" alt='강의 사진' />
                            <div id={styles.roadmap_name}>
                                <p>게임 서버 프로그래머 로드맵</p>
                            </div>
                        </div>
                        <div id={styles.lecture_block2}>
                            <img src="img/main/roadmap.png" alt='강의 사진' />
                            <div id={styles.roadmap_name}>
                                <p>게임 서버 프로그래머 로드맵</p>
                            </div>
                        </div>
                        <div id={styles.lecture_block3}>
                            <img src="img/main/roadmap.png" alt='강의 사진' />
                            <div id={styles.roadmap_name}>
                                <p>게임 서버 프로그래머 로드맵</p>
                            </div>
                        </div>
                        <div id={styles.lecture_block4}>
                            <img src="img/main/roadmap.png" alt='강의 사진' />
                            <div id={styles.roadmap_name}>
                                <p>게임 서버 프로그래머 로드맵</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Roadmap;