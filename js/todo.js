class Build extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      list:[{id: 1, item: 'Study React.js',isChecked: false}],
      input: '',
    }
  }

  inputChange(e) {
    this.setState({input:e.target.value});
  }

  addItem() {
    let list = this.state.list;
    let input= this.state.input;

    list.push({
      id:Math.floor((Math.random() * 150)+ 1),
      item: input,
      isChecked: false
    });

    this.setState({input: '',list:list});
  }

  editItem (item) {
    let list = this.state.list;
    let id= item.id;

    let NewList = list.filter(list => list.id !==id)
    this.setState({input: item.item, list:NewList});
  }

  deleteItem (item) {
    let list = this.state.list;
    let id= item.id;

    let NewList = list.filter(list => list.id !==id)
    this.setState({list: NewList});
  }

  finished(item) {
    let list = this.state.list;
    let id = item.id;

    let clearToDos = list.map(list => {
      if(list.id === id) {
        (list.isChecked === true) ? list.isChecked=false : list.isChecked=true;
      }
      return list;
    });

    this.setState({list:clearToDos});
  }

  render () {
    return(
      <div>
        <div className = "heading">
          <h1>To-Do List Project</h1>
        </div>
        <List input={this.state.input} list={this.state.list}
        inputChange={this.inputChange.bind(this)} done= {this.state.li}
        addItem={this.addItem.bind(this)} deleteItem={this.deleteItem.bind(this)}
        editItem= {this.editItem.bind(this)} checked={this.finished.bind(this)}/>
      </div>
    )
  }
}

function List (props){
  return (
    <div className="to-dos">
      <input placeholder= 'Add To-Do. . .' value={props.input} onChange={props.inputChange}/>
      <button onClick={props.addItem}>Add To-Do</button>
      <ul>
        {props.list.map(list => {
            return(
              <Item key={list.id} list={list} deleteItem={props.deleteItem}
              editItem={props.editItem} checked={props.checked}
              />
            );
          })
        }
      </ul>
    </div>
  )
}

function Item (props) {
  const {deleteItem,editItem,checked,list} = props;
  const check = {
    background: list.isChecked ? 'pink' : 'white'
  }
  const done = {
    textDecoration: list.isChecked ? 'line-through' : 'none',
    color: list.isChecked ? 'gray' : 'black'
  }
  return (
    <li style={done}>
      <span onClick={() => checked(list)} style={check} className="check" ></span>{props.list.item}
      <i className="fa fa-trash" aria-hidden="true" onClick={()=>deleteItem(list)}></i>
      <i className="fa fa-pencil" aria-hidden="true" onClick={()=>editItem(list)}></i>
    </li>
  )
}




ReactDOM.render(
  <Build />,
   document.getElementById("app")
)
