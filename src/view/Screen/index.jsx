import React from 'react'
import './index.scss'
// import { Divider } from 'antd';

class ScreenCont extends React.Component{
	
	render(){
		return (
			<div className="screenWrap">
				<div className="screenImg"><img className="Img" src={require('./../../accests/imgs/law.jpg').default} alt="工作人员" /></div>
				<div className="screenCont">
					<p className="contText">工作人员姓名:<span className="contSpan">郑允浩</span></p>
					<p className="contText">职务:<span className="contSpan">高级调研员</span></p>
					<p className="contTitle">律师简介</p>
					<p className="contIntro">
					章朝晖律师是财政部、司法部遴选首批“涉外律师领军人才”，以及全国律师协会“一带一路人才库”涉外律师人才，获得国家财政专项资助赴德国汉堡大学、英国BPP大学培训。</p>
					<p className="contIntro">章朝晖律师是财政部、司法部遴选首批“涉外律师领军人才”，以及全国律师协会“一带一路人才库”涉外律师人才，获得国家财政专项资助赴德国汉堡大学、英国BPP大学培训。章朝晖律师在英国爱丁堡大学取得商法硕士学位,并曾在国际著名的高伟绅律师事务所法兰克福分所、美国密歇根州博隆律师事务所实习，能够用流利英语处理涉外法律事务并与外商谈判。</p>
				</div>
			</div>
		)
	}
}

export default ScreenCont