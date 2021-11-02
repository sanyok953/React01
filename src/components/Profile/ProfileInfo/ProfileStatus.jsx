import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status === "" || !this.props.status ? "empty" : this.props.status
	}

	componentDidMount() {
		//console.log(this.state, this.props)
	}

	activateEditMode = () => {
		this.setState(
			{
				editMode: true
			}
		)
	}

	deactivateEditMode = () => {
		this.setState(
			{
				editMode: false
			}
		)
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = e => {
		this.setState({
			status: e.currentTarget.value
		})
	}

	componentDidUpdate(prevProps, prevState) {
		// Если при обновлении предыдущий статус не равен статусу в пропсах
		if(prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status === "" || !this.props.status ? "empty" : this.props.status
				// Присваиваем статус из пропсов и обновляем
			})
			//console.log(this.props, this.state)
		}
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>
						<span
							onDoubleClick={this.activateEditMode}
						>
							{this.state.status}
						</span>
					</div>
				}
				{this.state.editMode &&
					<div className={s.descriptionBlock}>
						<input
							autoFocus={true}
							onChange={this.onStatusChange}
							onBlur={this.deactivateEditMode}
							value={this.state.status}
						/>
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus
