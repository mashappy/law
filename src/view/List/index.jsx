import React from 'react'
import './index.scss'
import { Pagination } from 'antd';

class ListCont extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	onChange(pageNumber) {
	  console.log('Page: ', pageNumber);
	}
	render(){
		let state = this.state;
		return (
			<div>
				<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange.bind(this)} />
			</div>
		)
	}
}

export default ListCont