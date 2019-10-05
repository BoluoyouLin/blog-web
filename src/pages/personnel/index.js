import React, { PureComponent, Fragment } from 'react';
import Header from '../../common/header';
import {
    PersonnelWrapper
} from './style';

class Personnel extends PureComponent {
    render() {
        return(
            <Fragment>
                <Header />
                <PersonnelWrapper>
                    
                </PersonnelWrapper>
            </Fragment>
        )
    }
}

export default Personnel;