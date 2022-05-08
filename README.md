# H1 PROJECT 4 
 
## Project 4 is a continuation from my project 2.
 
### Tech Stack
#### I used Mongo - Express - React - Node.js to produce this project 


Changes made to the project was to remove the currency and commodity api/data.
This project is fully based around Crypto.  
External API data is provided by [Coingecko](https://www.coingecko.com/en/api/documentation).  
Design UI was provided by [MUI](https://mui.com/).  

The motivation behind this project was to understand the design and creation process of a full stack project.  

Towards the end of this project, I learnt a couple things that were essential to the design of this project.  

1. The design of the backend server is key and should be thought out before commencing. Towards the end of the project there were a few changes that had to be made to the backend structure as I had no way of identifying what data belonged to which user. 
2. Had i understood how redux works at the start, I would have probably assign the username of the user to the dataset that was saved.



## API Calls
| Purpose (USER)                           | HTTP Verb |
| ---------------------------------------- | --------- |
| User login                               | POST      |
| User signup                              | POST      |
| User logout                              | POST      |
| User status                              | POST      |
| User login status                        | POST      |
| User logout                              | POST      |

| Purpose (PORTFOLIO)                      | HTTP Verb |
| ---------------------------------------- | --------- |
| Add new portfolio data                   | POST      |
| Call from portfolio                      | POST      |
| Update to portfolio                      | POST      |
| Delete from portfolio                    | POST      |
| Display portfolio data                   | POST      |

| Purpose (WATCHLIST)                      | HTTP Verb |
| ---------------------------------------- | --------- |
| Add to watchlist                         | POST      |
| Display watchlist                        | POST      |
| Remove from watchlist                    | POST      |

| Purpose (EXTERNAL API)                   | HTTP Verb |
| ---------------------------------------- | --------- |
| Remove from watchlist                    | POST      |


