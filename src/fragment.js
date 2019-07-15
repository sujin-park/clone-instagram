// deep query, relationship 을 하고싶다면 $fragment 가 아닌 다른 방법으로 해야함
export const USER_FRAGMENT = `
    id
    username
`

export const COMMENT_FRAGMENT = `
    id
    text
    user {
      ${USER_FRAGMENT}
    }
`

export const FILE_FRAGMENT = `
    id
    url
`

export const FULL_POST_FRAGMENT = `
  fragment PostParts on Post{
    id
    location
    caption
    files: {
      ${FILE_FRAGMENT}
    }
    comments: {
      ${COMMENT_FRAGMENT}
    }
    user: {
      ${USER_FRAGMENT}
    }
  }
`