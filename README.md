# Portfolio Site - Backend <a href="https://github.com/SeanMcTernan" target="_blank"><img src="https://raw.githubusercontent.com/SeanMcTernan/SeanMcTernan/7c1dcc08830e2087866a9d06c1f37d7b431edf82/ReadMe_Images/ReadMe_Badge_Small.svg" alt="Site badgeBy Sean Mc Ternan" width="120"/></a>

<img src="https://raw.githubusercontent.com/SeanMcTernan/SeanMcTernan/940a359ef8a199aac0fe3e5cecaaef3d01e17542/ReadMe_Images/Portfolio_App/portfolio_app_backend.svg" align="right" alt="Portfolio Site Backend App Image By Sean Mc Ternan" width="120" height="178">

The backend of the Portfolio site serves to assist login and permissions on my portfolio site. It allows users to create accounts, login and request permissions to see restricted areas on the site that are otherwise invisible unless approved.

## Technologies Used

| Name                                                                        | Purpose                                                               |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [NodeJS](https://nodejs.org/en/)                                            | Main programming language for the project                             |
| [AWS-Cognito](https://aws.amazon.com/cognito/)                              | To handle users logins and permissions                                |
| [AWS-DynamoDB](https://aws.amazon.com/dynamodb/)                            | To keep track of the permission of each user in a database            |
| [AWS-Lambda](https://aws.amazon.com/lambda/)                                | To handle the cloud functions required to execute the CRUD operations |
| [AWS-SDK](https://www.npmjs.com/package/aws-sdk)                            | To help interact with AWS services like Cognito and Lambda            |
| [Serverless-Bundle](https://www.npmjs.com/package/serverless-dotenv-plugin) | To assist with development of AWS and Lambda                          |
| [Serverless-Offline](https://www.npmjs.com/package/serverless-offline)      | To emulates AWS and API Gateways on the local development environment |
| [UUID](https://www.npmjs.com/package/uuid)                                  | To create unique ID's for each permissions request                    |

### The App

<p align="center">
  <img src="https://github.com/SeanMcTernan/SeanMcTernan/blob/master/ReadMe_Images/Portfolio_App/Portfolio-App-Sreenshot_1.png?raw=true" alt="Portfolio Site Backend Screenshot 1" width="738">
</p>

Since this repository deals primarily in the backend, screenshots don't really tell the whole story. Instead, you can see here some examples of how those backend calls are being displayed on the front end to the end users.

<p align="center">
  <img src="https://github.com/SeanMcTernan/SeanMcTernan/blob/master/ReadMe_Images/Portfolio_App/portfolio_site_sample_2.png?raw=true" alt="Portfolio Site Backend Screenshot 2" width="738">
</p>

### Motivation & what was learned

The backend was created to reapply what I learned during the [Serverless-Stack](https://serverless-stack.com/) course. I enjoyed working with AWS during this course and wanted to continue growing my knowledge with this technology. I learned quite a lot about AWS and their offerings. In particular Lambda and Cognito. I feel they are well established tools, however from the outset they seem alot more difficult to pickup compared to their competitor Google and the API's they offer such as Firebase.

### Install Instructions

1. Clone/Download the Repository
2. From the folder run `npm install`

### Development Time: 3 Weeks
