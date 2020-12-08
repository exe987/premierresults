import React, { Fragment } from "react";
import Header from "./Header";
import Footer from './Footer'
import LastResults from "./LastResults";
import News from "./News";

const Index = () => {
  return (
    <Fragment>
      <Header />
      <LastResults />
      <div className="columns">
        <News />
      </div>
      <Footer/>
    </Fragment>
  );
};

export default Index;
