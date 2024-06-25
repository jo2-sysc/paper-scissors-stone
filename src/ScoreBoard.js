

function ScoreBoard ({ scores, x }) { // props
    // const {scores, x} = props;
    return (
        <div style={{
            display: 'flex', 
            gap: '5px', 
            padding:'10px 10px'
        }}
        className="scoreboard">
            <div>
              Player: {scores.player} {`(${(scores.player / (scores.player + scores.draw + scores.computer) * 100)}%)`}
            </div>
            <div>
              Draw: {scores.draw} {`(${(scores.draw / (scores.player + scores.draw + scores.computer) * 100)}%)`}
            </div>
            <div>
              Computer: {scores.computer} {`(${(scores.computer / (scores.player + scores.draw + scores.computer) * 100)}%)`}
            </div>
        </div>
    )
}

export default ScoreBoard;