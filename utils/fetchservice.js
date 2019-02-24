import Config from '../config';

function getBasePath() {
  return Config.serverBaseURL;
}

function getDefaultConfig(isAuthenticated, token) {
  const config = {
    credentials: 'include',
  };
  if (isAuthenticated) {
    config.headers = {
      Authorization: `Bearer ${token || ''}`,
      'Content-Type': 'application/json',
    };
  }

  return config;
}
function makeHTTPCall(config, method) {
  const {
    path, basePath, body, isAuthenticated, token,
  } = config;
  const url = (basePath || getBasePath()) + path;

  const fetchConfig = getDefaultConfig(isAuthenticated, token);
  fetchConfig.method = method;
  fetchConfig.body = body ? JSON.stringify(body) : null;
  return fetch(url, fetchConfig).then(async (res) => {
    const data = await res.text();
    const parsedData = data ? JSON.parse(data) : null;
    if (!res || !res.ok) {
      window.console.log(
        `[Error] path: ${url} message:${parsedData} status: ${res
          && res.status}`,
      );
      return {
        status: res.status,
        data: null,
        error: parsedData,
      };
    }
    return {
      status: res.status,
      data: parsedData,
      error: null,
    };
  });
}
export const get = (config = {}) => makeHTTPCall(config, 'GET');

export const post = (config = {}) => makeHTTPCall(config, 'POST');

export const put = (config = {}) => makeHTTPCall(config, 'GET');

export const patch = (config = {}) => makeHTTPCall(config, 'PATCH');

export const httpDelete = (config = {}) => makeHTTPCall(config, 'DELETE');
