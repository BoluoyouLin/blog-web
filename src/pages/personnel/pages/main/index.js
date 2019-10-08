import React , { PureComponent, Fragment } from 'react';
import UserCard from './components/userCard';
import Content from './components/content';

class Main extends PureComponent {
    render() {
        return (
            <Fragment>
                <UserCard />
                <Content />
            </Fragment>
        )
    }
}

export default Main;