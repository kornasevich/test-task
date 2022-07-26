const token = 'Bearer mock'

export default async (config) => {
  config.headers.Authorization = `Bearer ${token}`;
  config.headers['Content-Type'] = 'application/json; charset=utf-8';

  return config;
};
