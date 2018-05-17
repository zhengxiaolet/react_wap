/**
 * Created by flyjennyetn on 2017/4/21.
 */
import React, {Component} from "react";
import styles from './style.scss';

export default class InputTxt extends Component{
    state = {
        value:''
    };
    componentWillMount(){
        this.setState({
            value: this.props.value
        })
    }
    render(){
        const {onChangeFun,text,placeholder,unit} = this.props;
        return (
            <div className={styles.BoxContent}>
                <div className={styles.boxInput}>
                    <span className={styles.flex1}></span>
                    <span className={styles.flex2}>{text}</span>
                    <input
                        type="text"
                        className={styles.flex3}
                        placeholder={placeholder}
                        value = {this.state.value}
                        onChange={e=>{
                            this.setState({value:e.target.value},()=>{onChangeFun(this.state.value)})
                        }}
                        />
                    <span className={styles.flex4}>{unit}</span>
                </div>
            </div>
        )
    }
}
