import { useState, useRef } from 'react'

import { Main } from '../../Layout'

import './style.css'

const KEYS = [
    [
        { value: 7 },
        { value: 8 },
        { value: 9 },
    ],
    [
        { value: 4 },
        { value: 5 },
        { value: 6 },
    ],
    [
        { value: 1 },
        { value: 2 },
        { value: 3 },
    ],
]

const Numbers = ({ onPressKey }) => {
    return (
        <div className="calc-numbers">
            {KEYS.map((rows) => {
                return (
                    <div className="calc-rows">
                        {rows.map(({ value }) => <div onClick={onPressKey(value)}>{value}</div>)}
                    </div>
                )
            })}
            <div className="calc-rows">
                <div onClick={onPressKey(0)}>0</div>
                <div onClick={onPressKey('.')}>.</div>
                <div onClick={onPressKey('clean')}>C</div>
            </div>
        </div>
    )
}

const Operations = ({ onPressKey }) => {
    return (
        <div className="operations">
            <div onClick={onPressKey('+')}>+</div>
            <div>-</div>
            <div>x</div>
            <div>/</div>
        </div>
    )
}

const Calculator = () => {
    const [screen, setScreen] = useState('0')
    const previousValue = useRef('0')
    const currentOperation = useRef('')
    const needsRefresh = useRef(false)

    const onPressKey = (val) => () => {
        if (val === '+') {
            currentOperation.current = '+'
            previousValue.current = screen
            needsRefresh.current = true
        } else {
            setScreen((currentValue) => {
                let current

                if(needsRefresh.current) {
                    needsRefresh.current = false
                    
                    current = '0'
                } else {
                    current = currentValue
                }

                if (val === 'clean') return '0' 

                if (val === '.') {
                    if (current === '0') return `${current}${val}`
                    if (current.includes('.')) return current
                }

                if (current === '0') return `${val}`

                return `${current}${val}`
            }

            )
        }
    }

    return (
        <Main>
            <h1>Calculator</h1>

            <div className="calculator">
                <div className="screen">{screen}</div>

                <Operations onPressKey={onPressKey} />

                <div className="calc-bottom">
                    <Numbers onPressKey={onPressKey} />
                    <div className="calc-equal">=</div>
                </div>
            </div>
        </Main>
    )
}

export default Calculator