import React, { useState } from 'react'
import styles from './Header.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'
import { HiPhoneArrowUpRight } from 'react-icons/hi2'
import { BiChevronDown } from 'react-icons/bi'
import Link from 'next/link'

const Header = () => {

    const [dropdown1, setDropdown1] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [dropdown3, setDropdown3] = useState(false)
    const [dropdown4, setDropdown4] = useState(false)
    return (
        <>
            <main className={styles.container}>
                <nav className={styles.nav}>
                    <div className={styles.nav_left}>
                        {/* <div>
                            <img src="https://static.abplive.com/frontend/images/ABP_logo_main.svg" alt="abp" />
                        </div>

                        <div className={styles.header_logo_box}>
                            <span>
                                <img src="https://static.abplive.com/frontend/images/ABP_Logo_LIVE.svg"
                                    className={styles.header_logo1_img}
                                    alt="" />
                            </span>

                            <span>
                                <img src="https://static.abplive.com/frontend/images/ABP_Logo_News.svg"
                                    className={styles.header_logo2_img}
                                    alt="" />
                            </span>
                        </div> */}

                        <div>
                            <img src="https://taazatv.com/image/logo.png" alt="logo" />
                        </div>
                    </div>

                    <div className={styles.nav_middle}>
                        <div>
                            <div>
                                <img src="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M32 0H0V32H32V0Z' fill='white'/%3E%3Cpath d='M26.9592 8.41837H6.04082C5.34765 8.41837 4.78572 8.98029 4.78572 9.67347V23.0612C4.78572 23.7544 5.34765 24.3163 6.04082 24.3163H26.9592C27.6524 24.3163 28.2143 23.7544 28.2143 23.0612V9.67347C28.2143 8.98029 27.6524 8.41837 26.9592 8.41837Z' stroke='black'/%3E%3Cpath d='M5.87346 28.5H26.5324' stroke='%23EC2436' stroke-linecap='round'/%3E%3Cpath d='M8.84366 18.353H11.8599V19H8V13H8.84366V18.353Z' fill='%23EC2436'/%3E%3Cpath d='M13.7177 19H12.8784V13H13.7177V19Z' fill='%23EC2436'/%3E%3Cpath d='M17.3633 17.9492L19.1818 13H20.0998L17.7393 19H16.9961L14.64 13H15.5536L17.3633 17.9492Z' fill='%23EC2436'/%3E%3Cpath d='M24.5541 16.2266H21.7958V18.353H25V19H20.9565V13H24.9563V13.6511H21.7958V15.5797H24.5541V16.2266Z' fill='%23EC2436'/%3E%3C/svg%3E%0A" alt="icon1" />
                            </div>
                            <p>टीवी</p>
                        </div>

                        <div>
                            <div>
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19.23' height='19.23' viewBox='0 0 19.23 19.23'%3E%3Cg id='Group_5326' data-name='Group 5326' transform='translate(-369.724 -22)'%3E%3Cg id='Group_4865' data-name='Group 4865' transform='translate(371.757 22.033)'%3E%3Cg id='Group_5323' data-name='Group 5323' transform='translate(-2.033 -0.033)'%3E%3Cg id='Rectangle_1811' data-name='Rectangle 1811' fill='%23fff' stroke='%23fff' stroke-width='1'%3E%3Crect width='19.23' height='19.23' rx='4' stroke='none'/%3E%3Crect x='0.5' y='0.5' width='18.23' height='18.23' rx='3.5' fill='none'/%3E%3C/g%3E%3Cpath id='Path_2369' data-name='Path 2369' d='M-108,2226.624v9.927l6.024-4.318s.42-.323.42-.66-.42-.689-.42-.689Z' transform='translate(114.814 -2222.081)' fill='%23ec2436'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A" alt="icon2" />
                            </div>
                            <p>वीडियो</p>
                        </div>

                        <div>
                            <div>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAABACAMAAABBTvXbAAABNVBMVEUAAADtJDYAAADtJDYBAAAAAADtJDYAAAAAAADtJDYAAAAAAAAAAAAAAAAAAADtJDYAAADtJDYAAADtJDYAAAAAAAAAAADtJDYAAAAAAAAAAAAAAADtJDbtJDYAAAAAAADtJDYAAAAAAAAAAADtJDYAAADdITIAAAAAAADtJDYAAADtJDYAAAAAAAAAAAAAAAAAAADtJDbtJDYAAADtJDbtJDYAAADtJDbtJDYAAADtJDbtJDYAAADtJDYAAADtJDbtJDYAAADtJDYAAADtJDYAAAAAAAAAAADtJDbtJDYAAADtJDbtJDbtJDYAAAAAAADtJDbtJDbtJDYAAAAAAADtJDbtJDYAAADtJDbtJDYAAADtJDYAAADtJDYAAAAAAAAAAADtJDbtJDZYDRTtJDYAAADtJDZlZgMcAAAAZXRSTlMA+/cCNVQJkdHPHz5M5g3l/N7i99kY8fDGMBAG4tc6CurWpWwxJAQEvrOvqqqchH90aCIg9e3d0sa1r4VnXVpQRCopFAzrzsrBvLirkYuLe3hxNygdEA7no6KgmId6YFBEOlQgFnEOAlEAAALzSURBVEjHnZTnViJBEEarB5VFUcIoSUAUxLAC5pxzds057W597/8IS8/QQmsPnrP3T3dxLtNV1TNFOqlgZeBweKE03tFLnvSUo6zYXfYSV6tSLFFefsn7f4SZ91pM0lCJOZqfcgNf8tRiK2/QBpgftqhOMsE8/sV6Yj4jjb4xDgdJJ8hc+ZLGAu9c6f/s5lH6wlY3+6mRVrY2TLWzNdgYD/MDKbRDtCp6rHCWTIzzrq8evXGsNehQO9qXdcMKx3rq2hkrYm7rsvxBsq752ep0OewjyWB/LQ5zR6M22uVCNXrdcKtb1wbITL+uDbe4qIQH3TAb1TXFbMq99zArNC1suSTc7C47a/EnbeGq3UG9sqkpJxyc1bWxpiV8/7T/yk0R9ah0/fjm274VHmkaj81KcC4rAxJYbKINOVpaaj+dqyefiT5Hi3xosd0fRixd80TXEq1GVjt1zft9U9qRW4KRXlWCjRGiCg+bta4dbiEKgXKYlxNk1jz0smz9IYqD9pEmavf+nPuLVBSgE9hF8iXYb7yEPS4TrQG0DqwQvXBsyqAFObxBtAhBbbZMLhXlpGHS7MlGFeMIEB1BTBJNGSwqceySaMI5rwCM1DIhnVNmOaRzmClWlwPgwpl5/ZXGrvSMMZ9W1yXgWcabAjk5xMrMiWBKSflb5iciKgiEfCR5BgLyzDOLOVpaDr695kdj1e0rEf2NQxTI5aCWXnIgzIrbsvwstkPAL1JkgMCN3GwslxLRne5Df6uU6GIGuKM6c0D8t7ruVB+5LAngnhoZAZBZp0YmcoCQJ2o/TgNIn6y7VV2v3cdlXKDPbB/ZqGKnM3OZkECVmSUy0XYSEVCIwAR5MjmN3Pzcvo3INTXDxrlTeLqptQmsOXXHm2oTwGZ1OYfYbqYdQ8jlHZgkE2v7kVAVG5BLDpiRa2RxU7MWYUa/hjvAzgS+Ivu4Uu8WkLkhE4VpxH0qWILw6uY5cKH284gX28xMNpx6DAgvgHelbafhiTiQxj+0Vt1kjbzPpAAAAABJRU5ErkJggg==" alt="icon3" />
                            </div>
                            <p>पॉडकास्ट</p>
                        </div>

                        <div>
                            <div>
                                <img src="https://cdn.abplive.com/images/games-masti.gif" alt="icon4" />
                            </div>
                            <p>गेम्स</p>
                        </div>
                    </div>


                    <div className={styles.nav_right}>
                        <div>
                            <AiOutlineSearch />
                        </div>

                        <div>
                            <FaFacebookF />
                        </div>

                        <div>
                            <BsTwitter />
                        </div>

                        <div>
                            <Link href="https://stream.playbox.co.in:2020/VideoPlayer/taaza" style={{color:"red",fontSize:20}} target='_blank'><FaYoutube /></Link>        
                        </div>

                        <div>
                            <HiPhoneArrowUpRight />
                        </div>
                    </div>
                </nav>
            </main>
            <main className={styles.container2} >
                <nav className={styles.nav2}>
                    <div className={styles.nav2_left}>
                        <p>होम</p>

                        <div>
                            <img src="https://cdn.abplive.com/images/INDIA@2047-Hindi.png" alt="p2" />
                        </div>

                        <p>भारत</p>

                        <p>IDEAS OF INDIA</p>

                        <p>वेब स्टोरी</p>

                        <p>मनोरंजन</p>

                        <p>खेल</p>

                        <div onMouseLeave={() => setDropdown1(false)}>
                            <div onMouseEnter={() => setDropdown1(true)}>
                                <p>ऐस्ट्रो</p>
                                <div>
                                    <BiChevronDown />
                                </div>
                            </div>

                            {
                                dropdown1 ? (<div className={styles.dropdown} onMouseLeave={() => setDropdown1(false)}>
                                    <p>धर्म</p>
                                </div>) : (null)
                            }
                            
                        </div>

                        <p>बिजनेस</p>

                        <div onMouseLeave={() => setDropdown2(false)}>
                            <div onMouseEnter={() => setDropdown2(true)}>
                                <p>राज्य</p>
                                <div>
                                    <BiChevronDown />
                                </div>
                            </div>

                            {
                                dropdown2 ? (<div className={styles.dropdown} onMouseLeave={() => setDropdown2(false)}>
                                    <p>धर्म</p>
                                </div>) : (null)
                            }
                            
                        </div>

                        <p>लाइफस्टाइल</p>

                        <div onMouseLeave={() => setDropdown3(false)}>
                            <div onMouseEnter={() => setDropdown3(true)}>
                                <p>अन्य</p>
                                <div>
                                    <BiChevronDown />
                                </div>
                            </div>

                            {
                                dropdown3 ? (<div className={styles.dropdown} onMouseLeave={() => setDropdown3(false)}>
                                    <p>धर्म</p>
                                </div>) : (null)
                            }
                            
                        </div>

                    </div>

                    <div className={styles.nav2_right}>
                            <div onMouseEnter={() => setDropdown4(true)}>
                                <p>Selected Languages</p>
                                <div>
                                    <BiChevronDown />
                                </div>
                            </div>

                            {
                                dropdown4 ? (<div className={styles.dropdown_right} onMouseLeave={() => setDropdown4(false)}>
                                    <p>English</p>
                                    <p>Hindi</p>
                                    <p>Bengali</p>
                                </div>) : (null)
                            }
                    </div>
                </nav>
            </main>
        </>
    )
}

export default Header