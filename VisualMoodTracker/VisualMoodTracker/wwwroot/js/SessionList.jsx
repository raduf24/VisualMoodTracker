import FacesListAndSessionList from "./ListWithFacesAndProperties.jsx";

export default class SessionList extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            this.props.session.map(sessionNr => {
                return <li style={{ listStyle: 'none' }}
                    key={sessionNr}>
                    <h4 >
                        <span className="glyphicon glyphicon-folder-open btn-lg"></span>&emsp;
                        <a href={"api/sessions/" + sessionNr}>
                            {sessionNr}
                        </a>
                    </h4>
                </li>
            })
        );
    }
}