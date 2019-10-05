import React, { PureComponent, Fragment } from 'react';
import Header from '../../common/header';
import {
    ListWrapper,
    Information,
    ListTitle,
    ListBottom,
    ListItem,
    BottomItem

} from './style';
import { connect } from 'react-redux';

class Search extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header />
                <ListWrapper>
                {
                    this.props.articles.map( item => {
                        return (
                            <ListItem key={item.id}>
                                <Information>
                                    <span>{item.author}</span>
                                    <span>{item.createAt}</span>
                                    <span>{item.type}</span>
                                    </Information>
                                    <ListTitle>{item.title}</ListTitle>
                                    <ListBottom>
                                        <BottomItem>{item.like}</BottomItem>
                                        <BottomItem>{item.comments}</BottomItem>
                                    </ListBottom>
                            </ListItem>
                        )
                    })
                }
            </ListWrapper>
            </Fragment>
        )
    }
}

const mapState = (state) => ({
    articles: state.getIn(['search', 'articles'])
})

export default connect(mapState)(Search);