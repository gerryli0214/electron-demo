# electron-demo

This is a electron demo

## 启动命令

- npm run start-web

start web service

- npm run start-client

start electron client

- npm run build-main

build main process code

- npm run build-win

build windows x86 platform

- npm run build-arm

build arm platform

- npm run build-linux

build linux platform

- npm run test-xxx

run unit test code

## 注意事项

### 依赖文件手动下载地址

- [electron-v10.4.7-win32-ia32.zip](https://github.com/electron/electron/releases/download/v10.4.7/electron-v10.4.7-win32-ia32.zip)

- [niss](https://github.com/electron-userland/electron-builder-binaries/releases/tag/nsis-3.0.4.1)

### nsis乱码解析配置修改（项目目录中存在中文字符，导致打包失败）

```JavaScript
//node_module/app-builder-lib/out/targets/nsis/NsisTarget.js
async executeMakensis(defines, commands, script) {
  const args = this.options.warningsAsErrors === false ? [] : ["-WX"];
  //此处新增
  args.push("-INPUTCHARSET", "UTF8");
  //结束
  for (const name of Object.keys(defines)) {
    const value = defines[name];

    if (value == null) {
      args.push(`-D${name}`);
    } else {
      args.push(`-D${name}=${value}`);
    }
  }
  // ...
}
```
