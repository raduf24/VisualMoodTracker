import UploadImage from "./UploadImage.jsx";
import SessionList from "./SessionList.jsx";

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
    const imageName = "./sessions/" + props.sessionId + "/" + props.lastImage;

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
                            left: -((props.Left + props.Width / 2)) + (thumbnailWidth / 2),
                            top: -(props.Top + props.Height / 2) + (thumbnailHeight / 2)
                        }} />

                </div>

                <div style={{ display: 'inline-block', marginLeft: '1em' }}>
                    <div>ID: {props.FaceId}</div>
                    <div>Anger: {(props.Anger * 100).toFixed(2)}%</div>
                    <div>Contempt: {(props.Contempt * 100).toFixed(2)}%</div>
                    <div>Disgust: {(props.Disgust * 100).toFixed(2)}%</div>
                    <div>Fear: {(props.Fear * 100).toFixed(2)}%</div>
                    <div>Happiness: {(props.Happiness * 100).toFixed(2)}%</div>
                    <div>Neutral: {(props.Neutral * 100).toFixed(2)}%</div>
                    <div>Sadness: {(props.Sadness * 100).toFixed(2)}%</div>
                    <div>Surprise: {(props.Surprise * 100).toFixed(2)}%</div>
                </div>

            </div>

        </div>
    );
};

const CardList = (props) => {
    return (
        <div style={{ display: 'inline-block', overflowY: 'scroll', height: '40em' }}>
            {props.cards.faces.map(card =>
                <Card key={card.FaceId} sessionId={props.cards.sessionId}
                    lastImage={props.cards.lastImageId + props.cards.imageExtension} {...card} />
            )}
        </div>
    );
};

export default class FacesList extends React.Component {
    constructor(props) {
        super(props);
    };

    state = {
        data: [],
        sessionNumber: null,
        lastImageId: null,
        lastImageExtension: null,
    }


    updateState = (value) => {
        this.setState({ data: value });
        this.setState({ sessionNumber: value.sessionId });
        this.setState({ lastImageId: value.lastImageId });
        this.setState({ lastImageExtension: value.imageExtension });
    };

    render() {
        if (this.state.data != "") {
            return (
                <div>
                    <h2> Add image to session </h2>
                    <div>
                        <UploadImage updateState={this.updateState.bind(this)} />
                    </div>
                    <br />
                    <div style={{ float: 'left' }}>
                        <h2> Session {this.state.sessionNumber}: </h2>

                        <img src={".\\sessions\\" + this.state.sessionNumber + "\\"
                            + this.state.lastImageId + this.state.lastImageExtension} style={{ width: '40em', height: '25em' }} />
                    </div>
                    <Form />
                    <CardList cards={this.state.data} />
                </div>
            );
        }
        else {
            return (
                <div>
                    <h2> Create new session </h2>
                        <div>
                            <UploadImage updateState={this.updateState.bind(this)} />
                        </div>
                        <br /><br />
                    <SessionList />
                </div>
            );
        }
    }
}