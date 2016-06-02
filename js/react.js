class Layout extends React.Component{
	// NOTE Create logic outside of render function
	onClick() {
	alert('You Clicked Darrell Washington');
	}
	//NOTE bind this and the event to the element

	//NOTE You can create methods on your class
	getRight(need){
		return "I'm good but" + " " + need;
	}
	//NOTE  You can even use a constructor to set state
	constructor(){
		super();
		this.state=
		  {talk:'And I will get there.',
			get: 'Getting Better',
		 	title: 'Data Flow?'
		};
	}

	handleChange(e){
		e.target.value;
		this.setState({title: e.target.value});
	}

	colorChange(e){
		this.setState({get: "Watch Me!"});
		return setTimeout(() => {
			this.setState({get: "Getting Better"});
		}, 3000)
	}

	render() {
		setTimeout(() => {
			this.setState({talk: 'This is only the beginning.'});
		}, 5000)

		return(
			//NOTE Create const & var and pass the values
			// NOTE props are attributes that can be set and added to the element
			<div id = "root">
				<h1 onMouseOver={this.colorChange.bind(this)}>{this.state.get}</h1>
				<h2 onClick={this.onClick.bind(this)}>{this.props.name}</h2>

				<div className = 'body'>
					<span>{this.getRight("I need to get better")}</span>
					<span>{this.state.talk}</span>
					<div className = "state">
						<h2>Changing State</h2>
						<ul>
							<li>Step 1: Learn</li>
							<li>Step 2: Practice</li>
							<li>Step 3: Execute</li>
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
