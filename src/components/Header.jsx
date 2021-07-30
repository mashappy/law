import React from 'react'
// import { Input,Button } from 'antd';
// import store from './../store/index'

class HeaderCont extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			navList:[
				{title:'网站首页',url:'/'},
				{title:'综合资讯',url:'/List'},
				{title:'法治在线',url:'/List'},
				{title:'政策法规',url:'/List'},
				{title:'人物访谈',url:'/List'},
				{title:'时事评述',url:'/List'},
				{title:'舆论监督',url:'/List'},
				{title:'法律援助',url:'/List'},
				{title:'专题报道',url:'/List'},
				{title:'关注民生',url:'/List'},
				{title:'反腐倡廉',url:'/List'},
			]
		}
	}
	render(){
		let state = this.state;
		return (
			<div className="headWrap">
				<div className="headLogo">
					<div className="logoLeft">
						<img className="leftIcon" src={require('./../accests/imgs/logo.png').default} alt="法制资讯聚焦" />
						<span className="leftText">法制资讯聚焦</span>
					</div>
					<div className="logoRight">
						<span className="rightDate">2021年07月19日</span>
						<span className="rightText">星期一</span>
					</div>
				</div>
				<div className="headerNav">
					<div className="navCont">
						{
							state.navList.map((item,index)=>{
								return <a href={item.url} target={item.url=='/'?'':"_blank"} className="contItem" key={index}>{item.title}</a>
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

export default HeaderCont