import React from 'react';
import ServiceGroup from './service-group/service-group';


export default ({ data }) => {
  const serviceGroupsData = data.markdownRemark.frontmatter.service_groups;

  if (!serviceGroupsData) {
    return (
      <section id="service-groups">
        <div>
          Похоже вы не внесли данные для этой страницы!
        </div>
      </section>
    );
  }

  return (
    <section id="service-groups">
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
