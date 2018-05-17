/**
 * Created by Smart on 2018/5/10.
 */
import React, {Component} from "react";
import {DatePicker} from 'antd-mobile';
import styles from './style.scss';
const CustomChildren = props => (
    <div className={styles.boxInput}>
        <span className={styles.flex1}></span>
        <span className={styles.flex2}>{props.children}</span>
        <span className={styles.flex3} onClick={props.onClick}>{props.extra}</span>
        <span className={styles.flex4} onClick={props.onClick}></span>
    </div>
);

export default class InputDate extends Component{
    state = {
        value:''
    };
    componentWillMount(){
        this.setState({
            value: this.props.value
        })
    }
    render(){
        const {onChangeFun,text} = this.props;
        return (
            <div className={styles.BoxContent}>
                <DatePicker
                    mode="date"
                    type="date"
                    extra="请选择日期"
                    value={this.state.value}
                    onChange={(val)=>{
                            this.setState({
                                value:val
                            },
                            ()=>{
                                onChangeFun(val)
                            })
                        }}
                    minDate={moment('1900-01-01')}
                    >
                    <CustomChildren>{text}</CustomChildren>
                </DatePicker>
            </div>
        )
    }
}