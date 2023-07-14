const nodeMailer = require('nodemailer');
const html =`
    <h1>Hello World</h1>
    <p>Isn't NodeMailer useful?</p>
`;
async function main() {
    const transporter = nodeMailer.createTransport({
        host : 'mail.openjavascript.info',
        port : 465,
        secure : true,
        auth : {
            user : 'test@openjavascript.info',
            pass : 'NodeMailer123!'
        }
    });
    const info = await transporter.sendMail({
        from : 'OpenJavaScript <test@openjavascript.info>',
        to : 'test2@openjavascript.info',
        subject : 'Testing, testing, 123',
        html : html,
    })
    console.log("Message sent: " + info.messageId);
}
main()
.catch(e => console.log(e));