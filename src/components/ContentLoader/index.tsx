import React from 'react';
import ContentLoader, { Facebook, Code, Instagram, List } from 'react-content-loader'
const ContentLoaderOw = () => (
  <ContentLoader 
    height={90}
    width={400}
    speed={2}
    style={{'background': '#ffffff'}}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="15" y="15" rx="5" ry="5" width="100" height="74" />
    <rect x="135" y="25" rx="4" ry="4" width="250" height="8" />
    <rect x="215" y="50" rx="3" ry="3" width="170" height="8" />
    <rect x="135" y="75" rx="4" ry="4" width="250" height="8" />
  </ContentLoader>
)

const FacebookOw = () => {
  <Facebook />
}

const CodeOw = () => {
  <Code />
}

const InstagramOw = () => {
  <Instagram />
}

const ListOw = () => {
  <List />
}

module.exports = {
  ContentLoaderOw,
  FacebookOw,
  CodeOw,
  InstagramOw,
  ListOw
}