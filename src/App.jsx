import React from "react";
import './App.css';
import './accests/css/common.scss';

import styled from 'styled-components'
import Routers from './routes'


const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;overflow-x:hidden;
`

const App = (() => {
  return (
	<AppDiv>
		<Routers />
	</AppDiv>
  )
})

export default App;
