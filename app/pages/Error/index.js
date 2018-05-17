/**
 * Created by flyjennyetn on 2017/12/25.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from './style.scss';

@connect(({global})=> {
    return {global}
})

export default class extends PureComponent {
    componentWillMount(){
    }

    render(){
        return (
            <div className={styles.container}>
                error
            </div>
        )
    }
}

