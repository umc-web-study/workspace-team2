import React, { Component } from 'react';
import styles from './main_article.module.css';

class Article extends Component {

    render() {

        return(
            <section className={styles.article_flex}>
                <div className={styles.article}>
                    <div id={styles.catch_praise}>
                        읽어보기
                    </div>
                    <div id={styles.article_list}>
                        <div id={styles.article_block1}>
                            <img src="img/main/article.png" alt='강의 사진' />
                            <div id={styles.article_name}>
                                <p>[인프런 스낵 #9] 직장인 모여라! 2022 급여체 사전</p>
                            </div>
                            <div id={styles.article_desc}>
                            급식체 아시나요? 그럼 급여체는요?! 😙 #직장인 #회사생활<br/>
                            #비즈니스 #판교사투리 평소 누가 어떻게 말하는지만 살펴...
                            </div>
                        </div>
                        <div id={styles.article_block2}>
                            <img src="img/main/article.png" alt='강의 사진' />
                            <div id={styles.article_name}>
                                <p>[인프런 스낵 #9] 직장인 모여라! 2022 급여체 사전</p>
                            </div>
                            <div id={styles.article_desc}>
                            급식체 아시나요? 그럼 급여체는요?! 😙 #직장인 #회사생활<br/>
                            #비즈니스 #판교사투리 평소 누가 어떻게 말하는지만 살펴...
                            </div>
                        </div>
                        <div id={styles.article_block3}>
                            <img src="img/main/article.png" alt='강의 사진' />
                            <div id={styles.article_name}>
                                <p>[인프런 스낵 #9] 직장인 모여라! 2022 급여체 사전</p>
                            </div>
                            <div id={styles.article_desc}>
                            급식체 아시나요? 그럼 급여체는요?! 😙 #직장인 #회사생활<br/>
                            #비즈니스 #판교사투리 평소 누가 어떻게 말하는지만 살펴...
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Article;