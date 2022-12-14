# hexo-dynamic-config

A hexo plugin for using variable in configuration.
for example, you can use environment variable in your `_config.yml`

## Install

```shell
# install locally (recommended)
npm install hexo-dynamic-config --save
```

Or installing with yarn? yarn add hexo-dynamic-config

## Usage

| key  | description                      |
| ---- | -------------------------------- |
| env  | environment variable process.env |
| hexo | hexo instance                    |

### Using environment variable

You can create a `.env` file in the root of your project:

```shell
FTP_SECRET=YOURFTPSECRET
```

Fill your project configuration `_config.yml` like this:

```yml
deploy:
  type: ftp
  ftp_secret: ${env.FTP_SECRET}
```

### Using hexo instance

Fill your project configuration `_config.yml` like this:

```yml
title: This is your blog title
subtitle: ${hexo.config.title} - Share good articles
```

.. Or like:

```yml
title: This is your blog title
tags:
  - env
  - linux
  - server
  - java
  - nginx
description: ${title} - share ${hexo.config.tags.join(',')}
```
