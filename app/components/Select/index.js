/**
 * Created by Smart on 2018/5/10.
 */
import React, {Component} from "react";
import {Picker} from 'antd-mobile';
import styles from './style.scss';
const CustomChildren = props => (
    <div className={styles.boxInput}>
        <span className={styles.flex1}></span>
        <span className={styles.flex2}>{props.children}</span>
        <span className={styles.flex3} onClick={props.onClick}>{props.extra}</span>
        <span className={styles.flex4} onClick={props.onClick}></span>
    </div>
);
const sexArr  = [
    {label: '请选择性别',value: ''},
    {label: '男',value: '0'},
    {label: '女',value: '1'}
];
export default class Select extends Component{
    state = {
        value:''
    };

    componentDidMount(){
        const {value} = this.props;
        this.setState({
            value:value != '' && value != undefined  ? [value] : ''
        })
    }
    componentWillReceiveProps(nextProps){
        if(this.props.value != nextProps.value){
            this.setState({
                value:nextProps.value ? [nextProps.value] : ''
            })
        }
    }

    render(){
        const {onChangeFun,text,array} = this.props;
        return (
            <div className={styles.BoxContent}>
                <Picker
                    extra={"请选择"+text}
                    data={array?array:sexArr}
                    cols={1}
                    value={this.state.value}
                    onChange={
                        (val) => this.setState({
                                value: val
                            },()=>{
                                onChangeFun(val[0])
                            }
                        )
                    }
                    >
                    <CustomChildren>{text}</CustomChildren>
                </Picker>
            </div>
        )
    }
}