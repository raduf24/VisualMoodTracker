import UploadImage from "./UploadImage.jsx";
import SessionList from "./SessionList.jsx";
import Graph from "./Graph.jsx";


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
    const imageName = props.lastImagePath;
    const zoomFactor = (thumbnailWidth / props.width) - (1 / props.height / props.width);

    return (
        <div style={{ margin: '1em' }}>
            <div style={{ display: 'inline-flex' }}>
                <div style={{
                    overflow: 'hidden', position: 'relative', width: thumbnailWidth, height: thumbnailHeight,
                    float: 'right', marginLeft: '2em'
                }} >

                    <img src={imageName}
                        style={{
                            position: 'absolute',
                            zoom: zoomFactor * 100 + '%', position: 'absolute',
                            left: (- props.left + zoomFactor * -props.width / 2) + (thumbnailWidth / 2),
                            top: (-props.top + zoomFactor * -props.height / 2) + (thumbnailHeight / 2)
                        }} />

                </div>

                <div style={{ display: 'inline-block', marginLeft: '1em' }}>
                    <div>ID: {props.faceId}</div>
                    <div>Anger: {(props.anger * 100).toFixed(2)}%</div>
                    <div>Contempt: {(props.contempt * 100).toFixed(2)}%</div>
                    <div>Disgust: {(props.disgust * 100).toFixed(2)}%</div>
                    <div>Fear: {(props.fear * 100).toFixed(2)}%</div>
                    <div>Happiness: {(props.happiness * 100).toFixed(2)}%</div>
                    <div>Neutral: {(props.neutral * 100).toFixed(2)}%</div>
                    <div>Sadness: {(props.sadness * 100).toFixed(2)}%</div>
                    <div>Surprise: {(props.surprise * 100).toFixed(2)}%</div>
                </div>

            </div>

        </div>
    );
};

const CardList = (props) => {
    return (
        <div style={{ display: 'inline-block', overflowY: 'scroll', height: '40em' }}>
            {props.cards.faces.map(card => {
                return <Card key={card.faceId}
                    lastImagePath={props.cards.path}
                    {...card} />
            }
            )}
        </div>
    );
};

export default class FacesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;

    };

    render() {
        return (
            <div>
                <h2> Add image to session </h2>
                <div>
                    <UploadImage buttonValue="Add Image" sessionId={this.props.data.name} updateState={this.props.updateState.bind(this)} />
                </div>
                <br />
                <div style={{ float: 'left' }}>
                    <h2> Session {this.props.data.name}: </h2>
                    <img src={this.props.data.images[this.props.data.images.length - 1].path} style={{ width: '40em', height: '25em' }} />
                    <br />
                    <br />
                    <br />
                    <Graph sessionId={this.props.data.sessionId} />
                </div>

                <Form />
                <CardList cards={this.props.data.images[this.props.data.images.length - 1]} />
            </div>
        );
    }
}