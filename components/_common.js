import styled, { css, keyframes } from 'styled-components'
import { 
    colorPrimary, 
    colorLight, 
    colorOffLight, 
    colorDark, 
    shadowM,
    shadowL,
    transition,
    gradientPrimary,
    logos,
    colorError,
    colorConfirm
} from './_theme'


const loadingKeyframes = keyframes`
    from {left: -200px; width: 20%;}
    30% {width: 25%;}
    50% {width: 30%;}
    70% {width: 70%;}
    80% { left: 50%;}
    95% {left: 120%;}
    to {left: 100%;}
`

export const Loader = styled.div`
    height: 3px;
    width: 100%;
    overflow: hidden;
    position: relative;
    z-index: 998;
    background-color: rgba(255,255,255,0.3);
    &:before{
        display: block;
        position: absolute;
        content: "";
        left: -200px;
        width: 200px;
        height: 4px;
        background-color: ${colorLight};
        animation: ${loadingKeyframes} 2s linear infinite;
    }
    ${props => props.hidden && css`
        display: none;
    `} 
    ${props => props.purple && css`
        background-color: rgba(0,0,0,0.4);
        &:before{background-color: ${colorPrimary} }
    `} 
`

export const PageContainer = styled.div`
    padding: 1em 2em;
`

export const CtaButton = styled.button`
    border: none;
    color: ${colorLight}; 
    border-radius: 0.15em;
    font-family: $regular-font;
    background-color: ${colorPrimary};   
    &:hover{
        background-color: ${colorOffLight};  
        color: ${colorPrimary}; 
        font-weight: bold;
    }
    &:active{
        background-color: ${colorLight};  
        color: lighten(${colorPrimary},10); 
    }
    ${props => props.uppercase && css`
        text-transform: uppercase;
    `} 
`

export const ActionCard = styled.div`
    padding: 1em;
    display: flex;
    cursor: pointer;
    text-align: center;
    text-decoration: none !important;
    color: ${colorDark}; 
    border-radius: 0.2em;
    text-decoration: none;
    flex-direction: column;
    transition: ${transition};
    justify-content: center;
    background-color: ${colorLight};
    &:hover{ box-shadow: ${shadowM}; }
    &:active{ box-shadow: ${shadowL}; }
`

export const TextImgGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em; 
`

export const TextImgRow = styled.div`
    margin: 1.5em 0 1.5em 0;
    display: grid;
    grid-template-areas: "txt img";
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr;
    ${props => props.flip && css`
        grid-template-areas: "img txt";
        grid-template-columns: 2fr 3fr;
    `}

    height: 100%;

    & > div:nth-child(1) { 
        grid-area: txt; 
        h2{text-align: center;} 
    }
    & > div:nth-child(2) { 
        grid-area: img; 
        display: flex;
        align-content: center;
        justify-content: center;
        text-align: -webkit-center;
        flex-direction: column;
        justify-content: center;
        
    }

    @media all and (max-width: 895px) {
        grid-template-areas: "img" "txt";
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        ${props => props.flip && css`
            grid-template-areas: "img" "txt";
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
        `}
    }
`

const LogoBannerStyled = styled.div`
    background: ${gradientPrimary};
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img{height: 150px;}
    h1{color: ${colorLight}; text-align: center;}
`

export const LogoBanner = (props) => (
    <LogoBannerStyled>
        <img title="" alt="" src={logos.svg} />
        <h1>
            {props.text || <div>There's no place like <i>127.0.0.1</i></div> }
        </h1>
    </LogoBannerStyled>
)

export const socialIcons = [
    {title : 'Email icon', alt : 'Send us an email', imgSrc : '/static/social/email.svg', href : 'mailto:igordepaula1@gmail.com'},
    {title : 'Whatsapp icon', alt : 'Message us on Whatsapp', imgSrc : '/static/social/whatsapp.svg', href : 'https://api.whatsapp.com/send?phone=PHONE'},
    {title : 'Facebook icon', alt : 'Follow us on Facebook', imgSrc : '/static/social/fb.svg', href : 'https://fb.me/PAGE'},
    {title : 'Messenger icon', alt : 'Message us on Facebook Messenger', imgSrc : '/static/social/messenger.svg', href : 'https://m.me/PAGE'},
    {title : 'Google+ icon', alt : 'Be on our circle on G+', imgSrc : '/static/social/g+.svg', href : 'https://plus.google.com/about'}
]

export const Center = styled.div`
    text-align: center;
`

export const OptionCard = styled.button`
    transition: ${transition};
    width: 140px;
    margin:0.5em;
    padding: 3em 1em;
    outline: none;
    background-color: ${colorLight};
    -webkit-touch-callout: none; 
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 
    ${props => props.selected && css`
        color: ${colorOffLight};
        background-color: ${colorPrimary};
    `}
    ${props => props.capitilize && css`
        text-transform: capitalize;
    `}
    ${props => props.space && css`
        margin: 20px;
    `}
    
`

export const CleanList = styled.ul`
    list-style: none;
    padding:0;
    li { margin: 0.5em 1em; }
`

export const ErrorSpan = styled.span`
    color: ${colorError}; 
`
export const SuccessSpan = styled.span`
    color : ${colorConfirm};
`

export const DateEpoch = (props) => {
    let d = new Date(props.epoch);
    let fixedDate = d.toLocaleDateString(0, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })

    return (
        <span>{fixedDate}</span>
    )
}

export const ShortText = (props) => {
    const limit = props.limit || 20  
    let text = props.text
    if(props.text.length > limit) {
        text= text.substring(0,limit)
        text = `${text}...` 
    }
    return <span>{text}</span>
}



