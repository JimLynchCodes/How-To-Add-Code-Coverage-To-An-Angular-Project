# How To Add Code Coverage To An Angular Project

Video tutorial: https://www.youtube.com/watch?v=zPdR-Mti-SU&t=1s

Shoutout to Jason Swett for writing a nice, concise blog post on how to do this:

https://www.codewithjason.com/add-test-coverage-report-angular-cli-project/


## tldr; Install the dependencies and run tests with the code coverage flag!

```
npm install karma karma-jasmine karma-chrome-launcher karma-jasmine-html-reporter karma-coverage-istanbul-reporter
```

```
ng test --code-coverage
```
