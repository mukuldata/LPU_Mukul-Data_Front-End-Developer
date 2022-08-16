import React, { Component } from 'react'
import NavBar  from "../components/UI/Toolbar/NavBar"

class AddTask extends Component {
	state = {
		formData: {
			name: '',
			description: '',
			duration: 0,
		}
	}

	componentWillMount = () => {
		let queryId = this.props.match.params.id
		if(queryId) {
			let task = this.props.tasks.find(t => t.id === parseInt(queryId))

			this.setState({
				formData: { ...task }
			})
		}
	}

	handleChange = (event, field) => {
		this.setState({ 
			formData: {
				...this.state.formData,
				[field]: event.target.value 
			}
		})
	}

	render() {
		return (
			<>
			<NavBar/>
			<br></br>
			<div className="row">
				<div className="col-6">
					<h1>New Task</h1>
					<form className="mt-3"
					 onSubmit={e => this.props.handleForm(e, this.state.formData)}>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input type="text" 
								className="form-control" 
								placeholder="Name" 
								value={this.state.formData.name}
								onChange={e => this.handleChange(e, 'name')} />
						</div>
						<div className="form-group">
							<label htmlFor="description">Description</label>
							<input type="text" 
								className="form-control" 
								placeholder="Description" 
								value={this.state.formData.description}
								onChange={e => this.handleChange(e, 'description')} />
						</div>
						<div className="form-group">
							<label htmlFor="duration">Duration</label>
							<input type="number" 
								className="form-control" 
								placeholder="Duration" 
								value={this.state.formData.duration}
								onChange={e => this.handleChange(e, 'duration')}/>
						</div>
						<button type="submit" className="btn btn-primary">Save task</button>
					</form>
				</div>
			</div>
			</>
		)
	}
}

export default AddTask