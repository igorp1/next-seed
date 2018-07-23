const fetch = require('isomorphic-unfetch')
const helpers = require('./helpers')


const slackWebHookUrl = "YOUR_SLACK_WEBHOOK_URL" //
const waveIcon = "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/129/waving-hand-sign_1f44b.png"
const tadaIcon = "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/129/party-popper_1f389.png"

const sendSlackNotification = (payload) => {
    fetch(slackWebHookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ attachments : [payload]})
    })
}
module.exports.sendSlackNotification = sendSlackNotification;

const SlackBot = {

    signupNotification : (email, type) => {
        sendSlackNotification({
            fallback : `New Singup : ${ type === 'investor' ? '💵' : '🏠' } ${type} | ${email}`,
            color : '#38c958',
            author_name : `New Singup : ${ type === 'investor' ? '💵' : '🏠' } ${type}`,
            author_icon : tadaIcon,
            title : email,
            title_link : `mailto:${email}`,
            ts : helpers.getTimeStamp()
        })
    },

    trafficNotifcation : (ip) => {
        sendSlackNotification({
            fallback : `Traffic On next-seed`,
            color : '#a956bf',
            author_name : `Traffic On next-seed`,
            author_icon : waveIcon,
            title : ip,
            title_link : `https://www.infobyip.com/ip-${ip}.html`,
            ts : helpers.getTimeStamp()
        })
    },

}

module.exports = SlackBot