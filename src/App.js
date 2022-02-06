import React, { useState } from 'react';

const Title = ({text}) => <h1>{text}</h1>

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const ActionBar = ({addGoodFeedback, addNeutralFeedback, addBadFeedback}) => {
    return (
        <>
            <Button text="Good" onClick={addGoodFeedback} />
            <Button text="Neutral" onClick={addNeutralFeedback} />
            <Button text="Bad" onClick={addBadFeedback} />
        </>
    )
}

const Statistics = ({good, neutral, bad}) => {

    if (good + neutral + bad === 0) {
        return <p>No Feedback Given.</p>
    }
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>All: {good + neutral + bad}</p>
            # TODO Add Averages / Positive %
            <p>Average: {}</p>
            <p>Positive: {}%</p>
        </>
    )
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const addGoodFeedback = () => setGood(good + 1)
    const addNeutralFeedback = () => setNeutral(neutral + 1)
    const addBadFeedback = () => setBad(bad + 1)

    return (
        <>
            <Title text="Give Feedback" />
            <ActionBar
                addGoodFeedback={addGoodFeedback}
                addNeutralFeedback={addNeutralFeedback}
                addBadFeedback={addBadFeedback}
            />
            <Title text="Statistics" />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </>
    );
}

export default App