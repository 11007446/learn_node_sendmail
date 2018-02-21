var fs = require("fs"),
    nodemailer = require('nodemailer'),
    config = require('./config');

var mailapp = {
    check: function() {
        var serverConfig = config.mailServConfig;
        var transporter = nodemailer.createTransport(serverConfig);
        transporter.verify(function(error, success) {
            if (error) {
                console.log(error.stack);
            } else {
                console.log('check ok');
            }
        });

    },
    start: function() {
        var htmlBody = "";
        var mailConfig = config.mailConfig;
        var serverConfig = config.mailServConfig;
        var msg = "";
        console.log("邮件正文开始读取");
        fs.readFile(mailConfig.htmlBodyPath, 'utf-8', function(err, data) {
            if (err) {
                //msg = "邮件正文读取错误 " + err.message;
                console.log("邮件正文读取错误 " + err.stack);
            } else {
                console.log("邮件正文读取完毕");
                var transporter = nodemailer.createTransport(serverConfig);
                mailConfig.html = data;
                console.log("邮件开始发送");
                transporter.sendMail(mailConfig, function(error, response) {
                    if (error) {
                        //msg = "邮件发送出现错误 " + error.message;
                        console.log("邮件发送出现错误 " + error.stack);
                    } else {
                        // msg = "邮件已发送 " + response.message;
                        console.log("邮件已发送");
                    }
                    transporter.close();
                });


            }
        });
        console.log("邮件发送调用完毕");


    }


};


exports.mailapp = mailapp;