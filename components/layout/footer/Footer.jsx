import React from 'react'
import styles from './Footer.module.css'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.footer}>
          <div>

            <div>
              <button>Live TV</button>
              <button>Video</button>
              <button>Photo Gallery</button>
            </div>

            <div>
              <span><FaFacebookF /></span>
              <span><BsTwitter /></span>
              <span><FaYoutube /></span>
            </div>

          </div>


          <div className={styles.footer_content}>
            <div>

              <div>
                <p>Latest News</p>

                <p>States News</p>
                <p>News</p>
                <p>Astro News</p>
                <p>World News</p>
                <p>Technology</p>
                <p>Auto</p>
                <p>Indian News</p>
                <p>Photo Gallery</p>
                <p>Audio News</p>
              </div>

              <div>
                <p>Latest News</p>

                <p>States News</p>
                <p>News</p>
                <p>Astro News</p>
                <p>World News</p>
                <p>Technology</p>
              </div>


              <div>
                <p>Latest News</p>

                <p>States News</p>
                <p>News</p>
              </div>


              <div>
                <p>Latest News</p>

                <p>States News</p>
                <p>News</p>
                <p>Astro News</p>
                <p>World News</p>
                <p>Technology</p>
                <p>Auto</p>
                <p>Indian News</p>
                <p>Photo Gallery</p>
              </div>

              <div>
                <p>Latest News</p>

                <p>States News</p>
                <p>News</p>
                <p>Astro News</p>
                <p>World News</p>
                <p>Technology</p>
              </div>

            </div>

            <div>
              <p>Mobile App</p>
              <div>
                <img src="data:image/png;base64,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" alt="" />
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}



{/* <div>
<p>Latest News</p>

<p>States News</p>
<p>News</p>
<p>Astro News</p>
<p>World News</p>
<p>Technology</p>
<p>Auto</p>
<p>Indian News</p>
<p>Photo Gallery</p>
<p>Audio News</p>
</div> */}

export default Footer