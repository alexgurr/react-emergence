import React from 'react';
import { Emerge, EmergeContainer } from '../src';
import { storiesOf } from '@storybook/react';

storiesOf('Emerge', module)
    .add('Default', () => {
        return (
            <EmergeContainer>
                <Emerge>
                    <div>foo</div>
                </Emerge>
            </EmergeContainer>
        );
    });
