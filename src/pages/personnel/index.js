import React, { PureComponent, Fragment } from 'react';
import Header from '../../common/header';
import {
    PersonnelWrapper
} from './style';
import Main from './pages/main';

class Personnel extends PureComponent {
    render() {
        return(
            <Fragment>
                <Header />
                <PersonnelWrapper>
                    <Main />
                </PersonnelWrapper>
            </Fragment>
        )
    }
}

export default Personnel;