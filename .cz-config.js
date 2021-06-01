module.exports = {
  types: [
    { value: 'feat', name: 'feat: 一个新功能' },
    { value: 'fix', name: 'fix: 修复bug' },
    { value: 'docs', name: 'docs: 修改文档' },
    { value: 'style', name: 'style: 修改样式, 不影响代码含义的更改(空格、格式、缺少分号等)' },
    { value: 'refactor', name: 'refactor: 既不修复错误也不添加功能的代码更改, 重构（没有feat和fix操作）' },
    { value: 'perf', name: 'perf: 性能优化, 提高性能的代码更改' },
    { value: 'test', name: 'test: 增加单元测试、修改当前单元测试' },
    { value: 'chore', name: 'chore: 更改生成过程或辅助工具和库，如文档生成, 除src/test以外的其他改动（比如根目录下各种rc文件的改动等）'},
    { value: 'revert', name: 'revert: 版本回退等' },
    { value: 'WIP', name: 'WIP: 正在进行的工作' },
  ],
  // 预设的更改范围
  scopes: [
    { name: 'v0.0.1' },
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "选择您要提交的更改类型 Select the type of change that you're committing:",
    scope: '表示此更改的范围(可选) Denote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: '表示此更改的范围 Denote the SCOPE of this change:',
    subject: '为更改写一段简短的命令性时态描述 Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: '提供更改的更详细说明(可选)。使用“|”换行 Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: '列出所有中断更改(可选) List any BREAKING CHANGES (optional):\n',
    footer: '列出此更改结束的所有问题(可选)。例如：#31、#34 List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: '是否确实要继续上面的提交？ Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};