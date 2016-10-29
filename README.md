# generator-pass

pass is a [Yeoman generator](http://yeoman.io/), used to create a [Scala](http://www.scala-lang.org/), [Slick](http://slick.lightbend.com/), [Play](https://www.playframework.com/) and [Angular](https://angularjs.org/) project

## Getting Started

Before you begin make sure you have the [yo scaffolding tool](http://yeoman.io/learning/index.html) and [Grunt](http://gruntjs.com/) installed

To globally install *yo*, *Grunt* and generator-pass you will need to use npm:

```
$ npm install -g yo grunt generator-pass
```

While we're at it, download [sbt](http://www.scala-sbt.org/) or [activator](https://www.lightbend.com/activator/download) as we'll need it to run the application.

## Generators

Available generators:

* [pass](#application-generator)
* [pass:module](#module-generator)

## Application Generator

The application generator will help you create a fresh copy of a PASS application in your working folder. To create your PASS application, navigate to a new project folder, and then use *yo* to generate your application:

```
$ yo pass
```

The generator will ask you a few questions about your new application and will generate it for you. When the installation process is over, you will be able to use sbt to run your new PASS application:

```
$ sbt run
```

## Module Generator

The generator will ask you a few questions about your module, when the proccess is done:

```
$ yo pass:module
```

you can reload the project using sbt, if you are already on the sbt command line:

```
$ sbt reload
```

## TODO

* refactor the code for the generator and comment it out
* Add support for Slick Evolutions, that way one doesn't have to create the tables manually
* Expose the API of the basic crud operations using Swagger in GET /api endpoint
* add support for authentication and authorization


## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
