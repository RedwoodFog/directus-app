import { SDK } from '@directus/sdk-js/dist/esm/index.js';

// const path = window.location.pathname;
// const parts = path.split("/");
// const adminIndex = parts.indexOf("admin");
// const apiRootPath = parts.slice(0, adminIndex).join("/") + "/";

// console.log(path);
// console.log(parts);
// console.log(adminIndex);
// console.log(apiRootPath);

// // wtf why are env vars getting removed????
// console.log(process.env.API_URL);

const apiRootPath = 'https://backend-dev01.ttsuat.com/';

const client = new SDK({
	mode: 'cookie',
	url: apiRootPath
});

export default client;
