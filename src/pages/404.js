import React from 'react';
import Layout from '../Layout';
import { Typography } from '@material-ui/core';

const NotFoundPage = () => (
  <Layout>
    <Typography variant="h1">NOT FOUND</Typography>
    <Typography variant="body2">
      You just hit a route that doesn&#39;t exist... the sadness.
    </Typography>
  </Layout>
);

export default NotFoundPage;
