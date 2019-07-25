module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    Swiper: true,
    moment: true
  },
  rules: {
    "comma-dangle": [2, "never"], // 不允许使用尾随逗号
    "indent": ["warn", 2],
    "linebreak-style": ["warn", "unix"],
    "quotes": [1, "single"],
    "semi": 0, // 关闭分号约束
    "no-unused-vars": [1, { vars: "all", args: "none" }],
    "no-console": "off",
    "eqeqeq": 2, // 强制使用全等
    "spaced-comment": 2, // 注释空格
    "space-in-parens": [2, "never"], // 小括号里面不要有空格
    "comma-spacing": 2, // 逗号空格
    "key-spacing": [2, { beforeColon: false, afterColon: true }], // 对象字面量中冒号的前后空格
    "array-bracket-spacing": [2, "never"], // 是否允许非空数组里面有多余的空格
    "object-curly-spacing": [2, 'never'], //大括号内是否允许不必要的空格
    "default-case": 2, //switch语句最后必须有default
    "no-multi-spaces": 2, //禁止用多余的空格
    "no-multiple-empty-lines": [2, { max: 2 }], //空行最多不能超过2行
    "no-spaced-func": 2, // 函数调用时 函数名与()之间不能有空格
    "no-useless-escape": 0, //忽略正则表达式验证
    "space-before-function-paren": ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}]
  }
}
