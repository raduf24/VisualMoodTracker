import UploadImage from "./UploadImage.jsx";
import WebcamCapture from "./WebcamCapture.jsx";

export default class SessionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionNr: props.sessionNr,
            updateState: props.updateState,
            sessionList: [],
            loading: true,
            isSortAsc: false,
            columnName: 'sessionId',
        }
    };

    getSession = (sessionNr) => {
        if (sessionNr != null) {
            axios.get("/api/sessions/" + sessionNr)
                .then(response => {
                    this.state.updateState(response.data);
                });
        }
    };

    onSort = (columnName) => {
        const url = "/api/sessions";
        axios.get(url, {
            params: {
                'columnName': columnName,
                'sortKey': this.state.isSortAsc ? "asc" : "desc"
            }
        })
            .then(response => {
                this.setState(prevState => ({
                    sessionList: response.data,
                    loading: false,
                    isSortAsc:
                        prevState.columnName == columnName
                            ? !prevState.isSortAsc
                            : true,
                }));
            });
    }

    headerClick = (columnChanged) => {
        this.setState({
            columnName: columnChanged,
            loading: true
        });

    }

    renderSessionTable(sessionList) {
        return (
            <div >
                <table >
                    <thead >
                        <tr>
                            <th></th>
                            <th onClick={() => this.headerClick('SessionId')}>SessionId</th>
                            <th onClick={() => this.headerClick('Name')}>Name</th>
                            <th onClick={() => this.headerClick('CreationDate')}>CreationDate</th>
                            <th onClick={() => this.headerClick('Description')}>Description</th>
                        </tr>
                    </thead>
                    <tbody >
                        {sessionList.map(emp =>
                            <tr key={emp.sessionId}
                                onClick={() => {
                                    this.getSession(emp.name);
                                    window.location.hash = "sessionId=" + emp.name; return false;
                                }}>
                                <td></td>
                                <td >{emp.sessionId}</td>
                                <td >{emp.name}</td>
                                <td >{emp.creationDate}</td>
                                <td >{emp.description}</td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? this.onSort(this.state.columnName)
            : this.renderSessionTable(this.state.sessionList);
        return (
            <div>
                <h2> Create new session </h2>
                <div>
                    <UploadImage buttonValue="Upload" updateState={this.state.updateState.bind(this)} />
                </div>
                <br />
                <div>
                    <WebcamCapture updateState={this.props.updateState.bind(this)}/>
                </div>
                <br /><br />
                <h2>Session List</h2>
                {contents}

            </div>
        );
    }
}