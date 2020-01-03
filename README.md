# NestJS Microservices Example

This is an example of how two NestJS Microservices can interact with each other.

Both the request-response as well as the event-based patterns are implemented and tested.

To demonstrate their functionality, the event-test microservice implements a REST API endpoint which will, on a GET request, call the messaging-test microservice using the request-response pattern. Then it just replies to the GET request with the response it got from the microservice.

In addition to that and in order to test the event-based pattern, the messaging-test microservice, implements a REST API endpoint which will, on a GET request, emit an event to the event-test microservice and then it will reply with success message. The event-test microservice, after handling the event, will simply print a message to the server console.

### Event-Test REST API Port: 3000

### Messaging-Test REST API Port: 3001

### Event-Test Microservice TCP Port: 3010

### Messaging-Test Microservice TCP Port: 3011