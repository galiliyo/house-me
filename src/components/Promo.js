import React from 'react'
import styles from './promo.module.scss'

const Promo = props => {
  let containerClasses = [styles['promo']]
  let contentClasses = [styles['content-container']]
  if (props.order % 2 === 0) {
    containerClasses.push(styles['darker-bg'])
    contentClasses.push(styles['even-promo-reverse'])
  }

  return (
    <article className={containerClasses.join(' ')}>
      <div className={contentClasses.join(' ')}>
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
