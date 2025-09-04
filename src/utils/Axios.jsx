import axios from "axios";

const getBaseURL = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDFmZTU3M2NhMjE3MzA5Zjk1OWRhNTI3YTlhMGM1NCIsIm5iZiI6MTc1NzAwMjI0My4xMzkwMDAyLCJzdWIiOiI2OGI5YmEwMzA1MDJhYWMzNDc5NDY0OTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2rAA_hXf66-sKQUGZ0R06D2Mc88p_XcEGyMc3fJtZhs",
  },
});

export default getBaseURL;

// access token -> eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDFmZTU3M2NhMjE3MzA5Zjk1OWRhNTI3YTlhMGM1NCIsIm5iZiI6MTc1NzAwMjI0My4xMzkwMDAyLCJzdWIiOiI2OGI5YmEwMzA1MDJhYWMzNDc5NDY0OTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2rAA_hXf66-sKQUGZ0R06D2Mc88p_XcEGyMc3fJtZhs

// API key -> 941fe573ca217309f959da527a9a0c54
