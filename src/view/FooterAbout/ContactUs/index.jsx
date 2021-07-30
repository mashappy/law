// 联系我们
import React from 'react'
import './../index.scss'

class ContactCont extends React.Component{
	render(){
		return (
			<div className="ContactWrap">
				<h1 className="contactTitle">联系我们</h1>
				<div className="contactCont">
					<span className ="contItem">北京市朝阳区&nbsp;&nbsp;&nbsp;左家庄15号院1号楼</span>
					<span className ="contItem">联系电话：&nbsp;&nbsp;&nbsp;010-64630988</span>
					<span className ="contItem">15210008338</span>
					<span className ="contItem">邮箱：fzzxjj2013@163.com
</span>
				</div>
			</div>
		)
	}
}


export default ContactCont