/*
 http://ejohn.org/blog/how-javascript-timers-work/

 var id = setTimeout(fn, delay);

 – Initiates a single timer which will call the specified
          function after the delay. The function returns a unique ID with which the timer can be canceled at a later time.

 var id = setInterval(fn, delay);

 – Similar to setTimeout but continually calls the function
          with a delay every time) until it is canceled.

 clearInterval(id);, clearTimeout(id); –

 Accepts a timer ID (returned by either of the aforementioned functions) and
 stops the timer callback from occurring.

 */