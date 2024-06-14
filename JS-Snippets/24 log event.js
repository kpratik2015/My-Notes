/**
 * Send each event with 1 sec delay and log fails every 5th time. Send next only if previous resolves. Attempt retry on failure.
 * Input:
const sdk = new SDK();

sdk.logEvent("event 1");
sdk.logEvent("event 2");
sdk.logEvent("event 3");
sdk.logEvent("event 4");
sdk.logEvent("event 5");
sdk.logEvent("event 6");
sdk.logEvent("event 7");
sdk.logEvent("event 8");
sdk.logEvent("event 9");
sdk.logEvent("event 10");

sdk.send();

Output:
"Analytics sent event 1"
"Analytics sent event 2"
"Analytics sent event 3"
"Analytics sent event 4"
"-----------------------"
"Failed to send event 5"
"Retrying sending event 5"
"-----------------------"
"Analytics sent event 5"
"Analytics sent event 6"
"Analytics sent event 7"
"Analytics sent event 8"
"-----------------------"
"Failed to send event 9"
"Retrying sending event 9"
"-----------------------"
"Analytics sent event 9"
"Analytics sent event 10"s
 * 
 */

function SDK() {

  this.events = [];

  this.wait = (ms) => new Promise(r => setTimeout(r, ms))

  this.logEvent = (event) => {
    this.events.push(event);
  }

  this.send = async () => {
    let ptr = 1;
    let isRetry = false;
    while (this.events.length) {
      if (ptr % 5 === 0) {
        isRetry = true;
        console.log('Failed to send event ', this.events[0]);
      } else {
        console.log(isRetry ? 'Retrying sending event ' : 'Analytics sent event ', this.events[0]);
        this.events = this.events.slice(1);
        isRetry = false;
      }
      ptr++;
      await this.wait(1000);
    }

  }

}