import React, { PureComponent } from 'react';
import {
    HomePageBodyWrapper,
    TextItem
} from '../style';
import { connect } from 'react-redux';

class HomePageBody extends PureComponent {
    render() {
        return (
            <HomePageBodyWrapper>
                <TextItem>Blogs</TextItem>
            </HomePageBodyWrapper>
        )
    }
}

const mapState = (state) => ({
    userArticles : state.getIn(['home', 'userArticles'])
})

export default connect(mapState)(HomePageBody);