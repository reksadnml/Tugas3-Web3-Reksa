import React, { Component } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/portofolio.css' 
import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

const { Content } = Layout; // membuat konstanta content 
const whyData = [
    {
        // // image: require(`../../../assets/images/tracking.png`),
        title: 'Star',
        link : "hhttps://www.instagram.com/reksadnml/",
        description: "There are so much reason why i like to see the stars. \n The first one, it reminds me of you. The second one, stars always shine even darkness follow her. And last one, because she know all of my pray for you."
    },
    {
        // // image: require(`../../../assets/images/certificate.png`),
        title: 'Moon',
        link : "",
        description: "Look at that moon, honey! \n She is not brave enough to show her light. \n Do you know why? \n Cause she know, \n that you are brighter then her."
    },
    {
        // // image: require(`../../../assets/images/paperless.png`),
        title: 'Night',
        link : "",
        description: "But darling, darkness will always come. \n Don't worry, I'll be your side till dawn \n Since i'm here, won't you hold my hand?"
    }
]

class PortofolioComponent extends Component{
    render(){
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                View Some Of My Stories
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                Hope the sunshine will make your heart melt 
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#CD5C5C',
                                    border: 'none',
                                    maxWidth: 150,
                                    borderRadius: 26,
                                }}/>
                            </Col>                        
                            <Col lg={24} className="mt-20">
                                <Row
                                    type="flex" justify="center"
                                    className="card-why-container"
                                >
                                    {
                                        whyData.map( data =>
                                            <Col lg={8} md={12} sm={12} className="">
                                                <div className="card-why-content">
                                                    <img src={data.image}  className="card-why-image"/>
                                                    <div className="text-soft-blue semi-bold mt-10">
                                                        {data.title}
                                                    </div>
                                                    <div className="mt-10" style={{maxWidth:'260px'}}>
                                                        {data.description}<br/><br/>
                                                        <a href={data.link} className="btn btn-primary"></a>
                                                       {}
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default PortofolioComponent;