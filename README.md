Having habit of using `console.log` frequently?
Use **clogg** instead.

### Installation

`npm i clogg --save`

### Usage

Instead of:

```js:
console.log(myVariable);
```

write:

```js:
clogg(myVariable);
```

or

```js:
clogg(myVariable, "some optional comment");
```

Output:

```js:
clogg("my value", "this is example")
Time: 1:19 am
Type: string
Value: "my value"
Comment: this is example
```
