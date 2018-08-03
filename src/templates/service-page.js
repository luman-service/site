import React from 'react';


export default ({ data }) => {
  const serviceData = data.markdownRemark.frontmatter.services_groups;
  return (
    <div>{JSON.stringify(serviceData, null, 2)}</div>
  );
}

export const queruy = graphql`
  query ServiceDataQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      frontmatter {
        services_groups {
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