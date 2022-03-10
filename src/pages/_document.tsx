import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import 'reflect-metadata';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Asset managers</title>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
