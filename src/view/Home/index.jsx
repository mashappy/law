import React from 'react'
import './index.scss'
import { Carousel,Card,Col,Row,Input,Button  } from 'antd';

class NewsCont extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			newsData:[
				{
				  id:'0',
				  title:'我是广告一号',
				},
				{
				  id:'2',
				  title:'我是广告二号',
				},
				{
				  id:'3',
				  title:'我是广告三号',
				},
				{
				  id:'4',
				  title:'我是广告四号',
				},
				{
				  id:'5',
				  title:'我是广告五号',
				},
				{
				  id:'6',
				  title:'我是广告六号',
				}
			]
		}
	}
	render(){
		let state = this.state;
		return (
			<div className="newsWrap">
				<img className="newsIcon" src={require('./../../accests/imgs/message.png').default} alt="新闻" />
				<div className="carouselWrap">
					
					<Carousel vertical={true} autoplay className="newsCarouselWrap">
							{
								state.newsData.map((item,index)=>{
									return (
										<p className="newsTitle" key={index}>{item.title}</p>
									)
								})
							}
					</Carousel>
				</div>
			</div>
		)
	}
}

class ListCont extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			title:props.title
		}
	}
	handleClick(e){
		const w=window.open('about:blank');
		w.location.href= '/detail' ;
	}
	render(){
		let state = this.state;
		return (
			<p className="moduleTitle ellipsis" onClick={this.handleClick.bind(this)}>{state.title}</p>
		)
	}
}

