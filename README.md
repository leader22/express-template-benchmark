# express-template-benchmark

Check performance of React as **static** template engine.

Engines are

- https://github.com/reactjs/express-react-views
  - `ReactDOMServer.renderToStaticMarkup()`
- https://github.com/pugjs/pug

## Setup

Start each server.

```
# port:3000
NODE_ENV=production npm run start:react

# port:4000
NODE_ENV=production npm run start:pug
```

Then, check perf.

```
ab -n 200 -c 200 http://localhost:3000/
ab -n 200 -c 200 http://localhost:4000/
```

## Results

on MacBook Pro (Retina, 13-inch, Early 2015)

### react
```
Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /
Document Length:        456 bytes

Concurrency Level:      200
Time taken for tests:   0.114 seconds
Complete requests:      200
Failed requests:        0
Total transferred:      131600 bytes
HTML transferred:       91200 bytes
Requests per second:    1748.63 [#/sec] (mean)
Time per request:       114.375 [ms] (mean)
Time per request:       0.572 [ms] (mean, across all concurrent requests)
Transfer rate:          1123.63 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        4    6   2.0      7      10
Processing:     7   59  28.2     64     101
Waiting:        7   59  28.2     64     101
Total:         16   65  26.3     71     105

Percentage of the requests served within a certain time (ms)
  50%     71
  66%     79
  75%     87
  80%     90
  90%     97
  95%    102
  98%    104
  99%    105
 100%    105 (longest request)
```

### pug
```
Server Software:
Server Hostname:        localhost
Server Port:            4000

Document Path:          /
Document Length:        427 bytes

Concurrency Level:      200
Time taken for tests:   0.098 seconds
Complete requests:      200
Failed requests:        0
Total transferred:      125800 bytes
HTML transferred:       85400 bytes
Requests per second:    2042.96 [#/sec] (mean)
Time per request:       97.897 [ms] (mean)
Time per request:       0.489 [ms] (mean, across all concurrent requests)
Transfer rate:          1254.91 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        3    6   1.7      6       9
Processing:    24   55  17.9     56      87
Waiting:       24   55  17.9     56      87
Total:         32   61  16.3     62      89

Percentage of the requests served within a certain time (ms)
  50%     62
  66%     71
  75%     75
  80%     77
  90%     85
  95%     87
  98%     88
  99%     88
 100%     89 (longest request)
```
