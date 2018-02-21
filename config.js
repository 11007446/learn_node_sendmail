module.exports = {
    servConfig: {
        port: 8888
    },


    mailServConfig: {
        host: 'mail1.sstic.sh.cn',
        port: 443,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'automail', // generated ethereal user
            pass: '#Stcsm#print#' // generated ethereal password
        },
        debug: true
    },
    mailConfig: {
        from: 'cjl@sstic.sh.cn', // sender address
        to: 'cjl@sstic.sh.cn,11007446@qq.com', // list of receivers
        subject: '信息专递', // Subject line
        htmlBodyPath: './mailbody/20180210.html'
    }



};