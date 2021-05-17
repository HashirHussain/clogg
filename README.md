Having habit of using `console.log` frequently?
Use **sayit** instead.

### Installation

`npm i sayit --save`

### Usage

Instead of:

```js:
console.log(myVariable);
```

write:

```js:
sayit(myVariable);
```

or

```js:
sayit(myVariable, "some optional comment");
```

Output:

```js:
sayit("my value", "this is example")
Time: 1:19 am
Type: string
Value: "my value"
Comment: this is example
```
