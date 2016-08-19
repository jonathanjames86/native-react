import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
export function get(url) {
  return fetch(url)
    .then((response) => response.json());
}

export function searchFor(query) {
  // console.log(query)
  const requestUrl = (
    `https://api.spotify.com/v1/search?q=${query}&type=artist`
  );

  return get(requestUrl)
    .then((res) => {
      const artists = res.artists ? res.artists.items : [];
      return artists;
    });
}
