// LIB
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

// COMPONENTS
import { colorDark, colorOffDark } from './_theme'
import { CtaButton, socialIcons } from './_common'


const StyledFooter = styled.footer`
    margin: 2em;    
    margin-bottom: 4.5em;
    border-radius: .1em;
    padding: 1em 2em;
    border: 2px solid ${colorDark};
`

const FooterColumnsContainer = styled.div`
    display: grid;
    grid-template-areas: "a b c";
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1em;

    div:nth-child(1){
        grid-area: a;
    }
    div:nth-child(2){
        grid-area: b;
    }
    div:nth-child(3){
        grid-area: c;
    }

    ul{
        list-style:  none;
        padding:  0;
        margin: 0;

        a{
            color: ${colorDark};
            text-decoration: none;
        }

        li{
            cursor: pointer;
            margin: 1em 0;

            icon {
                margin-right: 1em;
            }

            &:hover{
                font-weight: bold;
                text-decoration: underline;
            }
        }
    }
    @media all and (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "a b"
                             "c c";
    }
    @media all and (max-width: 415px) {
        li{text-align: center;}
        li i{ display: block;}
    }
`

const SignupCta = styled.div`
    text-align: center;    
    display: flex;
    flex-direction: column;

    p {
        margin: 2em 0 1em 0;;
        font-size: 0.8em;
        color: darken(${colorOffDark}, 10);
    }

    button{
        padding: 1em 2em;
        margin: 1em;
        font-size: 1em;
    }

    button.cta{
        font-size: 0.9em;
    } 
`

const SocialMediaIcons = styled.div`
    text-align: right;
    margin-top: 2em;
    a{
        margin-left: 1em;
    }
    img{
        height: 1.3em;
    }
`


class Footer extends React.Component {


    get firstColumnLinks(){
        const links = [
            {label:'Home', icon:'home', link:'/'},
            {label:'About', icon:'business', link:'/about'}
        ];

        return links.map((x,i) => (
            <Link key={`col1_${i}`} href={x.link}>
                <a>
                    <li>
                        <i className="material-icons">{x.icon}</i>&nbsp;
                        {x.label}
                    </li>
                </a>
            </Link>
        ))
    }

    get secondColumnLinks(){
        const links = [
            {label:'Admin',icon:'category', link:'/admin'},
        ];

        return links.map((x,i) => (
            <Link key={`col2_${i}`} href={x.link} >
                <a>
                    <li>
                        <i className="material-icons">{x.icon}</i>&nbsp;
                        {x.label}
                    </li>
                </a>
            </Link>
        ))
    }

    get socialIcons() {
        
        return socialIcons.map((x,i) => (
            <a key={`social_${i}`}  href={x.href} target="_blank">
                <img title={x.title} alt={x.alt} src={x.imgSrc} />
            </a>
        ))
    }

    render(){
        return (
            <StyledFooter>
                <FooterColumnsContainer>
                    <div>
                        <ul>
                            {this.firstColumnLinks}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            {this.secondColumnLinks}
                        </ul>
                    </div>
                    <SignupCta>
                        <p>
                            You can request an evaluation and schedule a call with one of our account managers. 
                            You'll sell your house <em>fast</em>. Sign up now for free!
                        </p>
                        <div className="cta-container">
                            <Link href={''}>
                                <a><CtaButton>Call To Action</CtaButton></a>
                            </Link>
                        </div>
                    </SignupCta>
                </FooterColumnsContainer>
                <SocialMediaIcons>
                    {this.socialIcons}
                </SocialMediaIcons>
            </StyledFooter>
        )
    }
}
  
  export default Footer