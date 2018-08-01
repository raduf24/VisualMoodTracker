
class Form extends React.Component {
    render() {
        return (
            <form style={{ margin: '1em', marginLeft: '3em', float: 'left' }}>
                <input type="text" placeholder="" style={{ marginTop: '2.5em' }} />
                <button type="submit"> Search </button>
            </form>
        );
    }
}

const Card = (props) => {
    const thumbnailWidth = 180;
    const thumbnailHeight = 180;
    const imageName = "./images/test.jpg";
    return (
        <div style={{ margin: '1em' }}>
            <div style={{ display: 'inline-flex' }}>
                <div style={{ overflow: 'hidden', position: 'relative', width: thumbnailWidth, height: thumbnailHeight, float: 'right', marginLeft: '2em' }} >
                    <img src={imageName} style={{ position: 'absolute', left: -((props.faceRectangle.left + props.faceRectangle.width / 2)) + (thumbnailWidth / 2), top: -(props.faceRectangle.top + props.faceRectangle.height / 2) + (thumbnailHeight / 2) }} />
                </div>
                <div style={{ display: 'inline-block', marginLeft: '1em' }}>
                    <div>ID: {props.faceId}</div>
                    <div>Anger: {(props.faceAttributes.emotion.anger * 100).toFixed(2)}%</div>
                    <div>Contempt: {(props.faceAttributes.emotion.contempt * 100).toFixed(2)}%</div>
                    <div>Disgust: {(props.faceAttributes.emotion.disgust * 100).toFixed(2)}%</div>
                    <div>Fear: {(props.faceAttributes.emotion.fear * 100).toFixed(2)}%</div>
                    <div>Happiness: {(props.faceAttributes.emotion.happiness * 100).toFixed(2)}%</div>
                    <div>Neutral: {(props.faceAttributes.emotion.neutral * 100).toFixed(2)}%</div>
                    <div>Sadness: {(props.faceAttributes.emotion.sadness * 100).toFixed(2)}%</div>
                    <div>Surprise: {(props.faceAttributes.emotion.surprise * 100).toFixed(2)}%</div>
                </div>
            </div>

        </div>
    );
};


const CardList = (props) => {
    return (
        <div style={{ display: 'inline-block', overflowY: 'scroll', height: '40em' }}>
            {props.cards.map(card => <Card key={card.faceId} {...card} />)}
        </div>
    );
};


class App extends React.Component {
    state = {
        data: [],
    }

    render() {
        axios.get("/json/Data.json")
            .then(response => {
                this.setState({ data: response.data })
            })
            .catch(error => {
                dispatch({ type: Actions.FETCH_DATA_ERROR, payload: err })
            });
        return (
            <div>
                <div style={{ float: 'left' }}>
                    <h2> Example: </h2>
                    
                    <img src="./images/test.jpg" style={{ width: '40em', height: '25em' }} />
                </div>
                <Form />
                <CardList cards={this.state.data} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
//export default App

/*ReactDOM.render(
    <App info={data}/>,
    document.getElementById('content')
);*/
//export default App;
