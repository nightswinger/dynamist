import { QueryCommand } from '@aws-sdk/client-dynamodb'
import type {
  DynamoDBDocumentClient,
  QueryCommandInput
} from '@aws-sdk/lib-dynamodb'

class QueryBuilder {
  private client: DynamoDBDocumentClient
  private tableName?: string

  constructor(client: DynamoDBDocumentClient) {
    this.client = client
  }

  table(tableName: string) {
    if (typeof tableName !== 'string') {
      throw new Error('InvalidTableName Exception')
    }
    this.tableName = tableName
    return this
  }

  exec() {
    const input: QueryCommandInput = {
      TableName: this.tableName
    }

    return this.client.send(new QueryCommand(input))
  }
}

export default QueryBuilder
