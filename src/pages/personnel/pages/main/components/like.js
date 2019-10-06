import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Nothing from '../../../../../common/nothing';
import {
    ListItem,
    ListTitle,
    Information,
    ListBottom,
    BottomItem,
    ArticleText
} from '../styled';
import { personnelActionCreators } from '../../../store';

class Like extends PureComponent {
    render() {

        const { likes } = this.props;

        return (
            <Fragment>
                {
                    !likes ?
                    <Nothing />
                    :
                    likes.map( item => {
                        return(
                            <ListItem key={item.id}>
                                <Information>
                                    <ArticleText>{item.author}</ArticleText>
                                    <ArticleText>{item.createAt}</ArticleText>
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
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getLike();
    }
}

const mapState = (state) => ({
    likes : state.getIn(['personnel', 'likes'])
})

const mapDispatch = (dispatch) => {
    return {
        getLike() {
            dispatch(personnelActionCreators.getLike())
        }
    }
}

export default connect(mapState, mapDispatch)(Like);