

export default class SessionList extends React.Component {
    constructor() {
        super();
        this.state = {
            sessionList: [],
            loading: true,
            isSortAsc: true,
            columnName: 'sessionId',
        };   
    }

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

    onClick = (columnChanged) => {
        this.setState({
            columnName: columnChanged,
            loading: true
        });

    }

    renderEmployeeTable(sessionList) {
        return (
            <table className='table' /*style={{ 'max-height': '300px', 'overflow': 'scroll', 'display': 'block' }}*/ /*style={{ 'max-height': '500px'; 'overflow': 'auto'}}*/>
                <thead >
                    <tr>
                        <th></th>
                        <th onClick={() => this.onClick('SessionId')}>SessionId</th>
                        <th onClick={() => this.onClick('Name')}>Name</th>
                        <th onClick={() => this.onClick('CreationDate')}>CreationDate</th>
                        <th onClick={() => this.onClick('Description')}>Description</th>
                    </tr>
                </thead>
                <tbody >
                    {sessionList.map(emp =>
                        <tr key={emp.sessionId} >
                            <td></td>
                            <td onClick={() => { alert(emp.sessionId) }}>{emp.sessionId}</td>
                            <td onClick={() => { alert(emp.name) }}>{emp.name}</td>
                            <td onClick={() => { alert(emp.creationDate) }}>{emp.creationDate}</td>
                            <td onClick={() => { alert(emp.description) }}>{emp.description}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? this.onSort(this.state.columnName) 
            : this.renderEmployeeTable(this.state.sessionList);

        return (
            <div>
                <h2>Session List</h2>

                {contents}
            </div>
        );
    }
}
