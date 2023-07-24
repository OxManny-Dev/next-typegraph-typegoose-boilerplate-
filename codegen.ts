import {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:3000/api/graphql',
  documents: ['./test/**/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './hooks/hooks.ts': {
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