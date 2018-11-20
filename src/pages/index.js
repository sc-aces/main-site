import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../Layout';
// import img from '../assets/img/Esperia_Prowler_SHOT_01b.jpg'
import Home from '../pages-src/Home';

const IndexPage = props => {
  console.log(props);
  return (
    <Layout pathname={props.location.pathname}>
      <Home />
    </Layout>
  );
};

export default IndexPage;
