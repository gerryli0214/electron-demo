# electron-demo

This is a electron demo

## startup

- npm run start-web

start web service

- npm run start-client

start electron client

- npm run build-win

build windows x86 platform

- npm run build-arm

build arm platform

- npm run build-linux

build linux platform

## 注意事项

- [electron-v10.4.7-win32-ia32.zip](https://github.com/electron/electron/releases/download/v10.4.7/electron-v10.4.7-win32-ia32.zip)

- [niss](https://github.com/electron-userland/electron-builder-binaries/releases/tag/nsis-3.0.4.1)

- niss乱码解析配置修改

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
