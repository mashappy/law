import React from 'react'
import './index.scss'
import { Pagination } from 'antd';

class ListCont extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			listData:[
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨",time:'2021.7.26'},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨",time:'2021.7.26'},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨",time:'2021.7.26'},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨",time:'2021.7.26'},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨",time:'2021.7.26'},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨",time:'2021.7.26'},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨",time:'2021.7.26'},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨",time:'2021.7.26'},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨",time:'2021.7.26'},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨",time:'2021.7.26'},
			]
		}
	}
	onChange(pageNumber) {
	  console.log('Page: ', pageNumber);
	}
	handleClick(e){
		const w=window.open('about:blank');
		w.location.href= '/detail' ;
	}
	render(){
		let state = this.state;
		return (
			<div className="listWrap">
				{
					state.listData.map((item,index)=>{
						return(
							<div className="listCont" onClick={this.handleClick.bind(this)}>
								<p className="contTitle ellipsis">{item.title}</p>
								<p className="contTime">{item.time}</p>
							</div>
						)
					})
				}
				<Pagination className="listPage" showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange.bind(this)} />
			</div>
		)
	}
}

export default ListCont