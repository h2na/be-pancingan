// App.js
import React from 'react';
import BlogNav from '../component/BlogNav';
import Footer from '../component/Footer';
import { useLoaderData } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { lazy } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Map = lazy(() => import('../component/Map.js'));

const DetailBlog = () => {
    const { data } = useLoaderData();
    const navigate = useNavigate({})
    function handleEdit(e){
        navigate(`/edit/blog/${data.data.slug}`)
    }
    return (
        <div className="d-flex flex-column min-vh-100"> 
            <div className="main-container" style={{backgroundColor: "aliceblue"}}>
                <BlogNav/>
                <Container>
                    <Row className=''>
                        <Col md={{ span: 6, offset: 4 }} center>
                            <h1>{data.data.title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span:12}} className='text-center'>
                            <Image className="center-block" src={data.data.image} fluid/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className='text-justify'>
                            <p dangerouslySetInnerHTML={{__html:data.data.description}}></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>Lokasi</Col>
                        
                        <Col md={6}>
                            <Map mapData={JSON.parse(data.data.location)} onDataChange={((e)=> true)} autocompleteMap={false}></Map>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                            <Col md={1}>
                                <Button variant="primary" className='mt-4' onClick={(e) => handleEdit(e)}>
                                    Edit
                                </Button>
                            </Col>        
                        </Row>
                    
                </Container>
            </div>
            <Footer/>
        </div>
    );
};
 
export default DetailBlog;