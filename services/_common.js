import fetch from 'isomorphic-unfetch'

export function getBaseUrlFromRequest(req) {
    if(!req) return window.location.origin
    return req.headers ? `${req.headers['x-forwarded-proto'] || 'http'}://${req.headers.host}` : ''
}

export function get(REQ){
    const BASE_URL = getBaseUrlFromRequest(REQ)
    return async function(path){
        const res = await fetch(`${BASE_URL}${path}`)
        return await res.json()
    }
}

export function reportBug() {
    pingSlack({
        fallback : `User reported a bug on ${window.location.href}`,
        color : '#DE2436',
        author_name : `User reported a bug`,
        author_icon : 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/129/lady-beetle_1f41e.png',
        title : window.location.href,
        title_link : window.location.href,
        ts : Math.floor(((new Date).getTime()) / 1000)
    })
}

export function pingSlack(payload) {
    const url = "YOUR_SLACK_WEBHOOK_URL";
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.onload = function() {
        if (xhr.status !== 200) console.error("Slack Hook failed");
    };
    
    xhr.send(JSON.stringify({ attachments : [ payload ] }));
}
