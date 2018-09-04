var { buildSchema } = require('graphql');

const schemaQL = buildSchema(`
    input SignUpInput {
        nickName: String!
        email: String!
        pw: String!
    }

    input PostInput {
        partyHead: String!
        author: String
        title: String!
        data: dataInput!
        clap: Int
    }

    input dataInput {
        category: String
        oneLine: String
        desc: String
        hashTag: String
        memberNumber: Int
    }

    input cateCheck {
        category: [String]
    }

    input Title {
        title: String!
    }

    type User {
        id: String!
        nickName: String!
        email: String!
        pw: String!
        info: Info
    }

    type Info {
        intro: String
        hashTag: [String]
        location: String
    }

    type Post {
        id: ID!
        partyHead: String!
        author: String
        title: String!
        data: Data!
        clap: Int
        date: String
    }

    type Data {
        category: String
        oneLine: String
        desc: String
        hashTag: String
        memberNumber: Int
    }

    type Query {
        getInitialPosts: [Post]
        getUpdatePosts(cateCheck: cateCheck!): [Post]
        getByTitle(titleInput: Title): Post
        getByHead(head: String!): [Post]
    }

    type Mutation {
        createUser(input: SignUpInput): User
        createPost(input: PostInput): Post
        updatePost(input: PostInput): Post
        updateClap(titleInput: Title): Post
    }
`)

module.exports = schemaQL;