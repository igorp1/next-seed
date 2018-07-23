// LIB
import Helmet from 'react-helmet'

// COMPONENTS
import Layout from '../components/Layout'
import { PageContainer, LogoBanner, TextImgGrid, TextImgRow } from '../components/_common'

// SERVICES
// ???

const Index = (props) => (
    <Layout>

        <Helmet>
            <title>next-seed</title>
        </Helmet>
        
        <LogoBanner />

        <PageContainer>
            <TextImgGrid>
                <TextImgRow>
                    <div>
                        <h2>Investor Relationship</h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec fringilla orci, at vulputate dui. Nam porta pulvinar lorem in congue. Fusce facilisis risus eget ante tempus tempor. Proin eget venenatis lectus. Donec sem neque, viverra interdum mollis id, porttitor vel enim. Donec ultrices vitae nulla vel eleifend. Fusce dictum sapien nisi, quis ullamcorper leo convallis tincidunt. Nullam quis lacus dictum, viverra lorem non, gravida est.
                        </p>
                    </div>
                    <div>
                        <img title="" alt="" src='https://cdn.sibapp.com/images/img_placeholder.png' width="230px" height="230px" />
                    </div>
                </TextImgRow>
                <TextImgRow flip>
                    <div>
                        <h2>Investor Relationship</h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec fringilla orci, at vulputate dui. Nam porta pulvinar lorem in congue. Fusce facilisis risus eget ante tempus tempor. Proin eget venenatis lectus. Donec sem neque, viverra interdum mollis id, porttitor vel enim. Donec ultrices vitae nulla vel eleifend. Fusce dictum sapien nisi, quis ullamcorper leo convallis tincidunt. Nullam quis lacus dictum, viverra lorem non, gravida est.
                        </p>
                    </div>
                    <div>
                        <img title="" alt="" src='https://cdn.sibapp.com/images/img_placeholder.png' width="230px" height="230px" />
                    </div>
                </TextImgRow>
                <TextImgRow>
                    <div>
                        <h2>Investor Relationship</h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec fringilla orci, at vulputate dui. Nam porta pulvinar lorem in congue. Fusce facilisis risus eget ante tempus tempor. Proin eget venenatis lectus. Donec sem neque, viverra interdum mollis id, porttitor vel enim. Donec ultrices vitae nulla vel eleifend. Fusce dictum sapien nisi, quis ullamcorper leo convallis tincidunt. Nullam quis lacus dictum, viverra lorem non, gravida est.
                        </p>
                    </div>
                    <div>
                        <img title="" alt="" src='https://cdn.sibapp.com/images/img_placeholder.png' width="230px" height="230px" />
                    </div>
                </TextImgRow>
            </TextImgGrid>
        </PageContainer>


    </Layout>

)

export default Index
