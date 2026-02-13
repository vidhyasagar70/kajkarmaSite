import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendNotificationEmail(contactData: {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  description: string;
}) {
  if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
    console.warn('SMTP credentials not configured - skipping email notification');
    return { success: false, error: 'Email service not configured' };
  }

  const logoUrl = 'https://img.sanishtech.com/u/3577ad4e50b51b230d53a8c9e8e8e83e.png';

  try {
    await transporter.sendMail({
      from: `"KajKarma" <${process.env.SMTP_EMAIL}>`,
      to: 'kartikeya16.sharma@gmail.com',
      subject: '🔔 New Contact Form Submission - KajKarma',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Submission</title>
          <!--[if mso]>
          <style type="text/css">
            table { border-collapse: collapse; }
            .content { width: 100% !important; }
          </style>
          <![endif]-->
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: Arial, Helvetica, sans-serif; -webkit-font-smoothing: antialiased;">
          
          <!-- Wrapper -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5;">
            <tr>
              <td style="padding: 20px 10px;">
                
                <!-- Main Container -->
                <table role="presentation" align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 500px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #6450F0 0%, #39208F 100%); padding: 24px 20px; text-align: center;">
                      <img src="${logoUrl}" alt="KajKarma" style="height: 40px; max-width: 150px; margin-bottom: 12px;" />
                      <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600; line-height: 1.3;">New Contact Submission</h1>
                      <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0 0; font-size: 13px;">You have received a new inquiry</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 24px 20px;">
                      
                      <!-- Name -->
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                        <tr>
                          <td>
                            <p style="margin: 0 0 4px 0; font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Full Name</p>
                            <p style="margin: 0; font-size: 15px; color: #111827; font-weight: 500;">${contactData.firstName} ${contactData.lastName}</p>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Phone -->
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                        <tr>
                          <td>
                            <p style="margin: 0 0 4px 0; font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Phone Number</p>
                            <p style="margin: 0; font-size: 15px; color: #6450F0; font-weight: 500;">${contactData.phoneNumber}</p>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Divider -->
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin: 16px 0;">
                        <tr>
                          <td style="border-top: 1px solid #e5e7eb;"></td>
                        </tr>
                      </table>
                      
                      <!-- Description -->
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <p style="margin: 0 0 8px 0; font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Project Description</p>
                            <div style="background-color: #f9fafb; border-radius: 8px; padding: 14px; border-left: 3px solid #6450F0;">
                              <p style="margin: 0; font-size: 14px; color: #374151; line-height: 1.5;">${contactData.description}</p>
                            </div>
                          </td>
                        </tr>
                      </table>
                      
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 16px 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0; font-size: 12px; color: #6b7280;">
                        This is an automated notification from KajKarma
                      </p>
                      <p style="margin: 6px 0 0 0; font-size: 11px; color: #9ca3af;">
                        © ${new Date().getFullYear()} KajKarma. All rights reserved.
                      </p>
                    </td>
                  </tr>
                  
                </table>
                
              </td>
            </tr>
          </table>
          
        </body>
        </html>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
}
