import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

/**
* @author
* @class Services
**/

class Services extends Component {
 state = {
     services:[
         {
             icon:<FaCocktail />,
             title:"free cocktails",
             info: "sdadf"
         },
         {
            icon:<FaHiking />,
            title:"Endless Hiking",
            info: "sdadf"
        },
        {
            icon:<FaShuttleVan />,
            title:"Free Shuttle",
            info: "sdadf"
        },
        {
            icon:<FaBeer />,
            title:"Strongest Beer",
            info: "sdadf"
        },
     ]
 }
 render() {
  return(
      <section className="services">
          <Title title="services" />
          <div className="services-center">
              {this.state.services.map((item, index) => {
                  return <article key={index} className="service"><span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p></article>
              })}
          </div>
      </section>
    )
   }
 }


Services.propTypes = {}
export default Services