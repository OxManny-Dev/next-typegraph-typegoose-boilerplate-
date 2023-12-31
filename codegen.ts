import {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:3000/api/graphql',
  documents: ['./graphql/**/**/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './generated/hooks.ts': {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHOC: false,
        withComponent: false,
        withHooks: true
      }
    }
  }
}

export default config