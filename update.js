/*/Update an existing permissions request/*/
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const data = event.body;
    //Set variables for update request depending on input:
    const setVariables = (eventData) => {
        var expression;
        var body;
        var array;
        if (eventData == 1) {
            body = { ":referencesRequested": true };
            expression = "SET referencesRequested = :referencesRequested";
            array = [expression, body];
        } else if (eventData == 2) {
            body = { ":hiddenreposRequested": true };
            expression = "SET hiddenreposRequested = :hiddenreposRequested";
            array = [expression, body];
        } else {
            body = { ":resumeRequested": true };
            expression = "SET resumeRequested = :resumeRequested";
            array = [expression, body];
        }
        return array;
    };

    const expression = setVariables(data)[0];
    const body = setVariables(data)[1];

    const params = {
        TableName: process.env.tableName,
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            permissionsId: event.pathParameters.id
        },
        UpdateExpression: expression,
        ExpressionAttributeValues: body,
        ReturnValues: "ALL_NEW"
    };

    await dynamoDb.update(params);

    return { status: true };
});