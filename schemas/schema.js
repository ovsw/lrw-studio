// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import siteSettings from './documents/siteSettings'
import page from './documents/page'
import donateNowPage from './documents/donateNowPage'
import mapMarker from './documents/mapMarker'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import slideshowImage from './objects/slideshowImage'
import localFile from './objects/localFile'
import authorReference from './objects/authorReference'
import youtube from './objects/youtube'
import mytable from './objects/myTable'
import iframeEmbed from './objects/iframeEmbed'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    post,
    page,
    donateNowPage,
    mapMarker,
    category,
    author,
    mainImage,
    slideshowImage,
    localFile,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    youtube,
    iframeEmbed,
    mytable

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})