class ModuleContOne extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			swiperData:[1,2,3,4,5],
			 tabListNoTitle:[
			  {
			    key: '0',
			    tab: '综合资讯',
			  },
			  {
			    key: '1',
			    tab: '法治在线',
			  },
			  {
			    key: '2',
			    tab: '时事评述',
			  },
			  {
			    key: '3',
			    tab: '群众来信',
			  },
			],
			key: 'tab1',
			noTitleKey: '0',
			tableListCont:[
				[{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"}],
				[{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"}],
				[{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"}],
				[{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"}],
			],
			cardSmallData:[{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"}],
			cardMoreStyle:{'fontSize':'12px',"color":"#888"},
			cardList:['专题报道','舆论监督','法律援助']
		}
	}
	
	  onTabChange = (key, type) => {
		console.log(key, type);
		this.setState({ [type]: key });
	  };
	
	render(){
		let state = this.state;
		return (
			<div className="contModuleOne">
				<div className="moduleCont">
					<Carousel autoplay className="swiperWrap" dots={false}>
						{
							state.swiperData.map((item,index)=>{
								return (
									<div className="swiper" key={index}>
									  <p className="swiperText ellipsis">我是文字</p>
									</div>
								)
							})
						}
					</Carousel>
					<Card className="moduleCard" bordered={false}
					  tabList={state.tabListNoTitle}
					  activeTabKey={state.noTitleKey}
					  tabBarExtraContent={<a style={state.cardMoreStyle} href="/list" target="_blank">更多></a>}
					  onTabChange={key => {
						this.onTabChange(key, 'noTitleKey');
					  }}
					>
					  {
						  state.tableListCont[state.noTitleKey].map((item,index)=>{
							return  <ListCont key={index} title={item.title} />
						  })
					  }
					</Card>
				</div>
				
				<div className="moduleBottom">
					{
						state.cardList.map((items,indexs)=>{
							return (
								<Card key={indexs} title={items} extra={<a style={state.cardMoreStyle} href="/list" target="_blank">更多></a>} style={{ width: 380 }} bordered={false}>
								  {
									state.cardSmallData.map((item,index)=>{
										return (
											index==0? (
												<div className="cardCont" key={index} >
													<img className="cardImg" src={require('./../../accests/imgs/card.jpg').default} alt={item.title} />
													<div className="cardContText">
														<p className="cardContTitle ellipsis2">{item.title}</p>
														<p className="cardContSub">原标题：4.5万余名高考生今日开考本万余名高考本万余名本万余名高</p>
													</div>
												</div>
											): (<ListCont key={index} title={item.title} />)
										)
									  })
								  }
								</Card>
							)
						})
					}
				</div>
			</div>
		)
	}
}

class ModuleContTwo extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			listNav:['反腐倡廉','政策法规','司法动态','社会聚焦'],
			
			cardData:[
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"}
			],
		}
	}
	handleClick(e){
		const w=window.open('about:blank');
		w.location.href= '/detail' ;
	}
	render(){
		let state = this.state;
		return(
			<div className="moduleContTwo">
				 <Row gutter={16}>
					{
						state.listNav.map((item,index)=>{
							return (
								<Col span={12} key={index} className="moduleItem">
									<Card title={item}>
									  <img className="moduleContBanner" src={require('./../../accests/imgs/card.jpg').default} alt="banner" />
									  {
										  state.cardData.map((items,indexs)=>{
											  return (
												<p key={indexs} className="moduleTwoTitle ellipsis" onClick={this.handleClick.bind(this)}>{items.title}</p>
											  )
										  })
									  }
									  <a className="btnWrap" href="/list" target="_blank"><Button className="moduleBtn">查看更多</Button></a>
									  
									</Card>
								</Col>
							)
						})
					}
				</Row>
			</div>
		)
	}
}

class ModuleContThree extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			listNav:['生态环保','法制调查'],
			cardData:[
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
			],
			cardDataTwo:[
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨"},
			],
			cardMoreStyle:{'fontSize':'12px',"color":"#888"},
		}
	}
	handleClick(e){
		const w=window.open('about:blank');
		w.location.href= '/detail' ;
	}
	render(){
		let state = this.state;
		return (
			<div className="moduleThree">
				<div className="moduleLeft">
					{
						state.listNav.map((item,index)=>{
							return (
								<Card title={item} key={index} style={{ width: 400 }} bordered={false} extra={<a style={state.cardMoreStyle}  href="/list" target="_blank">更多></a>}>
								  {
									  state.cardData.map((items,indexs)=>{
										  return (
											<ListCont key={indexs} title={items.title} />
										  )
									  })
								  }
								</Card>
							)
						})
					}
				</div>
				<div className="moduleRight">
					<Card title='人物访谈' style={{ width: 778 }} bordered={false} extra={<a style={state.cardMoreStyle} href="/list" target="_blank">更多></a>}>
					<div className="rightTopCont">
						<img className="contImg" src={require('./../../accests/imgs/card.jpg').default} alt='新闻' />
						<div className="topCont">
							<p className="topContTitle ellipsis2">工业遗产在转型中展现新活力工业遗产在转型中展现新活力工业遗产产在转型中展现新力</p>
							<p className="topContSub ellipsis2">我国经济稳定恢复，为全年经济稳中加固、稳中向好奠定了坚实基础。我国经济稳定恢复，为全年经济稳中加固、稳中向好奠定了坚实基础。我国经济稳定恢复，为全年经济稳中加固、稳中向好奠定了坚实基础。我国经济稳定恢复，为全年经济稳中加固、稳中向好奠定了坚实基础。我国经济稳定恢复，为全年经济稳中加稳中向好奠定了坚实基础。我国经济稳定恢复，为全年经济固、稳为全年经为全年经为全年经为全年经为全年经为全年经中向好济稳中加固、稳中向好奠定了坚实基础</p>
						</div>
					</div>
					<div className="contItem">
					  {
						  state.cardDataTwo.map((items,indexs)=>{
							  return (
								<p onClick={this.handleClick.bind(this)} className="itemTitle moduleTitle ellipsis" key={indexs} >{items.title}</p>
							  )
						  })
					  }
					</div>
					</Card>
				</div>
			</div>
		)
	}
	
}

class ModuleContFour extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			 tabListNoTitle:[
			  {
			    key: '0',
			    tab: '关注民生',
			  },
			  {
			    key: '1',
			    tab: '律师',
			  },
			  {
			    key: '2',
			    tab: '曝光台',
			  },
			  {
			    key: '3',
			    tab: '文化娱乐',
			  },
			  {
			    key: '4',
			    tab: '名人诗书',
			  },
			],
			noTitleKey:'0',
			cardMoreStyle:{'fontSize':'12px',"color":"#888"},
			tableListCont:[
				[{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"}],
				[{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"}],
				[{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"}],
				[{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"},
				{title:"确保实现旱涝保收、高产稳产 高标准农田建设快农田建速推"}],
				[{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"},
				{title:"上海海关全力打好“洋垃圾”狙击战清理退运非法进境固废243批次1万余吨狙击战清理退运非法进境固废243批次1万余吨"}],
			],
		}
	}
	onTabChange = (key, type) => {
		console.log(key, type);
		this.setState({ [type]: key });
	};
	handleClick(e){
		const w=window.open('about:blank');
		w.location.href= '/detail' ;
	}
	render(){
		let state = this.state;
		return (
			<div className="moduleFour">
				<Card className="moduleFourCard" bordered={false}
				  tabList={state.tabListNoTitle}
				  activeTabKey={state.noTitleKey}
				  tabBarExtraContent={<a style={state.cardMoreStyle} href="/list" target="_blank">更多></a>}
				  onTabChange={key => {
					this.onTabChange(key, 'noTitleKey');
				  }}
				>
					<div className="moduleItem">
					  {
						  state.tableListCont[state.noTitleKey].map((item,index)=>{
							return  <p className="itemTitle moduleTitle ellipsis" key={index} onClick={this.handleClick.bind(this)}>{item.title}</p>
						  })
					  }
					</div>
				</Card>
			</div>
		)
	}
}

class ScreenCont extends React.Component{
	constructor(props){
		super(props)
		
	}
	screenHalder(e){
		const w=window.open('about:blank');
		w.location.href= '/screen' ;
	}
	render(){
		return (
			<div className="screenWrap">
				<p className="screenTitle">工作人员查询</p>
				<div className="screenItem">
					<span className="screenItemTitle">姓名</span>
					<Input className="screenItemIpt" placeholder="请输入查询姓名" />
				</div>
				<div className="screenItem">
					<span className="screenItemTitle">编号</span>
					<Input className="screenItemIpt" placeholder="请输入查询编号" />
				</div>
				<Button className="screenBtn" type="primary" shape="round" onClick={this.screenHalder.bind(this)}>搜索</Button>
			</div>
		)
	}
}

class HomeCont extends React.Component{
	constructor(props){
		super(props)
	}
	// <NewsCont />
	render(){
		return (
			<div className="contWrap">
				<div className="bannerWrap"><img className="contBanner" src={require('./../../accests/imgs/banner.png').default} alt="法制资讯聚焦" /></div>
				<div className="contModuleWrap">
				
					<ModuleContOne />
					<img className="contAd" src={require('./../../accests/imgs/ad.jpg').default} alt="广告" />
					<ModuleContTwo />
					<img className="contAd" src={require('./../../accests/imgs/ad.jpg').default} alt="广告" />
					<ModuleContThree />
					<img className="contAd" src={require('./../../accests/imgs/ad.jpg').default} alt="广告" />
					<ModuleContFour />
					<ScreenCont />
				</div>
			</div>
		)
	}
}

export default HomeCont