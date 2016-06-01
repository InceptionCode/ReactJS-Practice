class Layout extends React.Component{
	// Create logic outside of render function
	onClick() {
	alert('You Clicked Darrell Washington');
	}
	//bind this and the event to the element

	//You can create methods on your class
	getRight(need){
		return "I'm good but" + " " + need;
	}
	// You can even use a constructor
	constructor(){
		super();
		this.state=
		  {talk:'And I will get there.',
			li1:'Step 1: Learn',
			li2:'Step 2: Practice',
			li3:'Step 3: Execute',
			title: 'Data Binding'
		};
	}
	handleChange(e){
		e.target.value;
		this.setState({title: e.target.value});
	}

	render() {
		const title = "Getting Better";
		setTimeout(() => {
			this.setState({talk: 'This is only the beginning.'});
		}, 5000)

		return(
			//Create const & var and pass the values
			// props are attributes that can be set and added to the element
			<div>
				<h1>{title}</h1>
				<h2 onClick={this.onClick.bind(this)}>{this.props.name}</h2>
				<div className = 'body'>
					<span>{this.getRight("I need to get better")}</span>
					<span>{this.state.talk}</span>
					<div className = "state">
						<h2>Changing State</h2>
						<ul>
							<li>{this.state.li1}</li>
							<li>{this.state.li2}</li>
							<li>{this.state.li3}</li>
						</ul>
					</div>
					<div className = "data">
						<h2>{this.state.title}</h2>
						<input onChange={this.handleChange.bind(this)}
									value={this.state.title}
							/>
						<button>Go Ahead make a change</button>
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Layout name = "Darrell Washington" />, document.getElementById('app'));
