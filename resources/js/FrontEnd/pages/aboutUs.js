import React, { Component } from 'react';
import AboutInfo from '../components/aboutInfo/aboutInfo';
import Api from '../services/api';
class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.apiCtrl = new Api;
        this.state = {
            aboutUs: [],
        };
    }
    componentDidMount(){
        // if((typeof  this.props.aboutUs !== 'undefined')){
        //     if(Object.keys(this.props.aboutUs).length > 0){
        //         return false;
        //     }
        // }
        // this.apiCtrl.callAxiosGet(`/company/view/${'tvs-dealer'}`).then((response)=>{
        //     if(response.success == true){
        //         const res = response.data;
        //         const data = [
        //             {
        //                 image: res.about_company_image,
        //                 title: 'About',
        //                 description: res.about_company,
        //                 isReverse: true
        //             },   
        //             {
        //                 image: res.company_mission_image,
        //                 description: res.company_mission,
        //                 isReverse: false
        //             },
        //             {
        //                 image:  res.company_vision_image,
    
        //                 description: res.company_vision,
        //                 isReverse: true
        //             }
        //            ];
        //            this.setState(data)
        //            // this.setState(...response.data);
        //         }
        //     })
            
        }

        componentDidUpdate(prevProps, prevState){
            if(prevProps.aboutUs !== this.props.aboutUs){
                this.setState((old)=>({...old, aboutUs:this.props.aboutUs}))
                this.props.loader(false)
            }
        }
        render() {
            // console.log('About props', this.state,this.props)

        return (
            <div className='aboutPage'>
                {
                    this.state.aboutUs.map(( item, index)=>{

                       return <AboutInfo data={item} />
                    })
               }
            </div>
        );
    }
};


export default AboutUs;


// {
//     image: './assets/images/vision-01.jpg',
//     title: 'About',
//     description: 'RANGARAYA AUTOMOTIVES TVS is one of the fastest growing Authorised Dealer for TVS 2 Wheelers. Endowed with a state-of-the-art dealership and highly skilled Marketing and Service Staff, we have devoted ourselves to helping and serving our customers to the best of our ability.',
//     isReverse: true
// },
// {
//     image: 'https://i.ibb.co/HzZgGkK/vision-03.png',
//     description: 'Here at RANGARAYA AUTOMOTIVES TVS, we do more than just sell great two-wheelers, we strive to deliver 100% customer satisfaction from the moment you first contact our dealership. With a loyal base of more than 50,000 satisfied customers across Mumbai, prompt customer service and world class facilities, RANGARAYA AUTOMOTIVES TVS is the most reliable automobile dealer in West Bengal. We have been known for our impeccable quality Service and customer satisfaction, which we assure you will personally experience in this relationship as well.',
//     isReverse: false
// },
// {
//     image: './assets/images/vision-01.jpg',
//     description: 'RANGARAYA AUTOMOTIVES TVS showcases the finest two wheelers from the TVS stable. Elegant design aesthetics, superior technology, and quality build sets the TVS brigade apart from its competition. RANGARAYA AUTOMOTIVES TVS brings under one roof with ultra-modern workshop with highly experienced and trained staff to provide best in class service to all our customers. The unmatched TVS superiority, style and class backed by efficient customer service and after sales support.',
//     isReverse: true
// }