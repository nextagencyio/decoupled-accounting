import { gql } from '@apollo/client'

export const GET_ARTICLE_TEASERS = gql`
  query GetArticleTeasers($first: Int = 10) {
    nodeArticles(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeArticle {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ARTICLE_BY_PATH = gql`
  query GetArticleByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        heroImage { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        statsItems { ... on ParagraphStatItem { id number label } }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

export const GET_SERVICES = gql`
  query GetServices($first: Int = 10) {
    nodeServices(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeService {
          body { processed }
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          summary { processed }
          clientType
          serviceCategory { ... on TermInterface { id name } }
        }
      }
    }
  }
`

export const GET_SERVICE_BY_PATH = gql`
  query GetServiceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeService {
            id
            title
            path
          body { processed }
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          summary { processed }
          clientType
          serviceCategory { ... on TermInterface { id name } }
          }
        }
      }
    }
  }
`

export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers($first: Int = 10) {
    nodeTeamMembers(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeTeamMember {
          body { processed }
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          credentials
          jobTitle
          specializations
          education { processed }
          professionalMemberships
          teamRole { ... on TermInterface { id name } }
        }
      }
    }
  }
`

export const GET_TEAM_MEMBER_BY_PATH = gql`
  query GetTeamMemberByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeTeamMember {
            id
            title
            path
          body { processed }
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          credentials
          jobTitle
          specializations
          education { processed }
          professionalMemberships
          teamRole { ... on TermInterface { id name } }
          }
        }
      }
    }
  }
`

export const GET_RESOURCES = gql`
  query GetResources($first: Int = 10) {
    nodeResources(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeResource {
          body { processed }
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          summary { processed }
          resourceTopic { ... on TermInterface { id name } }
          authorName
          publishedDate { timestamp }
        }
      }
    }
  }
`

export const GET_RESOURCE_BY_PATH = gql`
  query GetResourceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeResource {
            id
            title
            path
          body { processed }
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          summary { processed }
          resourceTopic { ... on TermInterface { id name } }
          authorName
          publishedDate { timestamp }
          }
        }
      }
    }
  }
`
