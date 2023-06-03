import React from 'react'
import styles from './Home.module.css'
import LeftNews from '../leftnews/LeftNews'
import MiddleNews from '../middlenews/MiddleNews'
import MiddleSmallNews from '../middlesmallnews/MiddleSmallNews'
import ReactPaginate from 'react-paginate';
import RightNews from '../rightnews/RightNews'
import Card from '../cards/Card'
import Card2 from '../card2/Card2'
import Link from 'next/link'
import Iframe from 'react-iframe';

const Home = () => {
    return (
        <>
            <section className={styles.home_container}>
                <main className={styles.home}>
                    <p style={{ color: "rgba(0,0,0,0.4)", marginBottom: "1.2rem" }}>होम / <span style={{ color: "rgba(0,0,0,0.6)" }}>मनोरंजन</span></p>

                    <div className={styles.body_content}>

                        <div className={styles.marquee_box}>
                            <div>
                                <p>Breaking News</p>
                            </div>

                            <div className={styles.marquee_content}>
                                <p>Coromandel Express derailment: Death toll reaches 50, compensation announced for victims' families</p>
                                <p>Coromandel Express derailment: Death toll reaches 50, compensation announced for victims' families</p>
                            </div>
                        </div>

                        <div className={styles.banner}>
                            <img src="https://taazatv.com/admin/resources/ads/1665689284Taaza_website_strip_header_(3).gif" alt="banner"
                                style={{ width: "100%" }}
                            />
                        </div>

                        <div className={styles.body_content_main}>
                            <div>
                                <h3>मनोरंजन फोटो</h3>

                                <div>
                                    <LeftNews />
                                    <LeftNews />
                                    <LeftNews />
                                    <LeftNews />
                                    <LeftNews />
                                </div>

                            </div>

                            <div className={styles.middle}>
                                <div>
                                    <h1>मनोरंजन</h1>
                                    <button>{"</>"}</button>
                                </div>

                                <div>
                                    <MiddleNews />

                                    <MiddleSmallNews />
                                    <MiddleSmallNews />
                                    <MiddleSmallNews />
                                    <MiddleSmallNews />
                                    <MiddleSmallNews />
                                    <MiddleSmallNews />
                                    <MiddleSmallNews />

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
                                    <Iframe
                                    url="https://stream.playbox.co.in:2020/VideoPlayer/taaza"
                                    width="100%"
                                    height="190"
                                    />
                                   
                                </div>

                                <p>टॉप न्यूज़</p>

                                <div className={styles.right_news}>
                                    <RightNews />
                                    <RightNews />
                                    <RightNews />
                                    <RightNews />
                                    <RightNews />
                                    <RightNews />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.body_content2}>
                        <div>
                            <Card />
                            <Card />
                            <Card />
                        </div>

                        <div>
                            <Card2 />
                            <Card2 />
                        </div>
                    </div>

                    <div className={styles.banner_2}>
                        <img src="https://taazatv.com/admin/resources/ads/1665619005Taaza_website_strip_header_(1).gif" alt="" 
                        style={{width:"100%"}}
                        />
                    </div>
                </main>

                <main className={styles.app_container}>
                <div className={styles.app_content}>
                        <div>
                            <div>
                                <h1>Download The Taaza Tv App Now to Stay Updated on the Latest News!</h1>
                                <div className={styles.app_btn_box}>
                                    <div>
                                        <img src="https://taazatv.com/image/play-store.png" alt="" />
                                    </div>

                                    <div>
                                        <img src="https://taazatv.com/image/app-store.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="https://taazatv.com/image/app.png" alt="" 
                            style={{width:"100%",height:"auto"}}/>
                        </div>
                    </div>
                    </main>

                <div className={styles.footer_top}>
                    <div>
                        <p>Taaza TV provides you with all the latest local news, 
                            national news, breaking news and current news on politics,
                             sports and entertainment. We are a trusted media that 
                             ethically follows top journalistic standards and brings 
                             to you the best news coverage. Download or Log on to the 
                             Taaza TV website and mobile app mobile to watch news 
                             on politics, sports, entertainment, lifestyle, 
                             gadgets and much more.</p>

                        <p>We bring to you news in English and Hindi, that is ‘News in your Language and from Your State’. To change Language or Location, simply scroll to the top of the page and click on the relevant icon. With Taaza TV stay informed on all latest current news on wide range of topics.</p>
                        <p>Citizen Journalism feature on the Website and App helps you upload your news along with pictures and videos. Once the news is sent to us, we shall verify it and thereby publish it in public. Simply Sign In to use various special features that are available and experience the best of Taaza digitally. You can follow us on Facebook, YouTube, Twitter &amp; Instagram to stay connected with us.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home