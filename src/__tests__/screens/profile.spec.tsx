import React from 'react';
import { render } from '@testing-library/react-native';

import {Profile} from '../../screens/Profile';

test('check', () => {

    const {debug} = render (<Profile/>);

    debug();
})

