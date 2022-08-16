import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/UI/Toolbar/NavBar'
import ListProjectsPage from './pages/ListProjects'
import ListEmployeesPage from './pages/ListEmployees'
import ListTasksPage from './pages/ListTasks'
import AddProjectPage from './pages/AddProject'
import AddEmployeePage from './pages/AddEmployee'
import AddTaskPage from './pages/AddTask'
import Home from './components/Home/Home'
import Login from './components/SignIn/Login'
import Details from './components/SignIn/Details'
import SignUp from './components/SignIn/SignUp'
import Errror from './components/SignIn/Errror'

import './App.css';
import { Navbar } from 'react-bootstrap';

class App extends Component {

	state = {
		projects: [],
		idProjects: 0,
		employees: [],
		idEmployees: 0,
		tasks: [],
		idTasks: 0
	}

	handleNewProjectForm = (e, data) => {
		e.preventDefault()

		let project = { ...data }
		project['id'] = this.state.idProjects
		let projects = this.state.projects.map(p => p)
		projects.push(project)
		
		this.setState({ 
			projects: projects, 
			idProjects: this.state.idProjects + 1 
		})
	}

	handleNewEmployeeForm = (e, data) => {
		e.preventDefault()

		let employee = { ...data }
		employee['id'] = this.state.idEmployees
		let employees = this.state.employees.map(e => e)
		employees.push(employee)
		
		this.setState({ 
			employees: employees, 
			idEmployees: this.state.idEmployees + 1
		})
	}

	handleNewTaskForm = (event, data) => {
		event.preventDefault()

		let newTask = { ...data }
		let newId = this.state.idTasks
		let tasks = []

		if(newTask['id']) {
			tasks = this.state.tasks.map(task => {
				return newTask.id === task['id'] ? newTask : task
			})
		} else {
			tasks = this.state.tasks.map(task => task)
			newTask['id'] = newId
			tasks.push(newTask)
			newId++
		}

		this.setState({ 
			tasks: tasks, 
			idTasks: newId
		})
	}	

	handleRemoveEmployee = (e, id) => {
		let employees = this.state.employees.filter(e => id !== e.id)
		this.setState({ employees: employees });
	}

	handleRemoveTask = (e, id) => {
		let tasks = this.state.tasks.filter(t => id !== t.id)
		let projects = this.state.projects.map(p => p)

		projects = projects.map(p => {
			p.tasks = p.tasks.filter(t => t !== id)
			return p
		})

		this.setState({ 
			tasks: tasks,
			projects: projects
		})
	}	

	render() {
		return (
			<BrowserRouter>
					<div className="container py-5">
						<div className="row">
							<div className="col-12">
							<Routes>
							<Route path='/' element={<SignUp/>} />
                             <Route path='/login' element={<Login />} />
							<Route  path="/home"
								   element={<Home/>}/>
								<Route exact path="/projects"
							       element={<ListProjectsPage projects={this.state.projects} />} />
								<Route exact path="/employees"
									element={<ListEmployeesPage 
														employees={this.state.employees} 
														removeClicked={this.handleRemoveEmployee} />} />
								<Route exact path="/tasks"
									element={<ListTasksPage 
														tasks={this.state.tasks}
														removeClicked={this.handleRemoveTask} />} />														
								<Route path="/projects/add"
									element={<AddProjectPage 
										handleForm={this.handleNewProjectForm}
										employees={this.state.employees}
										tasks={this.state.tasks} />} />
								<Route path="/employees/add"
									element={<AddEmployeePage 
										handleForm={this.handleNewEmployeeForm}
										employees={this.state.employees} />} />
								<Route path="/tasks/add/:id?"
									element={(props)=><AddTaskPage 
										handleForm={this.handleNewTaskForm}
										tasks={this.state.tasks}
                                        {...props}

									 />} />	
									 <Route path='*' element={<Errror />} />	
									</Routes>								
							</div>
						</div>
					</div>			
			</BrowserRouter>
    );
  }
}

export default App;
