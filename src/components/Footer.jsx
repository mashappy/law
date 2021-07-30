import React from "react"

// 底部模块
class FooterCont extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			blogrollData:[
				{title:'中央纪委',url:'http://www.ccdi.gov.cn/'},
				{title:'中央组织部',url:'http://news.12371.cn/dzybmbdj/zzb/'},
				{title:'最高法院',url:'http://www.court.gov.cn/'},
				{title:'最高检察院',url:'http://www.spp.gov.cn/'},
				{title:'中央党校理论网',url:'http://www.cntheory.com/'},
				{title:'中国人权网',url:'http://www.humanrights-china.org/'},
				{title:'大河网',url:'http://www.dahe.cn/'},
				{title:'水利部网',url:'http://www.mwr.gov.cn/'},
				{title:'大公网',url:'http://www.takungpao.com/'},
				{title:'国家旅游局',url:'http://www.cnta.gov.cn/'},
				{title:'中国民主促进会',url:'http://www.mj.org.cn/'},
				{title:'国家信访局',url:'http://www.gjxfj.gov.cn/'},
				{title:'文汇网',url:'http://www.wenweipo.com/'},
				{title:'红色旅游网',url:'http://www.crt.com.cn/'},
				{title:'环境保护局',url:'http://nyhbj.ys.nyrcw.com/'},
				{title:'瞭望观察网',url:'http://www.lwgcw.com/'},
				{title:'中国评论新闻网',url:'http://www.crntt.com/'},
				{title:'中国政府',url:'http://www.gov.cn/'},
				{title:'中国互联网举报中心',url:'http://net.china.com.cn/'},
				{title:'中国新闻网',url:'http://www.chinanews.com/'},
				{title:'新华网',url:'http://www.xinhuanet.com/'},
				{title:'人民网',url:'http://www.people.com.cn/'},
				{title:'法制网',url:'http://www.legaldaily.com.cn/'},
				{title:'党建网',url:'http://www.dangjian.cn/'},
				{title:'半月谈',url:'http://www.banyuetan.org/'},
				{title:'京华网',url:'http://www.jinghua.cn/'},
				{title:'求是网',url:'http://www.qstheory.cn/'},
				{title:'央视网',url:'http://www.cntv.cn/'},
				{title:'光明网',url:'http://www.gmw.cn/'},
				{title:'红网',url:'http://www.rednet.cn/'},
				{title:'北方网',url:'http://www.enorth.com.cn/'},
				{title:'南方网',url:'http://www.southcn.com/'},
				{title:'记协网',url:'http://www.zgjx.cn/'},
				{title:'公安部网',url:'http://www.mps.gov.cn/n16/index.html?_v=1453802683740'},
				{title:'国土资源部',url:'http://www.mlr.gov.cn/'},
				{title:'司法部',url:'http://www.moj.gov.cn/'},
				{title:'国新办',url:'http://www.scio.gov.cn/'},
				{title:'国务院法制办',url:'http://www.chinalaw.gov.cn/'},
				{title:'全国人大',url:'http://www.npc.gov.cn/'},
				{title:'全国政协',url:'http://www.cppcc.gov.cn/'},
				{title:'正义网',url:'http://www.jcrb.com/'},
				{title:'腾讯网',url:'http://www.qq.com/'},
				{title:'凤凰网',url:'http://www.ifeng.com/'},
				{title:'新浪网',url:'http://www.sina.com.cn/'},
				{title:'中国青年网',url:'http://www.youth.cn/'},
				{title:'中国经济网',url:'http://www.ce.cn/'},
				{title:'中国台湾网',url:'http://www.taiwan.cn/'},
				{title:'中国法律援助网',url:'http://www.chinalegalaid.gov.cn/'},
				{title:'中国长安网',url:'http://www.chinapeace.gov.cn/'},
				{title:'中国法学会',url:'http://www.chinalaw.org.cn/'},
			]
		}
	}
	render(){
		let state = this.state;
		return(
			<div className="footerWrap">
				<div className="footerCont">
					<p className="footerTitle">网站友情链接</p>
					<div className="footerItem">
						{
							state.blogrollData.map((item,index)=>{
								return <a key={index} className="itemA" href={item.url} target="_blank"><span className="itemTitle">{item.title}</span></a>
							})
						}
					</div>
				</div>
				<div className="footerBottom">
					<div className="bottomnet">
						<a href="/contactUs" target="_blank" className="intranetItem curPointer">联系我们</a>
						<a href="/about" target="_blank" className="intranetItem curPointer">关于法制资讯聚焦网</a>
						<a href="#" className="intranetItem curPointer">合作加盟</a>
						<a href="#" className="intranetItem curPointer">供稿服务</a>
						<a href="#" className="intranetItem curPointer">网站招聘</a>
						<a href="/lawyer" target="_blank" className="intranetItem curPointer">网站律师</a>
					</div>
					<div className="bottomnet">
						<span className="intranetItem">违法和不良信息举报电话&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;010--64630988</span>
						<span className="intranetItem">京ICP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备13027861号</span>
						<span className="intranetItem">京公网安备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;110105023901</span>
						<span className="intranetItem">法制资讯聚焦网版权所有，末经书面授权禁止使用</span>
					</div>
				</div>
			</div>
		)
	}
}


export default FooterCont