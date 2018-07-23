// LIB
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import styled, { css } from 'styled-components'

// COMPONENTS
import { Loader } from './_common'
import { colorPrimary, gradientPrimary, transition, shadowM, colorOffLight, logos, shadowL, colorDark, colorLight } from './_theme'


const MainHeaderContainer = styled.div`
	background: ${gradientPrimary};
	height: 80px;
	transition: ${transition};
	img{ cursor:pointer; height:100%;}
	div.menu-icon-container{
			cursor: pointer;
			display: flex;
			align-items: center;
			i{
                color: white;
                font-size: 1.8em;
                margin-left: 0.5em;
			}
			@media all and (min-width: 895px) {
				display: none;
			}
	}
	@media all and (max-width: 895px) {
		width: 100vw;
		height: 60px;
		display: flex;
		position: fixed;
		box-shadow: ${shadowL};
		justify-content: space-between;
		div, a.logo-container, nav{
            width: 33%;
		}
		a.logo-container{ text-align: center; }
	}
`

const HeaderNav = styled.nav`
    display: flex;
    padding: 0 .5em;
    text-align: right;
    justify-content: flex-end;
    a{
        margin: 0.8em;
        font-size: 1.3em;
        align-self: center;
        text-decoration: none;
        transition: ${transition};
    }
    a:hover{
        font-weight: normal;
        text-decoration: underline;
    }
    ${props => props.top && css`
        height: 100%;
        float: right;
        a.link{color: white;}
        @media all and (max-width: 895px) {
            a.link{display:none;}
        }
        @media all and (max-width: 500px) {
            font-size: 0.7em;
            img{ width: 100%; }
            a{  font-size: 1em; }
        }
    `} 
    ${props => props.bottom && css`
        width: calc(100% - 1em);
        display: flex;
        flex-wrap: wrap;
        min-height: 55px;
        box-shadow: ${ shadowL };
        justify-content: center;
        background-color: rgb(238, 238, 238);
        a{color: ${ colorDark }; }
        @media all and (max-width: 895px) { display: none; }
    `} 

    ${props => props.side && css`
        top:0;
        left:-500px;
        width: 310px;
        z-index: 9999;
        height: 100vh;
        display: flex;
        position: fixed;
        overflow-y: scroll;
        box-shadow: ${shadowM};
        flex-direction: column;
        transition: ${transition};
		transition-duration: 0.8s;
        justify-content: flex-start;
        background: ${ gradientPrimary };
		opacity : 0.98;
        a, i{ color: ${colorLight}; }
        i { 
			cursor : pointer;
            margin-left: 0.3em;
            margin-top: 0.6em; 
        }
        div{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
    `} 

    ${props => props.open && css`
        left:0;
    `} 
`

const HeaderCTA = styled.a`
    margin : 0;
    padding : .4em .8em;
    border-radius: 0.1em;
    color: ${colorPrimary};
    background-color: white;
`


export default class Header extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			isLoadingPage : false,
			menuOpen : false
		};
		
		this.setupRouterTx();
	}

	setupRouterTx = () => {
		Router.onRouteChangeStart = (url) => this.setPageLoading(true)
		Router.onRouteChangeComplete = () => this.setPageLoading(false)
		Router.onRouteChangeError = () => this.setPageLoading(false)
	}

	setPageLoading = (value) => {
		let state = this.state;
		state.isLoadingPage = value;
		this.setState(state)
	}

	toggleMenu = () => {
		let state = this.state;
		state.menuOpen = !state.menuOpen;
		this.setState(state)
	}

	get navLinks(){
		const links = [
			{label:'Home', href:'/'},
			{label:'About', href:'/about'}
		]
		return links.map( (x,i) => (<Link key={`n_${i}`} href={x.href}><a className="link">{x.label}</a></Link>) );
	}

	get actionLinks(){
		const links = [
			{label:'Home', href:'/'},
			{label:'About', href:'/about'}
		]
		return links.map( (x,i) => (<Link key={`a_${i}`} href={x.href}><a>{x.label}</a></Link>) );
	}

	get allLinks(){
		return [...this.navLinks, ...this.actionLinks];
	}

	render() {
		return (
			<header>
				<Loader hidden={!this.state.isLoadingPage} style={ {position : 'absolute'} }/>

				{/* MAIN HEADER  */}
				<MainHeaderContainer>
					<div className="menu-icon-container" onClick={this.toggleMenu}>
						<i className="material-icons">menu</i>
					</div>
					<Link href="/">
						<img alt="Purple Facts logo" src={logos.svg} />
					</Link>
					<HeaderNav top>
						{this.navLinks}

						{/* ADD MAIN CALL TO ACTION HERE */}
						{/*
						<Link href="/signup">
                            <HeaderCTA>
                                Sign up <i className="material-icons">thumb_up_alt</i>
                            </HeaderCTA>
						</Link> */}

					</HeaderNav>
				</MainHeaderContainer>

				{/* BOTTOM NAV */}
				<HeaderNav bottom>
					{this.actionLinks}
				</HeaderNav>

				{/* SIDE NAV */}
				<HeaderNav side open={this.state.menuOpen} >
					<i className="material-icons" onClick={this.toggleMenu}>close</i>
					<div> {this.allLinks} </div>
				</HeaderNav>
			</header>
		)
	}

}


