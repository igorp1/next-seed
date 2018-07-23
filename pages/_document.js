import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import Helmet from 'react-helmet'

import { shadowL, shadowM, mainFont, transition, colorOffDark, colorDark, colorLink, colorError, colorConfirm, logos,  } from '../components/_theme'

/// SET GLOBAL STYLES =>
injectGlobal`
    body {
        margin:0;
        padding:0;    
        font-family: ${mainFont};
        color: ${colorDark};
        overflow-x:hidden;
    }
    i.material-icons{vertical-align : middle;}
    button{
        border: none;
        outline: none;
        cursor: pointer;
        padding: .5em 1em;
        border-radius: .1em;
        box-shadow: ${shadowL};
        transition: ${transition};
        font-family: ${mainFont};
        &:hover{
            box-shadow: ${shadowM};
        }
        &:active{
            box-shadow: ${shadowL};
        }
    }
    input{
        box-sizing : border-box;
        border: 0.05em solid ${colorOffDark};
        padding: .2em 0.5em;
        border-radius: .2em;
        outline: none;
        transition: ${transition};
        font-family: ${mainFont};
    }
    p{ line-height: 2.25em; }

    b, strong{ font-weight: bolder; }

    hr{
        border: .5px solid rgba(0,0,0,.5);
        width: 50%;
    }

    a{
        outline:none;
        cursor: pointer;
        color: ${ colorLink };
        transition: ${transition};
        &:hover{
            text-decoration: underline;
        }
    }
`

/// DEFINE RENDER DOCUMENT =>
export default class MyDocument extends Document {
    
    /*
     * ON INIT
     * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    static getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        const helmet = Helmet.renderStatic();
        return { ...page, styleTags, helmet }
    }

    /*
     * REACT-HELMET SETUP
     * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    get helmetHtmlAttrComponents () {
        return this.props.helmet.htmlAttributes.toComponent()
    }
    get helmetBodyAttrComponents () {
        return this.props.helmet.bodyAttributes.toComponent()
    }
    get helmetHeadComponents () {
        return Object.keys(this.props.helmet)
        .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
        .map(el => this.props.helmet[el].toComponent())
    }
    get defaultHelmet() {
        return (
            <Helmet>
                <title>Purple Facts | Real Estate Investing in the Age of Technology</title>
                <meta property="og:image" content={logos.banner} />
            </Helmet>
        )
    }

    /*
     * PLUGINS
     * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    get plugins() {
        return (
            <div>
                {/* {this.tawkAPI} */}
            </div>
        )
    }

    /*
     * RENDER DOC COMPONENT
     * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    render () {
        return (
            <html {...this.helmetHtmlAttrComponents}>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="og:locale" content="en_US" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/logo/favicon.png" />
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Scope+One" rel="stylesheet" />
                    { this.defaultHelmet }
                    { this.helmetHeadComponents }
                    { this.props.styleTags }
                </head>
                <body {...this.helmetBodyAttrComponents}>
                    <Main />
                    <NextScript />
                    {this.plugins}
                </body>
            </html>
        )
    }
}