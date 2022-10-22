import React, { Component } from 'react';
import styles from './lecture_new.module.css';

class NewLecture extends Component {
     render() {

        return(
         <section className='new_flex'>
              <div className={styles.new_lecture}>
                 <div id={styles.catch_praise}>
                    따끈따끈, 신규 강의를 만나보세요!
                 </div>
                 <div id={styles.lecture_list}>
                    <div id={styles.lecture_block1}>
                       <img src="./img/main/new.png" alt='강의 이미지' />
                       <div id={styles.lecture_name}>
                          처음하는 딥러닝과 파이토치<br />(PyTorch)부트캠프 [차근차근인...</div>
                       <div id={styles.lectuer_teacher}>
                          잔재미코딩
                       </div>
                       <div id={styles.price}>
                          <del>&#8361;143,000</del> &#8361;114,400
                       </div>
                       <div id={styles.tag_wapper}>
                          <div id={styles.new}>
                             업데이트
                          </div>
                          <div id={styles.price_down}>
                             할인중
                          </div>
                       </div>
                    </div>
                    <div id={styles.lecture_block2}>
                       <img src="./img/main/new.png" alt='강의 이미지' />
                       <div id={styles.lecture_name}>
                          처음하는 딥러닝과 파이토치<br />(PyTorch)부트캠프 [차근차근인...</div>
                       <div id={styles.lectuer_teacher}>
                          잔재미코딩
                       </div>
                       <div id={styles.price}>
                          <del>&#8361;143,000</del> &#8361;114,400
                       </div>
                       <div id={styles.tag_wapper}>
                          <div id={styles.new}>
                             업데이트
                          </div>
                          <div id={styles.price_down}>
                             할인중
                          </div>
                       </div>
                    </div>
                    <div id={styles.lecture_block3}>
                       <img src="./img/main/new.png" alt='강의 이미지' />
                       <div id={styles.lecture_name}>
                          처음하는 딥러닝과 파이토치<br />(PyTorch)부트캠프 [차근차근인...</div>
                       <div id={styles.lectuer_teacher}>
                          잔재미코딩
                       </div>
                       <div id={styles.price}>
                          <del>&#8361;143,000</del> &#8361;114,400
                       </div>
                       <div id={styles.tag_wapper}>
                          <div id={styles.new}>
                             업데이트
                          </div>
                          <div id={styles.price_down}>
                             할인중
                          </div>
                       </div>
                    </div>
                    <div id={styles.lecture_block4}>
                       <img src="./img/main/new.png" alt='강의 이미지' />
                       <div id={styles.lecture_name}>
                          처음하는 딥러닝과 파이토치<br />(PyTorch)부트캠프 [차근차근인...</div>
                       <div id={styles.lectuer_teacher}>
                          잔재미코딩
                       </div>
                       <div id={styles.price}>
                          <del>&#8361;143,000</del> &#8361;114,400
                       </div>
                       <div id={styles.tag_wapper}>
                          <div id={styles.new}>
                             업데이트
                          </div>
                          <div id={styles.price_down}>
                             할인중
                          </div>
                       </div>
                    </div>
                    <div id={styles.lecture_block5}>
                       <img src="./img/main/new.png" alt='강의 이미지' />
                       <div id={styles.lecture_name}>
                          처음하는 딥러닝과 파이토치<br />(PyTorch)부트캠프 [차근차근인...</div>
                       <div id={styles.lectuer_teacher}>
                          잔재미코딩
                       </div>
                       <div id={styles.price}>
                          <del>&#8361;143,000</del> &#8361;114,400
                       </div>
                       <div id={styles.tag_wapper}>
                          <div id={styles.new}>
                             업데이트
                          </div>
                          <div id={styles.price_down}>
                             할인중
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
         </section>
        );
     }
}

export default NewLecture;