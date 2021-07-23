import React, { useEffect, useRef, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, useLocation } from 'react-router-dom'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import styled from 'styled-components'

const Home = lazy(() => import('../view/Home/index.jsx'))
const List = lazy(() => import('../view/List/index.jsx'))
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