import React from 'react';
import ServiceGroup from './service-group/service-group';
import './service-page.scss';


export default ({ data, showModal }) => {
  const serviceGroupsData = data.markdownRemark.frontmatter.service_groups;
  const serviceGroupDescription = data.markdownRemark.frontmatter.service_groups_description;

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
      <div className="service-groups-description service-groups-description__wrapper">
        <div className="service-groups-description service-groups-description__content">
          {serviceGroupDescription}
        </div>
      </div>
      {serviceGroupsData.map((serviceGroupData, i) => <ServiceGroup data={serviceGroupData} key={i} index={i} showModal={showModal} />)}
    </section>
  );
}

export const queruy = graphql`
  query ServiceDataQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      frontmatter {
        service_groups_description
        service_groups {
          caption
          description
          picture
          price_examples {
            service_name
            service_price
          }
        }
      }
    }
  }
`
