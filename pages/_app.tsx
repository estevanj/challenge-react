import React from 'react';
import { AppProps } from 'next/app'
import {ProvideAuth} from '../utils/auth';


export default ({Component, pageProps}:AppProps) => (
    <ProvideAuth>
    <Component {...pageProps} />
    </ProvideAuth>
);