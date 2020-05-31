const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = class InlineSourcePlugin {
  constructor({ match }) {
    this.reg = match
    console.log('reg====', this.reg)
  }

  processTag(tag, compilation) {
    // console.log(tag)
    let newTag, url
    if (tag.tagName === 'link' && this.reg.test(tag.attributes.href)) {
      newTag = {
        tagName: 'style',
        attributes: { type: 'text/css' }
      }
      url = tag.attributes.href
    }

    if (tag.tagName === 'script' && this.reg.test(tag.attributes.src)) {
      newTag = {
        tagName: 'script',
        attributes: { type: 'application/javascript' }
      }
      url = tag.attributes.src
    }

    if (url) {
      newTag.innerHTML = compilation.assets[url].source()
      delete compilation.assets[url]
    }
    return newTag
  }

  processTags(data, compilation) {
    const headTags = []
    const bodyTags = []
    data.headTags.forEach(headTag => {
      headTags.push(this.processTag(headTag, compilation))
    })

    data.bodyTags.forEach(bodyTag => {
      bodyTags.push(this.processTag(bodyTag, compilation))
    })

    return { ...data, headTags, bodyTags }
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('InlineSourcePlugin', compilation => {
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tapAsync('alterPlugin', (data, cb) => {
        data = this.processTags(data, compilation)
        cb(null, data)
      })

    })
  }
}