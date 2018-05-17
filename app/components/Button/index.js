/**
 * Created by aaaa on 2017/2/15.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import styles from './style.scss'

export default ({text,onClick,href,type}) => {
    return(
        <div className={styles.button}>
            {type ?
                <a className={styles.btnText} href={href}>{text}</a>
                :
                <span className={styles.btnText} onClick={onClick}>{text}</span>
            }
        </div>
    )
}

