import React, { useState, useImperativeHandle } from 'react'
import './Frage.modules.css'

const Frage = React.forwardRef((props, ref) => {

    const weight = {
        Anwendungsentwickler : 0,
        Admin: -2,
        ECommerce: 2,
        Mediengestalter: 0,
        Buro: 1,
        Marketing: 3
    };

    const [score, setScore] = useState({
        Anwendungsentwickler : 0,
        Admin: 0,
        ECommerce: 0,
        Mediengestalter: 0,
        Buro: 0,
        Marketing: 0
    });

    const onChangeValue = (event) => {
        setScore(
            {
                Anwendungsentwickler : weight.Anwendungsentwickler * event.target.value,
                Admin: weight.Admin * event.target.value,
                ECommerce: weight.ECommerce * event.target.value,
                Mediengestalter: weight.Mediengestalter * event.target.value,
                Buro: weight.Buro * event.target.value,
                Marketing: weight.Marketing * event.target.value
            }
        )


    };

    useImperativeHandle(ref, () => ({getMyState: () => {return score}}), [score]);

    return(
        <div className="FrageContainer">
            <div className="FrageHeader">
                <p>{props.question}</p>
            </div>
            <div className="FrageBody" onChange={onChangeValue}>
                <div className="Inputs">
                    <input type="radio"  name={props.number} value="3"/>
                    <input type="radio"  name={props.number} value="2"/>
                    <input type="radio"  name={props.number} value="1"/>
                    <input type="radio"  name={props.number} value="-1"/>
                    <input type="radio"  name={props.number} value="-2"/>
                    <input type="radio"  name={props.number} value="-3"/>
                </div>
                <ul className="AntwortSpektrum">
                    <li>Stimmt!</li>
                    <li>Stimmt nicht!</li>
                </ul>
            </div>
        </div>
    )
})

export default Frage