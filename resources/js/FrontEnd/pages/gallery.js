import React, { Component } from 'react'

import Lightroom from 'react-lightbox-gallery'
import PageTitle from '../components/pageTitle/pageTitle'
import Api from '../services/api';

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
        
          value:"1",
          isLoading:true,
          images:[]
        
        }
        this.apiCtrl = new Api;
        
      }

      componentDidMount(){
        this.apiCtrl.callAxios("/gallery/list").then(res=>{
           
            var data = [];
            console.log('gallery',  Object.entries(res.data).length)
            if(Object.entries(res.data).length > 0){
                Object.entries(res.data).map(([ind, val])=>{
                    val.map((value, index)=>{

                        data = [...data, {src:value.images, desc:ind, sub:ind}]
                    })
                })
              
                console.log('gallery',data)
            } else {
                var data = [
                    {
                        src: "./assets/images/04.jpg",
                        desc: 'Person wearing shoes',
                        sub: 'Gift Habeshaw'
                    },
                    {
                        src: "./assets/images/04.jpg",
                        desc: 'Blonde woman wearing sunglasses smiling at the camera ',
                        sub: 'Dmitriy Frantsev'
                    },
                    {
                        src: "./assets/images/04.jpg",
                        desc: 'Person wearing shoes',
                        sub: 'Gift Habeshaw'
                    },
                    {
                        src: "./assets/images/04.jpg",
                        desc: 'Blonde woman wearing sunglasses smiling at the camera ',
                        sub: 'Dmitriy Frantsev'
                    },
                    {
                        src: "./assets/images/04.jpg",
                        desc: 'Person wearing shoes',
                        sub: 'Gift Habeshaw'
                    },
                    {
                        src: "./assets/images/04.jpg",
                        desc: 'Blonde woman wearing sunglasses smiling at the camera ',
                        sub: 'Dmitriy Frantsev'
                    }
                ]
            }
            this.setState({images:[...data]})
        })
      }
     

       
    render() {
        this.props.loader(false)
       
        var settings = {
            columnCount: {
                default: 3,
                mobile: 1,
                tab: 2
            },
            mode: 'dark'
        }
        return (
            <div>
                <PageTitle data="Gallery" />
                <Lightroom images={this.state.images} settings={settings} />
            </div>
        )
    }
}

export default Gallery;