import React ,{ PureComponent } from 'react';
import { 
    ListWrapper,
    ListItem,
    ListTitle,
    Information,
    ListBottom,
    BottomItem
} from '../style';
import { connect } from 'react-redux';

class List extends PureComponent {
    render() {
        return (
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
        )
    }
}

const mapState = (state) => {
    return {
        articles: state.getIn(['home', 'articles'])
    }
}

export default connect(mapState)(List);