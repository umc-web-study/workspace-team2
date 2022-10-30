import React, { useRef } from 'react';
import styles from './main_benner.module.css';
import Counter from '../main_hooks/Counter';

function MainBenner(){
    return (
        <section>
            <Counter />
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