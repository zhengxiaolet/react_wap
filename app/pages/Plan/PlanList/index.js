/**
 * Created by Smart on 2018/5/11.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as utils from "utils/";
import styles from './style.scss';;
@connect(({global})=> {
    return {global}
})
export default class extends PureComponent {
    state = {
    };
    componentWillMount(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        utils.setTitle('产品计划书')
    };
    render(){
        return (
            <div className={styles.container}>
               计划书列表
            </div>
        )
    }
}
