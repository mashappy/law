import React from 'react'
import './index.scss'
import { Breadcrumb } from 'antd';

class Breadcont extends React.Component{
	render(){
		return (
			<Breadcrumb className="contBread">
			    <Breadcrumb.Item>
					<a href="">首页</a>
				</Breadcrumb.Item>
			    <Breadcrumb.Item>
			      <a href="/list">综合资讯</a>
			    </Breadcrumb.Item>
			    <Breadcrumb.Item>
			      资讯详情
			    </Breadcrumb.Item>
			</Breadcrumb>
		)
	}
}

class Cont extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	render(){
		return(
			<div>
				<h1 className="contTitle">这在党和国家历史上是第一次 ——记习近平作为中共中央总书记、国家主席、中央军委主席到西藏庆祝西藏和平解放七十周年并进行考察调研</h1>
				<div className="contSub">
					<span className="subItem">浏览:10次</span>
					<span className="subItem">来源:人民网-人民日报</span>
					<span className="subItem">发布时间:2021-7-25</span>
				</div>
				<div className="contDetail">
					<p className="detailText">时隔十年之后，恰逢同一天，7月21日。习近平总书记来到西藏，走进林芝。</p>
					<p className="detailText">2011年7月，习近平作为中共中央政治局常委、国家副主席、中央军委副主席率中央代表团，出席西藏和平解放60周年庆祝活动。那一次，自拉萨赴林芝再到日喀则，山高路远，一路走来感慨万千。</p>
					<p className="detailText">西藏和平解放70周年之际，庆祝中国共产党成立100周年大会召开后不久，总书记再赴这里。</p>
					<p className="detailText">此行，习近平总书记尽可能地多看一些地方，多接触一些当地干部群众。从林芝到拉萨，此起彼伏的“扎西德勒”，载歌载舞的各族群众，哈达、热巴鼓、切玛、青稞酒，幸福的日子宛如绽放的格桑花。</p>
					<p className="detailText">这是一份活动丰富的考察日程。</p>
					<p className="detailText">21日，林芝。尼洋河大桥，林芝市城市规划馆，巴宜区林芝镇嘎拉村，工布公园；</p>
					<p className="detailText">22日，自林芝赴拉萨。听取川藏铁路建设情况汇报，考察川藏铁路拉林段建设运营情况，哲蚌寺，八廓街，布达拉宫广场，西藏人民会堂，观看民族文艺演出；</p>
					<p className="detailText">23日，拉萨。会见接见西藏有关方面代表并合影，出席西藏自治区党委和政府工作汇报会并作重要讲话。</p>
					<p className="detailText">这些年，习近平总书记牵挂着这里，惦念着这里的乡亲们。一路上，触景生情。“目睹了雪域高原美丽壮观的风采，生机勃勃的新气象，感到高兴！”</p>
					<p className="detailText">“西藏和平解放70年来，在党中央坚强领导下，在全国人民大力支持下，西藏各族干部群众艰苦奋斗、顽强拼搏，社会制度实现历史性跨越，经济社会实现全面发展，人民生活极大改善，城乡面貌今非昔比。”习近平总书记的话掷地有声。实践证明，没有中国共产党就没有新中国，也就没有新西藏，党中央关于西藏工作的方针政策是完全正确的。</p>
					<p className="detailText">作为中共中央总书记、国家主席、中央军委主席到西藏庆祝西藏和平解放，这在党和国家历史上是第一次，习近平总书记强调：“就是要表达党中央对西藏工作的支持，对西藏各族干部群众的关怀。”</p>
					<p className="detailText">“我代表党中央，向奋斗在雪域高原的西藏各族干部群众表示热烈祝贺和诚挚慰问！”</p>
					<p className="detailText">观西藏之变，从路开始。</p>
					<p className="detailText">世界屋脊，千年冰雪、崇山峻岭。地质条件复杂，加上高寒缺氧，这块西南边陲在漫长的岁月里被形容是“只有藏地雄鹰才能飞过的地方”。</p>
					<p className="detailText">解放前，放眼西藏竟没有一条能走汽车的路。当10多万筑路军民苦苦鏖战，终于在1954年将川藏、青藏公路修到拉萨时，这一刻，结束了西藏没有公路的历史。多少人魂牵梦绕，热泪盈眶！</p>
					<p className="detailText">路，于西藏而言，是奇迹，是改变，是希望。</p>
					<p className="detailText">2006年，青藏铁路全线通车，西藏终于通了铁路。第二条进藏“天路”，就是习近平总书记一直在关心的川藏铁路。在北京时，他为这件事主持中央政治局常委会会议研究部署、多次对推进工作作出重要指示。</p>
					<p className="detailText">22日一早，习近平总书记来到川藏铁路的重要枢纽站——林芝火车站。</p>
					<p className="detailText">站台上，两块展板，如拼图拼成一条蜿蜒铁轨。跨高山峡谷、过大江大河，川藏铁路这两段线路有着世所罕见的难度。</p>
					<p className="detailText">一条是拉萨至林芝段。这是西藏首条电气化铁路，上个月开通运营后，将两个城市见面的时间缩减到3个多小时。</p>
					<p className="detailText">还记得1998年6月，时任福建省委副书记的习近平第一次入藏，为的是接回福建第一批援藏干部、送来第二批。拉萨贡嘎机场到林芝八一镇，他乘车走了整整一天。抚今追昔，感慨系之：“当时的路况非常险，还好没有遇到滑坡，窄的地方横着两根木头，我们下来搬。福建派去援藏的，到墨脱那都是骑着马进去的。”</p>
					<p className="detailText">另一块展板，雅安到林芝段，更是千难万险。习近平总书记驻足在几块不同“年龄”的花岗岩前，拿起一块标注着“约10亿年”的，细细端详：“这是我们难以遥望的时间概念。”</p>
					<p>“最难的是遇到哪种岩石？”</p>
					<p className="detailText">“泥岩。施工怕软不怕硬。但现在机械化程度今非昔比，都是我们自己的技术。”</p>
					<p className="detailText">“发挥科技创新的关键作用。”总书记肯定他们说，“你们规划很科学，全路段在推进，看了很振奋。”“‘两路’精神要继续弘扬，敢打敢拼，一段一段拿下来。要做就做好。”</p>
					<p className="detailText">登上火车，透过车窗向外眺望。江水一路欢腾，穿峡谷、过隧道、跨大桥，时而是绝壁万丈，时而是葱郁丛林，时而是鳞次栉比的楼房，时而是轰鸣工地。这条路的艰辛不易，这条路带来的生机活力，恰如习近平总书记所说，建设川藏铁路“对推动西部地区特别是川藏两省区经济社会发展，具有十分重要的意义”。</p>
					<p className="detailText">火车上，总书记召集相关同志，继续深入研究铁路规划问题。</p>
					<p className="detailText">由川藏线放眼广袤西部边疆铁路网建设，习近平总书记语重心长：</p>
					<p className="detailText">“全国的交通地图就像一幅画啊，中国的中部、东部、东北地区都是工笔画，西部留白太大了，将来也要补几笔，把美丽中国的交通勾画得更美。要充分论证、科学规划，铁路建设要算大账。”</p>
					<p className="detailText">1952年1月，习仲勋同志在关于送班禅入藏和民族问题的几点报告中，对党中央治藏方针提出了几点建议。毛泽东同志对这份建议予以采纳，随后付诸实践。</p>
					<p className="detailReporter">（本报记者杜尚泽、申琳，新华社记者张晓松、朱基钗）</p>
					<p className="detailSource">《 人民日报 》（ 2021年07月25日 01 版）</p>
				</div>
				
				<div className="detailOther">
					<p className="otherItem"><span className="itemTitle">上一篇:</span>中共中央国务院关于新时代推动中部地区高质量发展的意见 </p>
					<p className="otherItem"><span className="itemTitle">下一篇:</span>习近平在西藏考察时强调 全面贯彻新时代党的治藏方略 谱写雪域高原长治久安和高质量发展新篇章</p>
				</div>
			</div>
		)
	}
}
class DetailCont extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	
	render(){
		return (
			<div className="detailCont">
				<Breadcont />
				<Cont />
			</div>
		)
	}
}

export default DetailCont