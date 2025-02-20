# Example react-redux project (Loan Calculator)

By manipulating sliders, values in proper stores get changed and API call with latest values from both sliders is executed.
Response (format provided below) comes and total interests and monthly cost of loan is being updated in real time.

## Implemented with

- Typescript [https://www.typescriptlang.org/]
- React [https://reactjs.org/]
- Redux [https://redux.js.org/]
- StyledComponents [https://styled-components.com/]

## API Endpoint used

- **full path to API endpoint here**
- example response:

```
    {
       "principal":"currency":"GBP","amount":1000},
       "numPayments":9,
       "monthlyPayment":{"currency":"GBP","amount":125.27},
       "nominalInterestRate":0.3,
       "apr":0.34,
       "totalPayable":{"currency":"GBP","amount":1127.46},
       "totalInterest":{"currency":"GBP","amount":127.46}
    }
```

## Scripts

- yarn (to install all dependencies)
- yarn start (to run the app)
- yarn test (to run tests)

## Summary

Had fun, have fun and thanks for your time :)
