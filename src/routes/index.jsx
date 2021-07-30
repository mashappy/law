import React, { useEffect, useRef, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, useLocation } from 'react-router-dom'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import styled from 'styled-components'

const Home = lazy(() => import('../view/Home/index.jsx')) // 首页
const List = lazy(() => import('../view/List/index.jsx')) // 列表页
const Detail = lazy(() => import('../view/Detail/index.jsx')) // 详情页
const ContactUs = lazy(() => import('../view/FooterAbout/ContactUs/index.jsx')) // 联系我们
const About = lazy(() => import('../view/FooterAbout/About/index.jsx')) // 关于我们
const Lawyer = lazy(() => import('../view/FooterAbout/Lawyer/index.jsx')) // 网站律师
const Containers: CustomRouter.Route[] = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    comp: Home,
  },
  {
    name: 'List',
    path: '/list',
    exact: true,
    comp: List,
  },
  {
    name: 'Detail',
    path: '/detail',
    exact: true,
    comp: Detail,
  },
  {
    name: 'ContactUs',
    path: '/contactUs',
    exact: true,
    comp: ContactUs,
  },
  {
    name: 'About',
    path: '/about',
    exact: true,
    comp: About,
  },
  {
    name: 'Lawyer',
    path: '/lawyer',
    exact: true,
    comp: Lawyer,
  },
]

const WrapDiv = styled.div`
  background:#fff;
`


export default () => {
  return (
    <Router >
      <Route
        render={(props: any) => (
			<WrapDiv>
				<Header />
				<Suspense fallback={<span />}>
				  <Switch location={props.location}>
					{Containers.map(container => (
					  <Route exact
						{...container}
						key={container.name}
						path={container.path} component={container.comp}
					  />
					))}
					<Redirect from="*" to="/404" />
				  </Switch>
				  <Footer />
				</Suspense>
			</WrapDiv>
        )}
      />
    </Router>
  )
}