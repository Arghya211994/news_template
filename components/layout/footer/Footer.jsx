import React from 'react'
import styles from './Footer.module.css'
import {RiComputerLine} from 'react-icons/ri'


const Footer = () => {
  return (
    <>
    <section className={styles.container}>
      <main className={styles.footer}>
        <div className={styles.left}>
          <h1>BREAKING NEWS</h1>

          <div>
            <p> Coromandel Express derailment: Death toll reaches 50, compensation 
              announced for victims' families</p>
          </div>

          <div>
            <p>  Controversy arises as Jadavpur University opens gender-neutral toilet,
               BJP and TMC clash over statement</p>
          </div>

          <div>
            <p>TMC leader tied to pole and assaulted in Birbhum over alleged affair</p>
          </div>
        </div>

        <div className={styles.middle}>
          <h1>Quick Links</h1>

          <div>
            <p>About us</p>
            <p>Advertise</p>
            <p>Careers</p>
            <p>Contact Uss</p>
            <p>RSS</p>
          </div>
        </div>

        <div className={styles.right}>
            <button>
              <div>
                <RiComputerLine/>
              </div>
              <p>Live TV</p>
            </button>

            <h2>Group of Companies</h2>

            <p>• Taaza TV - National Hindi Channel From Eastern India</p>
            <p>• Chhapte Chhapte - Hindi Daily Newspaper</p>
            <p>• MultiFX - Digital Interactive Screens </p>
            <p>• FileITIndia - GST filings made easy</p>
            <p>• Taaza Digital - Contentful Digital Marketing</p>

            <div>
              <img src="https://taazatv.com/image/bc.png" alt="taza_logo" />
            </div>
        </div>
      </main>
      <main className={styles.subFooter}>
        <p>© 2022 Taaza Tv. All rights reserved.</p>
        <div>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </main>
    </section>
    </>
  )
}

export default Footer