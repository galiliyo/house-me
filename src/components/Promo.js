import React from 'react'
import styles from './promo.module.scss'

const Promo = props => {
  let containerClasses = [styles.promo]
  if (props.order % 2 === 0) {
    containerClasses.push(styles['darker-bg'], styles['row-reverse'])
  }

  return (
    <article className={containerClasses.join(' ')}>
      <div className={styles['content-container']}>
        <div className={styles['illustration-container']}>
          <img
            src={props.illustration}
            alt="illustration"
            className={styles.illustration}
          />
        </div>
        <div className={styles.text}>{props.children}</div>
      </div>
    </article>
  )
}

export default Promo
