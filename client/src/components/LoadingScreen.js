import React, { Component } from 'react'
// import ReactLoading from 'react-loading'
import { SyncLoader } from 'react-spinners';

export class LoadingScreen extends Component {
    render() {
        return (
                <div 
                style={{height: '100vh'}} 
                className='d-flex align-items-center justify-content-center flex-column animated '>
                    <SyncLoader color='red'/>
                    <img 
                    src={require('../images/hlb-logo.png')} 
                    width={window.innerWidth >= 810 ? '30%' : '70%'}
                    height='auto'
                    className='mt-3'
                    alt='HLB Logo'/>
                    {/* <ReactLoading type={'bubbles'} color={'red'} height={100} width={100} /> */}
                </div>

        )
    }
}

export default LoadingScreen
