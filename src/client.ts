import type { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'
import ddbDocClient from './ddbDocClient'
import QueryBuilder from './queryBuilder'

class Client {
  private ddbDocClient: DynamoDBDocumentClient

  constructor() {
    this.ddbDocClient = ddbDocClient
  }

  table(name: string) {
    return new QueryBuilder(this.ddbDocClient).table(name)
  }
}

export default Client
