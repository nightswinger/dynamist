import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'
import ddbDocClient from './ddbDocClient'
import QueryBuilder from './queryBuilder'

class Client {
  private ddbDocClient: DynamoDBDocumentClient

  constructor() {
    this.ddbDocClient = ddbDocClient
  }

  query() {
    return new QueryBuilder(this.ddbDocClient)
  }
}

export default Client
