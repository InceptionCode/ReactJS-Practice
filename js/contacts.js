class Build extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        search: '',
        add: '',
        contacts: [
                  {id: 1, name: "Darrell Washington: (678)364-2397"},
                  {id: 2, name: "Kevin Bates: (404)322-2321"},
                  {id: 3, name: "Moms: (678)462-2221"}
                  ]
      };
  }

  inputChange(e){
    this.setState({add:e.target.value});
  }

  search (e) {
    this.setState({search: e.target.value});
  }

  addContact () {
    let input = this.state.add;
    let contacts = this.state.contacts;

    contacts.push({
      id: Math.floor((Math.random() * 150) + 1),
      name: input
    });

    this.setState({
                  add: '',
                  contacts: contacts
                });
  }

  deleteContact (contact) {
    let id = contact.id
    let contacts = this.state.contacts;

    let NewContacts = contacts.filter(contact => contact.id !== id)
    this.setState({contacts:NewContacts});
  }
  render () {
    return(
      <div>
        <div className="heading">
          <h1>Contacts Project</h1>
        </div>
        <ContactList contacts = {this.state.contacts} search = {this.state.search}
          add = {this.state.add} inputChange = {this.inputChange.bind(this)}
          addContact= {this.addContact.bind(this)} searchContact={this.search.bind(this)}
          deleteContact= {this.deleteContact.bind(this)}/>
      </div>
    )
  }
}

function ContactList (props) {
  let filteredContacts = props.contacts.filter(contact => {
                          return contact.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1;
                        });
  return (
    <div className = "contact-list">
      <input type= "text" placeholder = "Search..." value={props.search} onChange={props.searchContact}/>
      <ul>{
          filteredContacts.map(contact => {
           return (
             <Contacts key={contact.id} contact={contact}
             deleteContact= {props.deleteContact}/>
           );
         })
       }
      </ul>
      <input type="text" placeholder = "Add Contact..." onChange={props.inputChange} value={props.add}/>
      <button onClick={props.addContact}> Save Contact </button>
    </div>
  )
}

function Contacts (props) {
  const {deleteContact,contact} = props;
  return (
    <div>
      <li> {props.contact.name}<i className= "delete" onClick={()=> deleteContact(contact)}>x</i></li>
    </div>
  )
}

ReactDOM.render(
<Build />,
  document.getElementById('app')
);
