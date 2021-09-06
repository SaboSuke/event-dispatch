# Event Dispatch

[![Software Version](https://img.shields.io/badge/event--dispatch-v1.0.0-green)](https://github.com/SaboSuke/event-dispatch)

A simple library to emit custom events.

## Methods

Name | Returns | Explanation
---- | ------- | -----------
  `dispatch` | `self` | Dispatch a custom event - (name, event).
  `on` | `self` | Listen to a specific event - (name, callback).

# Usage

```javascript

let EVENT = new EventDispatch();
EVENT.dispatch('myEvent', 'my data');

EVENT.on('myEvent', function(event){
    console.log(event) // 'my data'
})

```

## Contributing

If you have anything to contribute, or functionality that you lack - you are more than welcome to participate in this!
If anyone wishes to contribute unit tests that also would be great.

## License

The MIT License (MIT)

Copyright (c) 2021 Essam Abed (abedissam95@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.