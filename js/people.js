class Build extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      people:[
              {id: 1, name: "Darrell Washington"},
              {id:2, name: "Destiny Anderson"}
            ],
      input: ''
    };
  }

  inputChange (e) {
    this.setState({input: e.target.value});
  }

  addPeople () {
    let people = this.state.people;
    let input= this.state.input;

    people.push({
      id: Math.floor((Math.random() * 150) + 1),
      name: input
    })
    this.setState({
      people: people,
      input: ''
    })
  }

  deletePerson (person) {
    let id = person.id;
    let NewPeople = this.state.people.filter(person => person.id !== id);

    this.setState({people: NewPeople});
  }
  render() {
    return(
      <div>
        <div className="heading">
          <h1>Add People Project</h1>
        </div>
        <PeopleList input={this.state.input}  people={this.state.people}
        addPeople={this.addPeople.bind(this)} inputChange={this.inputChange.bind(this)}
        deletePerson={this.deletePerson.bind(this)}/>
      </div>
    )
  }
}

function PeopleList (props) {
  return(
    <div>
      <div className= "add-people">
        <input type="text" placeholder="Name. . ." value = {props.input} onChange={props.inputChange}/>
        <button id="addPerson" onClick={props.addPeople}>Add Person</button>
      </div>
      <div id="people">
        <ul>{
          props.people.map(person => {
            return (
              <People key = {person.id} person = {person} deletePerson={props.deletePerson}/>
            );
            })
          }
        </ul>
      </div>
    </div>
  )

}

function People (props) {
  const {deletePerson,person} = props;
  return(
    <li>{props.person.name}<i className="fa fa-times-circle-o" aria-hidden="true" onClick={()=> deletePerson(person)}></i>
</li>
  )
}

ReactDOM.render(
<Build />,
  document.getElementById('app')
);
