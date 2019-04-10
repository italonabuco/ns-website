import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Footer/Footer';

class Layout extends Component{

    state ={
        sideDrawerShow: false,
        toolbarBackgroundShow: false
    };

    closeSideDrawerHandler = () =>{
        this.setState({sideDrawerShow: false});
        this.unblockScroolHandler();
    };

    openSideDrawerHandler = () =>{
        this.setState({sideDrawerShow: true});
        this.blockScroolHandler();
    };

    blockScroolHandler = () =>{
        document.body.style.overflow = "hidden";
    }

    unblockScroolHandler = () =>{
        document.body.style.overflow = "auto";
    }

    toolbarBackgroundHandler = () =>{
        if(document.documentElement.scrollTop > 50){
            this.setState({toolbarBackgroundShow: true});
        }else{
            this.setState({toolbarBackgroundShow: false});
        }
    }

    componentDidMount(){
        window.onscroll = () => this.toolbarBackgroundHandler();
        
    }
    render(){
        return(
            <>
                <Toolbar openSideDrawer={this.openSideDrawerHandler} bg={this.state.toolbarBackgroundShow}/>
                <SideDrawer open={this.state.sideDrawerShow} closed={this.closeSideDrawerHandler}/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </>
        );
    }
}

export default Layout;