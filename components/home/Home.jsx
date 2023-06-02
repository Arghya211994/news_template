import React from 'react'
import styles from './Home.module.css'
import LeftNews from '../leftnews/LeftNews'
import MiddleNews from '../middlenews/MiddleNews'
import MiddleSmallNews from '../middlesmallnews/MiddleSmallNews'
import ReactPaginate from 'react-paginate';
import RightNews from '../rightnews/RightNews'
import Card from '../cards/Card'
import Card2 from '../card2/Card2'

const Home = () => {
  return (
    <>
    <section className={styles.home_container}>
        <main className={styles.home}>
        <p style={{color:"rgba(0,0,0,0.4)",marginBottom:"1.2rem"}}>होम / <span style={{color:"rgba(0,0,0,0.6)"}}>मनोरंजन</span></p>
       
        <div className={styles.body_content}>
            <div className={styles.banner}>
                <img src="https://cdn.abplive.com/images/ENT_1200x100.png" alt="banner" />
            </div>
            
            <div className={styles.body_content_main}>
                <div>
                    <h3>मनोरंजन फोटो</h3>

                    <div>
                    <LeftNews/>
                    <LeftNews/>
                    <LeftNews/>
                    <LeftNews/>
                    <LeftNews/>
                    </div>
                    
                </div>

                <div className={styles.middle}>
                    <div>
                        <h1>मनोरंजन</h1>
                        <button>{"</>"}</button>
                    </div>

                    <div>
                        <MiddleNews/>

                        <MiddleSmallNews/>
                        <MiddleSmallNews/>
                        <MiddleSmallNews/>
                        <MiddleSmallNews/>
                        <MiddleSmallNews/>
                        <MiddleSmallNews/>
                        <MiddleSmallNews/>

                        <div className={styles.pagination}>
                            <ReactPaginate
                            previousLabel={"Prev"}
                            nextLabel={"Last"}
                            pageCount={500}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={3}
                            breakLabel={"..."}
                            containerClassName={styles.pagination_box}
                            pageClassName={styles.page_item}
                            pageLinkClassName={styles.page_link}
                            previousClassName={styles.previous}
                            previousLinkClassName={'page-link'}
                            nextClassName={styles.next}
                            nextLinkClassName={'page-link'}
                            activeClassName={styles.active}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                   <div>
                        <img src="https://s0.2mdn.net/simgad/8569576272213563379?sqp=uqWu0g0ICPQDENgEQGQ&rs=AOga4qlrHmhgoc3pKmSN76ZkIaLLOx2qWQ" alt="" />
                   </div>

                   <p>टॉप न्यूज़</p>

                   <div className={styles.right_news}>
                    <RightNews/>
                    <RightNews/>
                    <RightNews/>
                    <RightNews/>
                    <RightNews/>
                    <RightNews/>
                   </div>
                </div>
            </div>
        </div>

        <div className={styles.body_content2}>
            <div>
                <Card/>
                <Card/>
                <Card/>
            </div>

            <div>
                <Card2/>
                <Card2/>
            </div>
        </div>

        </main>
    </section>
    </>
  )
}

export default Home