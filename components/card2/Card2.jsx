import React from 'react'
import styles from './Card2.module.css'

const Card2 = () => {
  return (
    <>
    <div className={styles.card_body}>
        <div>
            <img src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_656%2Cw_1180%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/5271a5f849fa569c497ec7a93f7cae53.jpg" alt="" />
        </div>

        <div>
            <p>Every Indian Should Get This Incredible Rs.1999 Smartwatch</p>
            <p>This new smartwatch is taking over India. See why it's gaining popularity quickly and selling out everywhere</p>
            <p><span style={{fontWeight:"bold"}}>GenFit</span> | Sponsored</p>
        </div>
    </div>
    </>
  )
}

export default Card2