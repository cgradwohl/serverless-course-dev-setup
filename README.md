0. nvm, node install

1. `mkdir MY_DIR && cd MY_DIR`

2. `npm init`

3. `git init`

4. `v16.17.1 >> .nvmrc`

5. `(echo node_modules; echo coverage;) >> .gitignore`

6. `npm init @eslint/config`, follow wizard for typescript setup

7. `npm i -D prettier eslint-config-prettier`, `echo {}> .prettierrc.json`, `(echo node_modules; echo coverage;) >> .prettierignore` add prettier VS Code Extension and settings. add `"prettier"` to the end of the `extends` array in eslintrc.json

8. `npm i -D typescript`, `npx tsc --init`, add typescript VS Code Extension and settings

9. `npm i -D jest @types/jest ts-jest`, `npx jest --init` and set `preset: "ts-jest"`, add `"scripts": { "test": "jest --coverage" },` to package.json

At this point we are ready to add SAM template and SAM pipeline for Github Actions.
(Note that if you know you need multiple services, then it is a good idea
to use nx instead.)

10. `npm install --save @types/aws-lambda`, note that you use it like: `import { APIGatewayProxyHandlerV2 } from "aws-lambda";` not `import { APIGatewayProxyHandlerV2 } from "@types/aws-lambda";`

11. `npm i esbuild`
12.

```yml
AWSTemplateFormatVersion: '2010-09-09'

Transform: AWS::Serverless-2016-10-31

Description: Serverless patterns - Amazon API Gateway to AWS Lambda to Amazon DynamoDB

Resources:
  LambdaHandler:
    Type: AWS::Serverless::Function
    Description: 'Lambda function to Get and Put data into DynamoDB table'
    Properties:
      FunctionName: LambdaHandler
      Runtime: nodejs16.x
      # CodeUri: src/
      Handler: index.foobar
      Policies:
        DynamoDBCrudPolicy:
          TableName: !Ref DynamoDBTable
      Events:
        PutEvent:
          Type: Api
          Properties:
            Path: /
            Method: PUT
        GetEvent:
          Type: Api
          Properties:
            Path: /
            Method: GET
    Metadata:
    Metadata:
      BuildMethod: esbuild
      BuildProperties:
        Minify: true
        Target: "es2020"
        Sourcemap: true
        EntryPoints:
          - index.ts

  DynamoDBTable:
    Type: AWS::Serverless::SimpleTable
    Properties:
      TableName: DynamoTable
Outputs:
  EndpointUrl:
    Description: 'HTTP REST endpoint URL'
    Value: !Sub 'https://${ServerlessRestApi}.execute-api.${AWS::Region}.amazonaws.com/dev'
```

13. `sam build` and `sam deploy --guided`
