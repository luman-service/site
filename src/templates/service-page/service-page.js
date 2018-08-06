import React from 'react';

import ServiceGroup from './services-group';
import './service-page.scss';


export default ({ data }) => {
  const serviceGroupsData = data.markdownRemark.frontmatter.service_groups;

  if (!serviceGroupsData) {
    return (
      <section className="" id="service-groups">
        <div className="">
          Похоже вы не внесли данные для этой страницы!
        </div>
      </section>
    );
  }

  return (
    <section className="" id="service-groups">
      {serviceGroupsData.map((serviceGroupData, i) => <ServiceGroup data={serviceGroupData} key={i} index={i} />)}
    </section>
  );
}

export const queruy = graphql`
  query ServiceDataQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      frontmatter {
        service_groups {
          caption
          description
          price_examples {
            service_name
            service_price
          }
        }
      }
    }
  }
`
