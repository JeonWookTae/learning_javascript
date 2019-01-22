const getFakeMembers = count => new Promise((resolve, rejects) =>{
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () =>
        (request.status === 200) ?
            resloves(JSON.parse(request.response).results):
            reject(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send()
});

const userLogs = userName => message =>
    console.log(`${userName} -> ${message}`);

const log = userLogs("grandpa23");

log("attempted to load 20 fake members");

getFakeMembers(20).then(
    members => log(`successfully loaded ${members.length} members`),
    error => log(`encountered an error loading member`)
);