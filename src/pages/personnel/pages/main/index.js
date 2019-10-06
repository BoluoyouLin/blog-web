import React , { PureComponent } from 'react';
import UserCard from './components/userCard';
import Content from './components/content';

class Main extends PureComponent {
    render() {
        return (
            <div>
                <UserCard />
                <Content />
            </div>
        )
    }
}

export default Main;