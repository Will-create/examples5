# Total.js v5 examples

Total.js examples optimized for Total.js v5.

### Reports

- Cluster example
    - Not working in `debug` mode. only in realease mode

- Authorization example;
    - @authorize and @unauthorize flags don't work correctly 
    - or maybe Main.session.logout($) has problem

- Authorization-www-basic example 
    - $.baa() is not a function in controllers;

- Blocks example
    - MAP() is not defined in definitions
    - When any `not defined` error F.port becomes `auto`

- Components example
    - component is not defined in views

- Configurations example
    - config-debug and config-release don't work

- Download-file
    - `$.image()` not working in controller
    - `$.file(filename, [download], [header],[callback])` --> `filename` relative path to public does not work. Only absolute path is working

- Download-file-counter
    - Counter refuses to increment. 

- Download stream
    - Error [ERR_HTTP_HEADERS_SENT]: Cannot write headers after they are sent to the client
