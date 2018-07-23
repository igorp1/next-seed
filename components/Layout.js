// LIB
import styled from 'styled-components'

// COMPONENT
import Header from './Header'
import Footer from './Footer'


const LayoutBase = styled.div`` // <~~~~~~~ you can add some layout styles here

const ResponsivePage = styled.div`
  @media all and (max-width: 895px) {padding-top: 60px;}
`

const Layout = (props) => (
  <LayoutBase>
    <Header />
      <ResponsivePage>
        {props.children}
      </ResponsivePage>
    <Footer />
  </LayoutBase>
)

export default Layout