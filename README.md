Having habit of using `console.log` frequently?
Use **conlog**(**con**sole.**log**) instead.

### Installation

`npm i conlog --save`

### Usage

Instead of:

```js:
console.log(myVariable);
```

write:

```js:
conlog(myVariable);
```

or

```js:
conlog(myVariable, "some optional comment");
```

Output:

```js:
conlog("my value", "this is example")
Time: 1:19 am
Type: string
Value: "my value"
Comment: this is example
```
