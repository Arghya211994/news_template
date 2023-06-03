import React from 'react'
import styles from './Card2.module.css'

const Card2 = () => {
  return (
    <>
    <div className={styles.card_body}>
        <div>
            <img src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_656%2Cw_1180%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/ec86022983ea17fbd9aea9d27ea6f161.jpg" alt="" />
        </div>

        <div>
            <p>Senior Living Homes in Burdwan May Surprise You</p>
            <p>This new smartwatch is taking over India. See why it's gaining popularity quickly and selling out everywhere</p>
            <p><span style={{fontWeight:"bold"}}>GenFit</span> | Sponsored</p>
        </div>
    </div>
    </>
  )
}

export default Card2