import { gql } from "graphql-request";

export const query = gql`
  query MyQuery($access_key: String!, $categories: String!, $keywords: String) {
    myQuery(
      access_key: $access_key
      categories: $categories
      countries: "gb"
      sort: "published_desc"
      keywords: $keywords
    ) {
      data {
        author
        category
        image
        description
        country
        language
        published_at
        source
        title
        url
      }
      pagination {
        count
        limit
        offset
        total
      }
    }
  }
`;
