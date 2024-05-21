/* eslint-disable semi */
import request from "./request";

export const getMicrobiomesearch = (params) => {
  return request({
    url: "/microbiomesearch",
    params
  });
};

export const getMicrotaxResult = (params) => {
  return request({
    url: "/microtax",
    params
  });
};

export const getMicrolefseResult = (params) => {
  return request({
    url: "/microlefse",
    params
  });
};

export const getImmunomesearch = (params) => {
  return request({
    url: "/immunomesearch",
    params
  });
};

export const getMetasearch = (params) => {
  return request({
    url: "/metasearch",
    params
  });
};

export const getSinglecellsearch = (params) => {
  return request({
    url: "/singlecellsearch",
    params
  });
};

export const proteindiffBySymbol = (params) => {
  return request({
    url: "/proteindiffBySymbol",
    params
  });
};

export const getsinglecells = (params) => {
  return request({
    url: '/singlecellDetail',
    params
  })
}

export const getLinks = (params) => {
  return request({
    url: '/links',
    params
  })
}

export const getepigeneticDetail = (params) => {
  return request({
    url: '/epigeneticDetail',
    params
  })
}

export const getproteinDetail = (params) => {
  return request({
    url: '/proteinDetail',
    params
  })
}

export const getgenomicsearch = (params) => {
  return request({
    url: '/genomicsearch',
    params
  })
}

export const getmtdnasearch = (params) => {
  return request({
    url: '/mtdnasearch',
    params
  })
}
