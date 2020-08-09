# IBM Insights Lite

Library that acts as a wrapper to creating an HTTP request to IBM Personality Insights API.

From the [official documentation](https://cloud.ibm.com/docs/personality-insights?topic=personality-insights-gettingStarted):

> The IBM Watson™ Personality Insights service derives insights about personality characteristics from social media, enterprise data, or other digital communications. This tutorial can help you get started quickly with the Personality Insights service.

## Usage

Initialize the main class `IBMInsightsLite` with base URL and access token:

```ts
// Base url is the service endpoint based on the
// location of the service instance
const baseURL = '';

// API key generated when the resource was created
const apiAccessToken = '';

// Plain text that will be used to perform personality analysis
const textForAnalysis = '';

const insights = new IBMInsightsLite(baseURL, apiAccessToken);
await insights.createRequest(textForAnalysis);
```

Response comes in form of a `ProfileModel` interface.

## Notes

Service assumes you're using English, but the IBM Personality Insights API does offer analysis in other languages as well, however, due to an extremely limited use case as to what this library is being developed for in the first place, I cannot guaranteee successful operation of the library when using languages other than English.

Service (IBM Personality Insights API) has these functions disabled:

-   Raw scores (indicates whether a raw score in addition to a normalized percentile is returned for each characteristic; raw scores are not compared with a sample population)
-   Consumption preferences (indicates whether consumption preferences are returned with the results)

If there will be interest in future development, or if I'll personally require these functions enabled/optional, the library might support them in the future, however, at the moment they would only represent an unnecessary overhead.

## License

Project is licensed under MIT license.
