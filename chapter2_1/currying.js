const getFakeMembers = count => new Promise((resolve, rejects) =>{
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () =>
        (request.status === 200) ?
            resolve(JSON.parse(request.response).results):
            rejects(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send()
});

const userLogs = userName => message =>
    console.log(`${userName} -> ${message}`);

const log = userLogs("grandpa23");

log("attempted to load 20 fake members");

getFakeMembers(20).then(
    members => log(`successfully loaded ${members.length} members`),
    errors => log('encountered  an error loading members  ')
);

const countdown = (value, fn) => {
    fn(value);
    return (value > 0) ? countdown(value-1, fn) : value
};
countdown(10, value => console.log(value));