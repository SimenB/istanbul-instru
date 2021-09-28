```sh-session
$ yarn
$ node index.js
{
  path: '/Users/simen/repos/istanbul-intru/file.js',
  hash: '57381216586f741c84859c1cecaf7de31f8d43f4',
  gcv: '__coverage__',
  coverageData: {
    path: '/Users/simen/repos/istanbul-intru/file.js',
    statementMap: { '0': [Object], '1': [Object], '2': [Object] },
    fnMap: { '0': [Object] },
    branchMap: { '0': [Object] },
    s: { '0': 0, '1': 0, '2': 0 },
    f: { '0': 0 },
    b: { '0': [Array] }
  }
}
null
```

As can be seen, v5 doesn't produce anything
