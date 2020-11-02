# Portfolio Site - Backend <a href="https://github.com/SeanMcTernan" target="_blank"><img src="https://raw.githubusercontent.com/SeanMcTernan/SeanMcTernan/140c9255ba95e71fc0988bc36cc1f327fe360b9f/ReadMe_Badge.svg" width="120"/></a>


<img src="https://raw.githubusercontent.com/SeanMcTernan/SeanMcTernan/8f45d4ce3325ae8bdd98a2b3d2b43114ab05bc6b/portfolio_app_backend.svg" align="right"
     alt="Clear-Monitoring App Image By Sean Mc Ternan " width="120" height="178">


The backend of the Portfolio site serves to assist login and permissions on my portfolio site. It allows users to create accounts, login and request permissions to see restricted areas on the site that are otherwise invisible unless approved.


## Technologies Used
| Name                                                        | Purpose                                                                                                    |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [NodeJS](https://nodejs.org/en/)         | Main programming language for the project |
| [AWS-SDK](https://www.npmjs.com/package/aws-sdk)                      | To help interact with AWS services like Cognito and Lambda |
| [Serverless-Bundle](https://www.npmjs.com/package/serverless-dotenv-plugin) | To assist with development of AWS and Lambda |
| [Serverless-Offline](https://www.npmjs.com/package/serverless-offline) | To emulates AWS and API Gateways on the local development environemnt  |
| [UUID](https://www.npmjs.com/package/uuid) | To create unique ID's for each permissions request  |

### The App

<p align="center">
  <img src="https://github.com/SeanMcTernan/SeanMcTernan/blob/main/Portfolio-App-Example_1.png?raw=true" width="738">
</p>

Since this reporsitory deals pSince this repository deals primarily in the backend, screenshots don't really tell the whole story. Instead, you can see here some examples of how those backend calls are being displayed on the front end to the end users. rimarily in the backend, screenshots don't really tell the whole story. Instead you can see here some examples of how those backend calls are being displayed on the front end to the end users. 

<p align="center">
  <img src="https://github.com/SeanMcTernan/SeanMcTernan/blob/main/Portfolio-App-Example_2.png?raw=true" width="738">
</p>

### Motivation & what was learned

The backend was created to reapply what I learned during the [Serverless-Stack](https://serverless-stack.com/) course. I enjoyed working with AWS during this course and wanted to continue growing my knowledge with this technology. I learned quite a lot about AWS and their offerings. In particular Lambda and Cognito. I feel they are well established tools, however from the outset them seem more difficult to pickup compared to their competitor Google and the API's they offer such as Firebase. 
