/*/ Create a permission request for a user /*/
import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    var newDate = new Date();
    const params = {
        TableName: process.env.tableName,
        Item: {
            email: data.email,
            userId: event.requestContext.identity.cognitoIdentityId,
            permissionsId: uuid.v1(),
            references: data.references,
            referencesRequested: data.referencesRequested,
            hiddenrepos: data.hiddenrepos,
            hiddenreposRequested: data.hiddenreposRequested,
            resume: data.resume,
            resumeRequested: data.resumeRequested,
            latest: data.latest,
            createdAt: `${newDate.toDateString()} ${newDate.toTimeString()}`
        }
    };

    await dynamoDb.put(params);

    return params.Item;
});