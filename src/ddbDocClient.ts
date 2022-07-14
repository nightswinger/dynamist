import type { DynamoDBClientConfig } from '@aws-sdk/client-dynamodb'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'

const REGION = process.env.AWS_REGION || 'us-east-1'

const config: DynamoDBClientConfig = { region: REGION }

const ddbClient = new DynamoDBClient(config)
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient)

export default ddbDocClient
