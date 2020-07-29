import React, {Component} from 'react';
import BLog from "./Blog";
import {connect} from "react-redux";

class BlogContainer extends Component {
    render() {
        return (
            <BLog {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.blogPage.posts
})

export default connect(mapStateToProps, {})(BlogContainer);