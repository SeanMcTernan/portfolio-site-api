/*/Send Email using SES/*/
import handler from "./libs/handler-lib";
import AWS from "aws-sdk";

const SES = new AWS.SES();

export const main = handler(async (event, context) => {
    console.log("event", event);
    const { to, from, subject, text } = JSON.parse(event.body);

    const params = {
        Destination: {
            ToAddresses: [to],
        },
        Message: {
            Body: {
                Text: { Data: text },
            },
            Subject: { Data: subject },
        },
        Source: from,
    };

    await SES.sendEmail(params).promise();
    return params;

});
